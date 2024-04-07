export enum themeModes {
  LIGHT_MODE = "LIGHT_MODE",
  DARK_MODE = "DARK_MODE",
}

const palettes: Record<themeModes, any> = {
  [themeModes.LIGHT_MODE]: {
    primary: {
      background: "#FFFFFF",
      text: "#242426",
      grey: "#AFB2B6",
      darkGrey: "#6c7174",
    },
  },
  [themeModes.DARK_MODE]: {
    primary: {
      background: "#000000",
      text: "#FFFFFF",
      grey: "#323537",
      darkGrey: "#242426",
    },
  },
};

export const createTheme = (themeMode: themeModes) => {
  return {
    palette: {
      themeMode,
      ...palettes[themeMode],
    },
  };
};
