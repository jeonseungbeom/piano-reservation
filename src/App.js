import React from "react";
import Router from "./Router";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "Noto Sans KR, sans-serif",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            fontSize: "62.5%",
          },
        }}
      />
      <Router />
    </ThemeProvider>
  );
};

export default App;
