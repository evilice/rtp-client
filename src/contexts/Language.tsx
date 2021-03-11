import React, { useContext, useCallback, useState, PropsWithChildren } from 'react';
import i18n from 'i18n';

enum TLanguage { EN = 'en-US', RU = 'ru-RU' };

interface ILanguageContext {
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
};

const LanguageContext = React.createContext<ILanguageContext>({ setLanguage: () => {}, language: TLanguage.EN });

const LanguageContextProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const localLanguage = localStorage.getItem('language') as TLanguage || i18n.getLocale();
  const [language, setLanguageState] = useState<TLanguage>(localLanguage);
  const setLanguage = useCallback((language) => {
    i18n.setLocale(language);
    setLanguageState(language);
  }, [setLanguageState]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{ children }</LanguageContext.Provider>;
};

const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguage = useCallback(() => {
    setLanguage(language === TLanguage.EN ? TLanguage.RU : TLanguage.EN);
  }, [language, setLanguage]);

  return { language, setLanguage, toggleLanguage };
};

export {
  i18n,
  useLanguage,
  LanguageContext,
  LanguageContextProvider
};