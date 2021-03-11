import React, { Dispatch, PropsWithChildren, SetStateAction, useCallback, useContext, useState, useMemo } from 'react';
import { createMuiTheme } from "@material-ui/core/styles";

import themes from '../themes';
import { ThemeType } from '../types';

type TCustom = {
    palette?: {
      topbar: string;
      leftbar: string;
      active: string;
      disactive: string;
      yellowLine: string;
      redLine: string;
      blueLine: string;
      lightBlueLine: string;
      groupTitle: string;
      groupContent: string;
    }
};
/** Add custom theme constants */
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom?: TCustom
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: TCustom
  }
}

interface IThemeContext {
  stateTheme: ThemeType;
  setStateTheme: Dispatch<SetStateAction<ThemeType>>
};

const ThemeContext = React.createContext<IThemeContext>({
  stateTheme: ThemeType.DARK,
  setStateTheme: () => {}
});

const ThemeContextProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [stateTheme, setStateTheme] = useState<ThemeType>(ThemeType.DARK);
  return <ThemeContext.Provider value={{ stateTheme, setStateTheme }}>{ children }</ThemeContext.Provider>;
};

const useTheme = () => {
  const { stateTheme, setStateTheme } = useContext(ThemeContext);
  const toggleTheme = useCallback(() => {
    const newThemeType = stateTheme === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;
    setStateTheme(newThemeType);
  }, [stateTheme, setStateTheme]);

  return useMemo(() => ({
    theme: createMuiTheme(themes[stateTheme]),
    themeType: stateTheme,
    setTheme: setStateTheme,
    toggleTheme
  }), [stateTheme, setStateTheme, toggleTheme]);
};

export {
  useTheme,
  ThemeContext,
  ThemeContextProvider
};