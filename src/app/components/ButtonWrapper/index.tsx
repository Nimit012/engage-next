import Button from "@mui/material/Button";
import React from 'react';
import styled from '@emotion/styled';


const StyledButton = styled(Button)`
padding:8px 12px;
border-radius : 8px;
color: "#6d6d6d";
&:hover {
    background : "#dedede";
}
`;

export default function ButtonWrapper(props : any){
    let { onClick, ...restProps } = props;
    return(<StyledButton onClick={onClick} {...restProps}>
            {props.children}
        </StyledButton>
    )
}