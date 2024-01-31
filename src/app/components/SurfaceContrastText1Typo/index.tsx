'use client'

import styled from '@emotion/styled'
import Typography from "@mui/material/Typography";
import React from 'react';



export const SurfaceContrastText1Typography = styled(Typography)`
  color: ${(props: any) => {
    return props.theme.palette.background.paperContrastText;
  }};
`;

export default function SurfaceContrastText1Typo(props: any){
    return <SurfaceContrastText1Typography {...props} />
}