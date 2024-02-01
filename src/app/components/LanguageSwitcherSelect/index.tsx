import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box"; 
import styled from '@emotion/styled';
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";  
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import SurfaceContrastText1Typo from "../SurfaceContrastText1Typo";
// import { IconName } from '../Icon/icon-enum';
// import Icon from '../Icon';
import LanguageIcon from '@mui/icons-material/Language';

import Typography from "@mui/material/Typography";
import ButtonWrapper from "../ButtonWrapper";

const StyledAvatar = styled(Avatar)`
height: 24px;
width: 24px;
`;

const StyledIcon = styled(LanguageIcon)`
& > path {
    fill: #a9a4a2;
}
`;
const StyledMenuItem = styled(MenuItem)`
outline-offset: -2px;
`;

const StyledTypography = styled(Typography)<{component?: string;}>`
color: #6d6d6d;
`


export default function LanguageSwitcherSelect(props: any) {

    const { languages, locale, icon, onChange } = props;

    const getSelectedOption = (languages: any[], locale: string) => {
        if(languages && locale){
            const lang = languages.find(lang => lang.locale === locale);
            return lang;
        }

        return;
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState<any>(getSelectedOption(languages, locale));

    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleItemClick = (locale: any) => {
        if (selectedOption.locale !== locale) {
            onChange(locale);
        }
        handleClose();
    }

    useEffect(() => {
        setSelectedOption(getSelectedOption(languages, locale));
    }, [locale, languages]);

    return (
        <Box display="flex" alignItems="center" data-tid="dropdown-languageselector">
            <ButtonWrapper onClick={handleClick} tooltipText = {selectedOption.locale && selectedOption.locale.toUpperCase()}>
                <Box pr={1} display='flex'>
                {/* <StyledIcon item={IconName.LANGUAGE}/> */}
                <StyledIcon/>
                </Box>
                {selectedOption && selectedOption.locale && <StyledTypography component='span' variant="caption">{selectedOption.locale.toUpperCase()}</StyledTypography>}
            </ButtonWrapper>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handleClose}
            >
                {languages.map((option: any, index:any) => {
                    return <StyledMenuItem key={index} onClick={() => handleItemClick(option.locale)} data-tid={`dropdownitem-${index}`} value={option.locale}>
                            <Box mr={1}><StyledAvatar src={option.icon}/></Box><SurfaceContrastText1Typo component='span' variant="caption">{option.locale.toUpperCase()} - {option.label}</SurfaceContrastText1Typo>
                        </StyledMenuItem>
                })}
            </Menu>
        </Box>
    )
}
