'use client'
import * as React from 'react';
import styled from '@emotion/styled'
import Link, { LinkProps } from "@mui/material/Link";

export interface EngLinkProps extends Omit<LinkProps, "color" | "variant">{
    dataTid?:any;
    variant?:"primary" | "neutral"  | "ghost";
    typoVariant?:'body1'| 'body2'| 'body3' | 'button'| 'caption'| 'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6'| 'inherit'| 'overline'| 'subtitle1'| 'subtitle2';
    onClick: (e: any) => void;
}

const StyledLink :any = styled(Link)`
cursor: pointer;
text-decoration: ${(props:any)=>( (props.underline === "always" || (props.theme.settings && props.theme.settings.underlineLinks)) ? `underline`: `none`)};
color: ${(props:any) =>(props.linkVariant === "primary" ? props.theme.palette.background.contrastText3: (props.linkVariant === "neutral" ? props.theme.palette.grey[700] : props.theme.palette.background.contrastText2))};
 &.body3{
  font-size: ${(props:any)=>( props.theme.typography.body3.fontSize)};
  font-weight: ${(props:any)=>( props.theme.typography.body3.fontWeight)};
  line-height: ${(props:any)=>( props.theme.typography.body3.lineHeight)};
  font-family: ${(props:any)=>( props.theme.typography.body3.fontFamily)};
  letter-spacing: ${(props:any)=>( props.theme.typography.body3.letterSpacing)};
}

`;

function EngLink(props:EngLinkProps){
    const { onClick, dataTid, typoVariant="body1", variant = "primary", ...restProps} = props;
    const linkVariant = variant ;
    return (
      <StyledLink 
      variant={typoVariant} 
        onClick={(e: any) => {e.preventDefault(); onClick(e);}}
      data-tid={dataTid}  
      linkVariant={linkVariant}
      className={typoVariant === 'body3' && 'body3'}
      href="#"
      {...restProps} />
    )
}

export default EngLink