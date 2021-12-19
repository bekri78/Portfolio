import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header/header.jsx";
import Accueil from "./Header/Accueil/Accueil.jsx";
import Service from "./Service/Service.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Skills from "./Skills/Skills.jsx";
import Apropos from "./Apropos/Apropos.jsx";
import Distance from "./Distance/Distance";
import Form from "./Form/Form.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyle = createGlobalStyle`

body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191970" : "#EEE"};
     color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#677294")}
     
    }
 
  }  
    `;

function getInitialTheme() {
  const saveTheme = storage.getItem("theme");
  return saveTheme ? JSON.parse(saveTheme) : { mode: "light" };
}
function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [t, i18n] = useTranslation("global");
  const changeLang = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header
          changeWord={(word) => setTheme((theme.mode = { mode: word }))}
          changeLng={(lng) => changeLang(lng)}
        />
        <Accueil />
        <Service />
        <Portfolio />
        <Skills />
        <Apropos />
        <Distance />
        <Form />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
