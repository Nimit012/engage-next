import { themeOverrides } from "./theme-overrides";
// import { ClientConfigService } from "services/client-config-service";

export function themeConvertor(masterTheme: any) {
  let convertedTheme = JSON.parse(JSON.stringify(masterTheme));

  // putting 'palette.surface' keys inside 'palette.background'
  if (convertedTheme.palette && convertedTheme.palette.surface) {
    const {
      main,
      contrastText,
      contrastTextLight,
      contrastText2,
      contrastText3,
    } = convertedTheme.palette.surface;
    if (!masterTheme.palette.background) {
      convertedTheme.palette.background = {};
    }
    convertedTheme.palette.background = {
      ...convertedTheme.palette.background,
      paper: main,
      paperContrastText: contrastText,
      paperContrastTextLight: contrastTextLight,
      paperContrastText2: contrastText2,
      paperContrastText3: contrastText3,
    };
  }

  convertedTheme = {
    ...convertedTheme,
    palette: {
      ...convertedTheme.palette,
      ...themeOverrides.palette,
    },
    ...themeOverrides.root,
  };

  return convertedTheme;
}

export const getGeneratedTheme = (
  theme: any,
  ootbTheme: any,
  currentUserSettings: any,
  locale?: any
) => {
  const generatedTheme = JSON.parse(JSON.stringify(theme));

  if (!generatedTheme.settings) {
    generatedTheme.settings = {
      appliedFont: generatedTheme.fontSettings.defaultFont,
      underlineLinks: false,
      selectedLangLocale: "en",
      highContrastApplied: false,
    };
  }

  const fontsData = [
    {
      id: "workSans",
      name: "Work Sans",
      fontCSSURL:
        "https://fonts.googleapis.com/css?family=Work+Sans:500,900,700,600,400&display=swap",
    },
    {
      id: "oswald",
      name: "Oswald",
      fontCSSURL:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap",
    },
    {
      id: "dyslexia",
      name: "OpenDyslexicAlta",
      fontCSSURL: "fonts/OpenDyslexic.css",
    },
  ];
  //   const assetsBasePath = ClientConfigService.getAssetsBasePath();
  if (!generatedTheme.urls) {
    const defaultFont = generatedTheme.fontSettings.defaultFont;
    const defaultFontData = fontsData.find((font) => font.name === defaultFont);
    // let fontCSSURL = defaultFontData.fontCSSURL.includes('https') ? defaultFontData.fontCSSURL : assetsBasePath + defaultFontData.fontCSSURL;
    let fontCSSURL =
      "https://fonts.googleapis.com/css?family=Work+Sans:500,900,700,600,400&display=swap";
    generatedTheme.urls = [
      {
        name: defaultFont,
        url: fontCSSURL,
        type: "fontCSS",
      },
    ];
  }

  const boolUnderlineLinks =
    currentUserSettings && currentUserSettings.underlineLinks;
  if (boolUnderlineLinks !== undefined) {
    try {
      generatedTheme.settings.underlineLinks = boolUnderlineLinks;
    } catch (err) {
      console.log(err);
    }
  }

  if (locale !== undefined && generatedTheme.settings) {
    try {
      generatedTheme.settings.selectedLangLocale = locale;
    } catch (err) {
      console.log(err);
    }
  }

  const boolAccessibleFont =
    currentUserSettings && currentUserSettings.accessibleFont;
  if (boolAccessibleFont !== undefined) {
    try {
      let fontFamily = boolAccessibleFont
        ? generatedTheme.fontSettings.defaultAccessibleFont
        : generatedTheme.fontSettings.defaultFont;
      const fontURLNode = generatedTheme.urls.find(
        (urlNode: any) => urlNode.name === generatedTheme.settings.appliedFont
      );
      fontURLNode.name = fontFamily;
      const fontNodeInOOTB = fontsData.find((font) => font.name === fontFamily);
      //   let fontCSSURL = fontNodeInOOTB.fontCSSURL.includes("https")
      //     ? fontNodeInOOTB.fontCSSURL
      //     : assetsBasePath + fontNodeInOOTB.fontCSSURL;
      let fontCSSURL =
        "https://fonts.googleapis.com/css?family=Work+Sans:500,900,700,600,400&display=swap";
      fontURLNode.url = fontCSSURL;
      generatedTheme.settings.appliedFont = fontFamily;
      const { typography: updatedFontFamilyTypo } =
        getUpdatedPropertyInAllTypoVariants(generatedTheme, ootbTheme, {
          key: "fontFamily",
          value: fontFamily,
        });
      generatedTheme.typography = updatedFontFamilyTypo;
    } catch (err) {
      console.log(err);
    }
  }

  const lineHeight =
    currentUserSettings && currentUserSettings.lineHeightScalingFactor;
  if (lineHeight !== undefined) {
    const { typography: updatedLineHeightTypo } =
      getUpdatedPropertyInAllTypoVariants(generatedTheme, ootbTheme, {
        key: "lineHeight",
        value: lineHeight,
      });
    generatedTheme.typography = updatedLineHeightTypo;
  }

  const fontSize =
    currentUserSettings && currentUserSettings.fontSizeScalingFactor;
  if (fontSize !== undefined) {
    const { typography: updatedFontSizeTypo } =
      getUpdatedPropertyInAllTypoVariants(generatedTheme, ootbTheme, {
        key: "fontSize",
        value: fontSize,
      });
    generatedTheme.typography = updatedFontSizeTypo;
  }

  generatedTheme.settings.highContrastApplied =
    currentUserSettings && currentUserSettings.highContrast;

  return generatedTheme;
};

const getUpdatedPropertyInAllTypoVariants = (
  theme: any,
  ootbTheme: any,
  propertyInfo: any
) => {
  const propName = propertyInfo.key;
  const propValue = propertyInfo.value;
  const updatedTheme = JSON.parse(JSON.stringify(theme));
  Object.keys(updatedTheme.typography).forEach((variant) => {
    if (propName === "fontFamily") {
      const updatedFontFamily = `"${propValue}",${theme.fontSettings.fallbackFonts}`;
      updatedTheme.typography[variant].fontFamily = updatedFontFamily;
    } else if (propName === "lineHeight") {
      // Do not increase line-height more than the maxScalingFactor value for typography variants whose maxScalingFactor is defined in theme.
      let addValue =
        ootbTheme.json.typography[variant].maxScalingFactor !== undefined
          ? Math.min(
              Number(propValue),
              Number(ootbTheme.json.typography[variant].maxScalingFactor)
            )
          : Number(propValue);
      let lineHeightValue: any = String(
        Number(ootbTheme.json.typography[variant][propName]) + Number(addValue)
      );

      updatedTheme.typography[variant][propName] =
        Math.round(lineHeightValue * 100) / 100;
    } else if (propName === "fontSize") {
      let currFontSize = ootbTheme.json.typography[variant].fontSize;
      currFontSize = parseFloat(currFontSize);

      // Do not increase font size more than the maxScalingFactor value for typography variants whose maxScalingFactor is defined in theme.
      let scalingFactor =
        ootbTheme.json.typography[variant].maxScalingFactor !== undefined
          ? Math.min(
              Number(ootbTheme.json.typography[variant].maxScalingFactor),
              Number(propValue)
            )
          : Number(propValue);
      updatedTheme.typography[variant][propName] =
        currFontSize + scalingFactor + "rem";
    } else {
      updatedTheme.typography[variant][propName] = propValue;
    }
  });

  return updatedTheme;
};
