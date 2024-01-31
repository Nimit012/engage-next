export const themeOverrides = {
    palette: {
        contrastThreshold:5,
    },
    root: {
        overrides: {
            MuiButton: {
                root: {
                    textTransform:"none"
                }
            },
            MuiTypography: {
                button:{
                    textTransform:"none"
                }
            }
        },
        shape: {
            borderRadius: 8
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 1024,
                lg: 1366,
                xl: 1920
            }
        }
    }
}
