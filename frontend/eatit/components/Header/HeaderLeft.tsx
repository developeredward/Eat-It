import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { wrapperMargin } from "@/constants/Default";
import axios from "axios";

import { getData } from "@/hooks/useFetch";
import { useAuth } from "@/Context/AuthContext";

const HeaderLeft = () => {
  const { getProfile } = useAuth();
  const [profile, setProfile] = useState({
    name: "",
    img: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile!();
      setProfile({
        name: profileData.user.name,
        img: profileData.user.avatar,
      });
      console.log(profileData);
    };

    fetchProfile();
  }, []);

  return (
    <View style={styles.headInfoContainer}>
      {profile.img ? (
        <Image
          height={50}
          width={50}
          style={styles.headInfoImage}
          source={{
            uri: profile.img,
          }}
        />
      ) : (
        <Image
          height={50}
          width={50}
          style={styles.headInfoImage}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
          }}
        />
      )}

      <View style={styles.headInfoTextContent}>
        {profile.name && (
          <Text style={styles.headerInfoText}>Hi, {profile.name}</Text>
        )}
        <Text style={styles.headerInfoPara}>What can we get you?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: wrapperMargin,
    height: 50,
    gap: 10,
    width: "100%",
  },
  headInfoImage: {
    borderRadius: 100,
  },
  headerInfoText: {
    fontSize: 12,
    color: "#656565",
  },
  headerInfoPara: {
    fontSize: 15,
  },
  headInfoTextContent: {
    justifyContent: "center",
    gap: 6,
  },
});

export default HeaderLeft;
