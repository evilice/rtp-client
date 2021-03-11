import { ThemeOptions } from "@material-ui/core/styles";

export const darkTheme: ThemeOptions = {
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#2B2B30",
      },
      rounded: {
        borderRadius: 2,
      },
    },
    MuiButton: {
      containedPrimary: {
        borderRadius: 2,
        color: "#ffffff",
        fontWeight: "bold",
        backgroundColor: "#73BA00",
      },
      containedSecondary: {
        borderRadius: 2,
        color: "#8C8F94",
        fontWeight: "bold",
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#ffffff",
        color: "#222",
        "&$focused": {
          backgroundColor: "#ffffff",
        },
        borderRadius: 2,
      },
      input: {
        padding: 8,
      },
      underline: {
        "&&&:before": {
          borderBottom: "none",
        },
        "&&:after": {
          borderBottom: "none",
        },
      },
    },
  },
  palette: {
    type: "dark",
    background: {
      default: "#17171C",
      paper: "#1B1B20",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#8C8F94",
    },
    primary: {
      main: "#BCC3E4",
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
      leftbar: "#3F444D",
      active: "#62C42C",
      disactive: "#CCCCCC",
      blueLine: "#355CD0",
      lightBlueLine: "#03BFFF",
      redLine: "#E92223",
      yellowLine: "#F18B20",
      groupTitle: "#212228",
      groupContent: "#1B1B20",
    },
  },
};
