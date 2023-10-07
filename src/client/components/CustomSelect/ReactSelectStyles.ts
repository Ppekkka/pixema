import { StylesConfig } from "react-select";

interface option {
  value: string;
  label: string;
}

export const colourStyles: StylesConfig<option, true> = {
 singleValue: (styles) => {
    return {
      ...styles,
      color: "white",
      fontFamily: "Exo 2, sans-serif",
      fontSize: "16px",
      fontWeight: "500",
    };
  },


  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#242426",
    };
  },

  multiValueLabel: (styles) => ({
    ...styles,
    color: "#FFFFFF",
  }),

  multiValueRemove: (styles) => ({
    ...styles,
    color: "#AFB2B6",
    ":hover": {
      ...styles[":hover"],
      backgroundColor: "#323537",
      color: "white",
    },
  }),

  clearIndicator: (styles) => {
    return {
      ...styles,
      display: "none",
    };
  },

  menuList: (styles) => {
    return {
      ...styles,
      padding: "0",
    };
  },

  noOptionsMessage: (styles) => {
    return {
      ...styles,
      display: "none",
    };
  },
};
