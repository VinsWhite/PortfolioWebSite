import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import global_en from './translations/en/global.json'
import global_it from './translations/it/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

// find out which is the browser language
const browserLanguage = navigator.language;

// supported languages
const supportedLanguages = ['en', 'it'];
const defaultLanguage = supportedLanguages.includes(browserLanguage.split('-')[0]) ? browserLanguage.split('-')[0] : 'en';

i18next.init({
  interpolation: {escapeValue: false},
  lng: defaultLanguage,
  resources: {
    en: {
      global: global_en
    },
    it: {
      global: global_it
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
