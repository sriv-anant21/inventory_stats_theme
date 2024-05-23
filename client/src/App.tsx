//@ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider, jssPreset } from "@mui/styles";
import { create } from "jss";
import { themes } from "./styles/themes";
import { InventoryLayout } from "./views/inventoryLayout";
import "./App.css";
import LoginSignupPage from "./views/landingPageLayout";
import { getCookie } from "./utilities/handleCookies";
import { Loader } from "./components/loader";

const jss = create({ plugins: [...jssPreset().plugins] });

const App = () => {
  const theme = useSelector((state: any) => state.theme.theme) || "default";
  const { isLoggedIn, loader } = useSelector((state: any) => state.preLogin);
  const token = getCookie("token");

  if (loader) {
    return <Loader />;
  }

  const isAuthenticated = isLoggedIn || token;

  return (
    <ThemeProvider theme={themes[theme]}>
      <StylesProvider jss={jss}>
        {isAuthenticated ? <InventoryLayout /> : <LoginSignupPage />}
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
