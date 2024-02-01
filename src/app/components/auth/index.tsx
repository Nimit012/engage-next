'use-client'
import React from "react";
import Box from "@mui/system/Box";

import styled from '@emotion/styled';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import AuthPageContainer from "../AuthPageContainer";

import EngLink  from '../EngLink';
import Button2Typography from '../Button2Typography';
import SurfaceContrastText1Typo from '../SurfaceContrastText1Typo';
import AuthLanguageSwitcher from '../../containers/AuthLanguageSwitcher';
import Body3Typography from '../Body3Typography';

import IRButton from '../IRButton';

const LandingImage = styled.img<{ isMobile: boolean }>`
  width: 332px;
  height: 204px;
`;

const StyledBox = styled(Box)`
color: ${(props:any) => props.theme.palette.background.paperContrastText};
`;

interface IProps {
  config: {
    image: string;
    primaryActionColorVariation?: "primary" | "secondary";
    hideTagline?: boolean;
    hideTagline2?: boolean;
  };
  [index: string]: any;
}

function LandingPageTemplateIR(props: IProps) {
//   const history = useHistory();
  // const router = useRouter();


  const redirectTosignIn = () => {
    // history.push("/login");
    // router.push("/login");
  };

  const redirectTosignUp = () => {
    // router.push("/signup");
  };



    const isMobile = false;

  return (
    <AuthPageContainer
    isMobile={isMobile}
    mobileHeaderFixed={true}
    renderLanguageSwitcher={() =>

       <AuthLanguageSwitcher />
      }
  >       
      <Box display="flex" justifyContent="center" px={isMobile ? 2 : 4} py={4}>
        <LandingImage
          isMobile={isMobile}
          data-tid="image-landing"
          src={"https://asgard-thor-assets.comprodls.com/engage/1704344116519/ootb-config/1df98e77/ootb/assets/images/landing_page.webp"}
          alt=""
        />
      </Box>
      <Box
        px={isMobile ? 2 : 4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box pb={6}>
          <Box>
            <SurfaceContrastText1Typo data-tid="text-mainheading" variant="h2">
              <FormattedMessage {...messages.mainHeading} />
            </SurfaceContrastText1Typo>
          </Box>
          {!false && (
            <StyledBox pt={3}>
              <Body3Typography data-tid="text-subheading">
                <FormattedMessage {...messages.mainSubHeading} />
              </Body3Typography>{" "}
            </StyledBox>
          )}
        </Box>
        <Box
          width={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          pb={5}
        >
          <Box display="flex" justifyContent="center" width={1} pb={3}>
            <IRButton
              id="main-focus-area"
              data-tid="button-registerc"
              onClick={redirectTosignUp}
              variant="primary"
            >
              <Button2Typography>
                <FormattedMessage {...messages.buttonSignup} />
              </Button2Typography>
            </IRButton>
          </Box>
          <Box display="flex" justifyContent="center" textAlign="center">
            <SurfaceContrastText1Typo
              variant="caption"
              data-tid="text-haveanaccount"
              component="span"
            >
              <FormattedMessage {...messages.haveAnAccount} />
            </SurfaceContrastText1Typo>
            <Box pl={1}>
              <EngLink
                variant="primary"
                dataTid="button-login"
                onClick={redirectTosignIn}
                typoVariant="caption"
                tabIndex={0}
              >
                <FormattedMessage {...messages.loginLink} />
              </EngLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </AuthPageContainer>

  );
}

export default LandingPageTemplateIR;
