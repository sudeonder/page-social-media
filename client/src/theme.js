import { createTheme } from "@mui/material";
import "./styles.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  typography: {
    fontFamily: "Indie Flower, cursive",
  },
});
