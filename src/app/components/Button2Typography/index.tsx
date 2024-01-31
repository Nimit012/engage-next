'use client'

import styled from '@emotion/styled'
import Typography from "@mui/material/Typography";
import React from 'react';

export const Button2Typo = styled(Typography)<{component?: string;}>`
    font-size: ${(props: any) => props.theme.typography.button2.fontSize};
    font-weight:${(props: any) => props.theme.typography.button2.fontWeight};
    line-height:${(props: any) => props.theme.typography.button2.lineHeight};
    letter-spacing:${(props: any) => props.theme.typography.button2.letterSpacing};
`
export default function Button2Typography(props: any){
    return <Button2Typo {...props} />
}