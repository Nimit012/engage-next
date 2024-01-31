import React from "react";
import LandingPageTemplateIR from "../components/auth";
import ThemeProvider from "../containers/ThemeProvider";
import LanguageProvider from "../containers/LanguageProvider";


function Home() {
  return (
    <ThemeProvider >
    <LanguageProvider>
      <LandingPageTemplateIR
        config={{
          image: "",
          primaryActionColorVariation: "primary",
        }}
        index="123"
        />
    </LanguageProvider>
    </ThemeProvider>

  );
}

export default Home;
