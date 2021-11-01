import React, { useEffect } from 'react';

import './App.scss';
import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";
import Header from './interface/Header/Header';
import Footer from './interface/Footer/Footer';

import { flattenMessages, msgs } from "./config/translate";
import { IntlProvider } from 'react-intl';
import { LanguageProvider, setLanguage, useLanguageDispatch, useLanguageState } from './config/context/langContext';

const App = () => {
  let languageState = useLanguageState();
  const languageDispatch = useLanguageDispatch();
  const currentMessages = languageState.name == "ar" ? flattenMessages(msgs.ar) : flattenMessages(msgs.en);

  useEffect(() => {
    let lang: any = "en";

    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
    }

    languageDispatch(
      setLanguage({
        name: lang
      })
    );
  }, []);

  return (
    <IntlProvider locale={languageState.name} messages={currentMessages}>
      <div className="wrapper">
        <Header />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <div className="push" />
      </div>

      <Footer />
    </IntlProvider>
  );
}

const AppLangProviderWrapper = () => {
  return (
    // <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    // </Provider>
  );
}

export default AppLangProviderWrapper;
