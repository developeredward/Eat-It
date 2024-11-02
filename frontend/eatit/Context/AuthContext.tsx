import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthContextProps {
  authState?: { token: string | null; authenticated: Boolean | null };
  login?: (email: string, password: string) => Promise<any>;
  register?: (
    name: string,
    email: string,
    phone: number,
    password: string
  ) => Promise<any>;
  getProfile?: () => Promise<any>;
  logout?: () => Promise<any>;
}

export const API_URL = "http://192.168.8.127:3000/api/";

const AuthContext = createContext<AuthContextProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: Boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const checkAuthenticated = async () => {
      const token = await SecureStore.getItemAsync("token");
      console.log("stored token::" + token);

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({ token: token, authenticated: true });
      } else {
        setAuthState({ token: null, authenticated: false });
      }
    };
    checkAuthenticated();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        await SecureStore.setItemAsync("token", response.data.token);
        setAuthState({ token: response.data.token, authenticated: true });
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      }

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getProfile = async () => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const response = await axios.get(`${API_URL}user/profile`);

        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const register = async (
    name: string,
    email: string,
    phone: number,
    password: string
  ) => {
    try {
      const response = await axios.post(`${API_URL}auth/register`, {
        name,
        email,
        phone,
        password,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("token");
      setAuthState({ token: null, authenticated: false });
    } catch (error) {
      console.log(error);
    }
  };

  const value = { authState, login, register, getProfile, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
