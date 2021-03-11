import { ThemeOptions } from "@material-ui/core/styles";

export const lightTheme: ThemeOptions = {
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#E2E8F0",
      },
      rounded: {
        borderRadius: 0,
      },
    },
    MuiButton: {
      containedPrimary: {
        borderRadius: 2,
        color: "#3F444D",
        fontWeight: "bold",
      },
      containedSecondary: {
        borderRadius: 2,
        color: "#8C8F94",
        fontWeight: "bold",
      },
    },
  },
  palette: {
    type: "light",
    background: {
      default: "#E5E5E5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#3F444D",
      secondary: "#7A8599",
    },
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#3F444D",
    },
    error: {
      main: "#FD444F",
    },
  },
  custom: {
    palette: {
      topbar: "#E2E8F0",
      leftbar: "#FFFFFF",
      active: "#62C42C",
      disactive: "#656C78",
      blueLine: "#355CD0",
      lightBlueLine: "#03BFFF",
      redLine: "#E92223",
      yellowLine: "#F18B20",
      groupTitle: "#FFFFFF",
      groupContent: "#FFFFFF",
    },
  },
};
