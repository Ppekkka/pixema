export enum themeModes {
  LIGHT_MODE = "LIGHT_MODE",
  DARK_MODE = "DARK_MODE",
}

const palettes: Record<themeModes, any> = {
  [themeModes.LIGHT_MODE]: {
    background: "#FFFFFF",
    text: "#242426",
    grey: "#AFB2B6",
  },
  [themeModes.DARK_MODE]: {
    background: "#000000",
    text: "#FFFFFF",
    grey: "#323537",
  },
};

export const createTheme = (themeMode: themeModes) => {
  return {
    palette: {
      themeMode: themeMode,
      ...palettes,
    },
  };
};
