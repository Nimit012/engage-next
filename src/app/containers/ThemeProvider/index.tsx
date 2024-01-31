'use client'
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as EMThemeProvider } from '@emotion/react'
import { themeConvertor } from '../../utils/theme-converter/theme-converter';

import themeJson from '../../utils/theme.json';

const convertedTheme = themeConvertor(themeJson);
let theme: any = createTheme({...convertedTheme});


function Home(props: any) {
  return (
    <ThemeProvider theme={theme}>
    <EMThemeProvider theme={theme}>
            {props.children}
    </EMThemeProvider>
    </ThemeProvider>

  );
}

export default Home;
