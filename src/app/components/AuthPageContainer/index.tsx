'use client'
import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
// import styled from 'styled-components';
import styled from "@emotion/styled";

import LandingFooter from "../LandingFooter";
import Divider from "@mui/material/Divider";
// import useOOTB from '../../hooks/use-ootb';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AuthLanguageSwitcher from "@/app/containers/AuthLanguageSwitcher";
// import { getReleaseInfo } from '../../utils/common';
// import { isApplicationInMaintenanceMode } from '../../utils/common';
// import { useHistory } from 'react-router-dom';
// import {getRedirectUrl} from 'utils/common';

const StyledContainer = styled(Box)<{
  isMobile: boolean;
  bgSrc: any;
  bgColor: any;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100%;
  justify-content: center;
  align-items: ${(props) => !props.isMobile && "center"};
  background-color: ${(props: any) =>
    props.isMobile ? props.theme.palette.common.white : props.bgColor};
  background-image: ${(props) => !props.isMobile && `url(${props.bgSrc})`};
  background-repeat: ${(props) => !props.isMobile && `no-repeat`};
  background-position: ${(props) => !props.isMobile && `center`};
  padding: ${(props: any) =>
    !props.isMobile && props.theme.spacing(4, 0, 3, 0)};
`;

const StyledLoginModal = styled(Box)<{ isMobile: boolean }>`
  display: ${(props) => props.isMobile && "flex"};
  flex: ${(props) => props.isMobile && 1};
  flex-direction: ${(props) => props.isMobile && "column"};
  justify-content: ${(props) => props.isMobile && "space-between"};
  width: ${(props) => (props.isMobile ? "100%" : "475px")};
  background-color: ${(props: any) => props.theme.palette.common.white};
  border: ${(props: any) =>
    !props.isMobile && `1px ${props.theme.palette.grey[400]} solid`};
  border-radius: ${(props) => !props.isMobile && "14px"};
`;

const ClientLogo = styled.img`
  height: ${(props) => (props.height ? props.height : "24px")};
  margin-top: ${(props: any) =>
    props["margin-top"] ? props["margin-top"] : "unset"};
  position: relative;
  cursor: pointer;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: 10000;
`;

const StyledAppBar = styled(AppBar)<{ isMobile: boolean }>`
  background-color: ${(props: any) => props.theme.palette.common.white};
  box-shadow: none;
`;

const StyledHeaderBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledToolbar = styled(Toolbar)`
  height: 56px;
`;
const StyledFooterBox = styled(Box)`
  background-color: ${(props: any) => props.theme.palette.background.main};
`;

const StyledFragment = styled(React.Fragment)<{ isMobile: boolean }>``;

export default function AuthPageContainer(props: any) {
  const {
    showLoader,
    logoAlt,
    marginTop,
    logoHeight,
    isMobile,
    renderLanguageSwitcher,
    mobileHeaderFixed,
  } = props;
  let logoSrc =
    "https://asgard-thor-assets.comprodls.com/engage/1704344116519/ootb-config/1df98e77/ootb/assets/images/logo_santillana_negro.webp";
  //   const ootbState = useOOTB();
  //   const history = useHistory();
  //   const { image: backgroundImg, color: backgroundColor } = ootbState.componentConfigs.auth.background;
  const backgroundImg =
    "https://asgard-thor-assets.comprodls.com/engage/1704344116519/ootb-config/1df98e77/ootb/assets/images/auth-bg.webp";
  const backgroundColor = "#faf8f7";
  //   const HeaderParent = mobileHeaderFixed && isMobile && !isApplicationInMaintenanceMode() ? StyledAppBar : StyledFragment;
  const HeaderParent = StyledFragment;
  const releaseInfo = "ENGAGE 0.1 Demonstration";

  return (
    <>
      <StyledBackdrop open={showLoader}>
        <CircularProgress color="secondary" />
      </StyledBackdrop>
      <StyledContainer
        bgSrc={backgroundImg}
        bgColor={backgroundColor}
        isMobile={isMobile}
      >
        <StyledLoginModal isMobile={isMobile}>
          <Box height={1} display="flex" flexDirection="column">
            <HeaderParent isMobile={isMobile}>
              <StyledHeaderBox
                px={2}
                pt={renderLanguageSwitcher ? 1 : 2}
                pb={isMobile && 2}
              >
                <a
                  onClick={() => {}}
                  tabIndex={0}
                  aria-label="Engage"
                  //   onKeyDown={(e) => {
                  //     if(e.keyCode == 32 || e.keyCode == 13) getRedirectUrl(history)
                  //   }}
                >
                  <ClientLogo
                    data-tid="image-brandlogo"
                    src={logoSrc}
                    height={"32px"}
                    alt={""}
                  />
                </a>
                {renderLanguageSwitcher && (
                  <Box mr={-1}>{<AuthLanguageSwitcher />}</Box>
                )}
              </StyledHeaderBox>
            </HeaderParent>
            {mobileHeaderFixed && isMobile && <StyledToolbar />}
            <Box height={1} width={1}>
              {props.children}
            </Box>
          </Box>
          {isMobile && (
            <>
              <StyledFooterBox
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                pb={3}
              >
                <Box width={1} pb={3}>
                  <Divider aria-hidden />
                </Box>
                <LandingFooter releaseInfo={releaseInfo} />
              </StyledFooterBox>{" "}
            </>
          )}
        </StyledLoginModal>
        {!isMobile && <LandingFooter pt={4} releaseInfo={releaseInfo} />}
      </StyledContainer>
    </>
  );
}
