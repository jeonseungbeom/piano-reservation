import React from "react";
import Router from "./Router";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid black",
            minHeight: "100vh",
            maxWidth: "37.5rem",
            padding: "0 1rem",
          }}
        >
          <Header />
          <Router />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
