import { createTheme } from '@mui/material/styles';

export const myTheme = (theme) => {
    console.log('theme', theme)
    let muiTheme = createTheme();
    muiTheme = createTheme(muiTheme, {
        palette: {
            primary: {
                main: theme.Test.primary.value
            }
        }
    });
    return createTheme(muiTheme, {
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.Test.primary.value
                    },
                    containedPrimary: {
                        borderRadius: theme.Test.borderRadius.button.value,
                        fontSize: theme.Test.font.body.size.value,
                        backgroundColor: theme.Test.primary.value
                    }
                }
            }
        }
    })
};