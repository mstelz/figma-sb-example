import { createTheme } from '@mui/material/styles';
import data from "../data/tokens.json"

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: data.Test.primary.value
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: data.Test.borderRadius.button.value,
                    fontSize: data.Test.font.body.size.value,
                }
            }
        }
    }
});