import { FC } from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { useTheme } from '../../../contexts/Theme';

export const BaseLayout:FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};