import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";
import "antd/dist/antd.css";
import globale_fr from "./Translation/fr/translate.json";
import globale_ch from "./Translation/ch/translate.json";
import globale_db from "./Translation/db/translate.json";
import globale_en from "./Translation/en/translate.json";
import globale_es from "./Translation/es/translate.json";
import globale_it from "./Translation/it/translate.json";
import globale_jp from "./Translation/jp/translate.json";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "fr",
  resources: {
    fr: {
      global: globale_fr,
    },
    en: {
      global: globale_en,
    },
    es: {
      global: globale_es,
    },
    it: {
      global: globale_it,
    },
    db: {
      global: globale_db,
    },
    jp: {
      global: globale_jp,
    },
    ch: {
      global: globale_ch,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
