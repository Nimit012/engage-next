'use client'

import React, { useState, createContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { LocaleEnum } from './constants';



export interface Props {
  children?: React.ReactNode;
}

//supported languages
const translationMessages: any = {
  [LocaleEnum.EN]: require("../../translations/en.json"),
  [LocaleEnum.ES]: require("../../translations/es.json"),
  [LocaleEnum.AR]: require("../../translations/ar.json"),
  [LocaleEnum.FR]: require("../../translations/fr.json")
}


export const MyContext = createContext({ data: "", setData: (data: any) => {} });

function LanguageProvider(props: Props) {


  const [data, setData] = useState("en");

  let languageState:any = {
    "locale": "en",
    "language": "English (UK)",
    "suppLangs": [
        {
            "locale": "en",
            "label": "English (UK)",
            "icon": "/9e66921757787daad2bae6febf1562c6.png",

        },
        {
            "locale": "fr",
            "label": "Français",
            "icon": "/649e3093e6092f1b94d6c84813ba5fdc.png",
        },
        {
          "locale": "es",
          "label": "Espanol",
          "icon": "/9e66921757787daad2bae6febf1562c6.png",

      },
    ]
};
    function getMessages() {
      let msgs;
      console.log("data",data)
      if (languageState) {
        let language: any = languageState.suppLangs.find((language: any) => language.locale === data);
        if (language && translationMessages.hasOwnProperty(language.locale)) {
          let locale = language.locale;
          let messagesOverrideJson = language.json;
          let defaultMessagesJson = translationMessages[language.locale];
          let messagesJson = { ...defaultMessagesJson, ...messagesOverrideJson };
  
          msgs = messagesJson;
        }
      }
  
      return msgs
    }

    useEffect(() => {
      console.log("data",data)

    }, [data])
    
    return (
      <MyContext.Provider value={{ data, setData }}>
        <IntlProvider
        locale={data}
        messages={getMessages()}
        >
        {React.Children.only(props.children)}
        </IntlProvider>
        </MyContext.Provider>
    );
}

export default LanguageProvider;
