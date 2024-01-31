'use client'

// import Button, { ButtonProps } from "@material-ui/core/Button";
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import createStyles from "@material-ui/core/styles/createStyles";
// import * as React from "react";
// import useTheme from '@material-ui/core/styles/useTheme';

import Button, { ButtonProps } from "@mui/material/Button";
import * as React from "react";
import { useTheme } from '@mui/material/styles';

export type EngButtonVariant = "primary" | "neutral" | "ghost" | undefined;
//primary corresponds to the contained variant of button
//neutral corresponds to the outlined variant of button
//ghost corresponds to the text variant of button

export interface IEngButtonProps
  extends Pick<ButtonProps, Exclude<keyof ButtonProps, "variant">> {
  children: React.ReactNode | string;
  variant: EngButtonVariant;
  margin?: string;
  minWidth?: string;
  minHeight?: string;
  isActive?: boolean;
  padding?: string;
  buttonRef?: any
  isSelected?: boolean;
}

interface IStyleProps {
  margin?: string;
  minWidth?: string;
  minHeight?: string;
  isActive?: boolean;
  padding?: string;
}

// const useStyles = (props: IStyleProps) =>
//   makeStyles((theme: any) =>
//     createStyles({
//       root: {
//         ...theme.typography.button, //adding default typography
//         borderRadius: "8px",
//         margin: props.margin,
//         minWidth: props.minWidth,
//         minHeight: props.minHeight ? props.minHeight : "40px",
//         textDecoration:
//           theme.settings && theme.settings.underlineLinks
//             ? "underline"
//             : "none",
//         padding: props.padding && props.padding,
//         textTransform: 'none',
//         outlineOffset: '2px',
//         "&:disabled": {
//           //disabled button styles
//           pointerEvents: "auto",
//           cursor: "no-drop",
//           backgroundColor: `${theme.palette.grey["400"]}`,
//           color: `${theme.palette.background.contrastText}`,
//           border: "0px",
//           "&:hover": {
//             color: `${theme.palette.background.contrastText2}`,
//             border: "0px",
//             backgroundColor: `${theme.palette.grey["400"]}`,
//           },
//         },
//       },
//       outlinedWithoutColor: {
//         border: `1px solid ${
//           props.isActive
//             ? theme.palette.primary.dark
//             : theme.palette.grey["900"]
//         }`,
//         color: theme.palette.grey["900"],
//         background: props.isActive ? theme.palette.primary.dark : undefined,
//         "&:hover, &:focus": {
//           background: props.isActive
//             ? theme.palette.primary.dark
//             : theme.palette.grey["400"],
//           border: `1px solid ${
//             props.isActive
//               ? theme.palette.primary.dark
//               : theme.palette.grey["900"]
//           }`,
//         },
//       },
//       textRoot: {
//         outlineOffset: '0px',
//       },
//       textWithoutColor: {
//         color: theme.palette.grey["900"],
//         "&:hover, &:focus": {
//           background: theme.palette.grey["400"],
//         },
//       },
//       selectedTextWithColor: {
//         color: theme.palette.secondary.main,
//       },
//       activeTextWithoutColor: {
//         background: theme.palette.secondary.light,
//         color: theme.palette.secondary.dark,
//         "&:hover, &:focus": {
//           color: theme.palette.secondary.dark,
//           background: theme.palette.secondary.light,
//         },
//       },
//       textWithSecondaryColor: {
//         color: theme.palette.background.contrastText3,
//       },
//       containedSecondary: {
//         "&:focus": {
//           background: theme.palette.secondary.dark,
//         },
//       }
//     })
//   )();

function ButtonComponent(props: IEngButtonProps) {
  const {
    children,
    margin,
    minWidth,
    minHeight,
    isActive = false,
    variant = "ghost",
    color = "primary",
    disabled,
    padding,
    isSelected,
    ...rest
  } = props;
  const theme: any = useTheme();
//   const classes = useStyles({ margin, minWidth, minHeight, isActive, padding });
  const variantMap = {
    primary: "contained",
    neutral: "outlined",
    ghost: "text",
  };
  const buttonVariant: any = variantMap[variant];
  const isContainedVariant = buttonVariant === "contained";
  const isContainedWithoutColor = isContainedVariant && color === "primary";
  const isOutlinedWithoutColor =
    buttonVariant === "outlined" && color === "primary";
  const isTextWithoutColor = !isSelected && (!buttonVariant || buttonVariant === "text") && color === "primary";
  const isTextWithSecondaryColor =
    buttonVariant === "text" && color === "secondary";

  return (
    <Button
      ref={props.buttonRef}
      disableFocusRipple
      disableElevation
      variant={buttonVariant}
      disabled={disabled}
      color={isContainedWithoutColor ? "secondary" : color}
    //   classes={{
    //     root: classes.root,
    //     outlined: isOutlinedWithoutColor
    //       ? classes.outlinedWithoutColor
    //       : undefined,
    //     text: `${classes.textRoot} ${isTextWithoutColor
    //       ? isActive
    //         ? classes.activeTextWithoutColor
    //         : classes.textWithoutColor
    //       : isSelected
    //         ? classes.selectedTextWithColor
    //         : undefined}`,
    //     textSecondary: isTextWithSecondaryColor
    //       ? isActive
    //         ? classes.activeTextWithoutColor
    //         : classes.textWithSecondaryColor
    //       : undefined,
    //     containedSecondary: classes.containedSecondary
    //   }}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
