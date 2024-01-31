'use client'

import styled from '@emotion/styled'
import Typography from "@mui/material/Typography";
import React from 'react';

const StyledTypography = styled(Typography)`
    font-size: ${(props: any) => props.theme.typography.body3.fontSize};
    font-weight: ${(props: any) => props.theme.typography.body3.fontWeight};
    line-height: ${(props: any) => props.theme.typography.body3.lineHeight};
    font-family: ${(props: any) => props.theme.typography.body3.fontFamily};
    letter-spacing: ${(props: any) => props.theme.typography.body3.letterSpacing};
`

export default function Body3Typography(props: any) {
    return <StyledTypography {...props}/>
} 