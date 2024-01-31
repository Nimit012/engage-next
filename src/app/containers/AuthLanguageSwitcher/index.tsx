'use client'
import React, { useEffect, useState,createContext, useContext, use,  } from 'react';
import Box from "@mui/system/Box";
// import useOOTB from '../../hooks/use-ootb';
import LanguageSwitcherSelect from '../../components/LanguageSwitcherSelect';
import { injectIntl } from 'react-intl';
import { MyContext } from '../LanguageProvider';
// import { ClientConfigService } from '../../services/client-config-service';

function AuthLanguageSwitcher(props: any) {
  // const ootb = useOOTB();

  const { data, setData } = useContext(MyContext);
const [selectedLanguage, setSelectedLanguage] = useState({
  icon: "../../../ootb-config/4eabb7df/ootb/assets/images/english_uk.webp",
  label: "English (UK)",
  locale: "en"
})

  const onChange = (locale: any) => {
    console.log("data", data)
    localStorage.setItem('engage.selected-locale', locale);
    document.documentElement.setAttribute('lang', locale);
    setData(locale);
    let lang: any = supportedLanguages.find( language => language.locale == locale)
    setSelectedLanguage(lang);
  };


  let supportedLanguages = 
    [
      {
          "icon": "../../../ootb-config/4eabb7df/ootb/assets/images/english_uk.webp",
          "label": "English (UK)",
          "locale": "en"
      },
      {
          "icon": "../../../ootb-config/4eabb7df/ootb/assets/images/spanish.webp",
          "label": "Español",
          "locale": "es"
      },
      {
          "icon": "../../../ootb-config/4eabb7df/ootb/assets/images/french.webp",
          "label": "Français",
          "locale": "fr"
      },
      {
          "icon": "../../../ootb-config/4eabb7df/ootb/assets/images/arabic.webp",
          "label": "العربية",
          "locale": "ar"
      }
  ];
  return (
    <Box minHeight={40} display="flex" alignItems="center">
      {supportedLanguages && selectedLanguage && (
        <LanguageSwitcherSelect languages={supportedLanguages} locale={selectedLanguage.locale} icon={selectedLanguage.icon} onChange={onChange} />
      )}
    </Box>
  );
}

export default injectIntl(AuthLanguageSwitcher);
