const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const primaryColor = "#F6F7F7";
export const secondaryColor = "#40434A";
export const altColor = "#E3705F";

export default {
  light: {
    text: "#000",
    background: primaryColor,
    tint: secondaryColor,
    tabIconDefault: "#ccc",
    tabIconSelected: secondaryColor,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
