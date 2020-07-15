import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import {
  selectTheme,
  selectSelectedThemeKey,
  themeSliceKey,
  reducer,
} from './slice';
import { useInjectReducer } from 'redux-injectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useInjectReducer({ key: themeSliceKey, reducer: reducer });
  const theme = useSelector(selectTheme);
  const selectedTheme = useSelector(selectSelectedThemeKey);
  document.documentElement.setAttribute('theme', selectedTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
