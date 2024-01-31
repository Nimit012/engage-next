// import React from "react";
// import styled from "styled-components";
// import Box from "@material-ui/core/Box/Box";
// import ComproLogo from '../../images/comprodls-logo.svg';
// import Typography from '@material-ui/core/Typography/Typography';
// import { FormattedMessage } from "react-intl";
// import messages from './messages';

import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import ComproLogo from '../../images/comprodls-logo.svg';
import Typography from '@mui/material/Typography'; 
import { FormattedMessage } from "react-intl";
import messages from './messages';

const ComproDlsLogo = styled.img`
vertical-align: bottom;
width: 90px;
`

const StyledVersionTypography = styled(Typography)`
color: ${(props: any) => props.theme.palette.grey[700]};
`;

export default function LandingFooter(props: any) {
    const { releaseInfo } = props;
    return (
        <Box display="flex" flexDirection="column" alignItems="center" {...props}>
            <Box pb={2}>
                <Typography data-tid="text-poweredby" variant="caption" component="span"><FormattedMessage {...messages.poweredBy} /></Typography>
                <ComproDlsLogo data-tid="image-comprodls" src={ComproLogo} alt="comproDLS"></ComproDlsLogo>
            </Box>
            <Box>
                <StyledVersionTypography data-tid="text-versionInfo" variant="caption">{releaseInfo}</StyledVersionTypography>
            </Box>
        </Box>
    ) 
}