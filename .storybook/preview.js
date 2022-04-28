import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

import { myTheme } from '../src/theme';

export const ct = (theme) => {
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

export const loaders = [
  async () => ({
    theme: myTheme(await (await fetch(`https://raw.githubusercontent.com/mstelz/figma-sb-example/master/data/tokens.json?${Math.random()}`)).json()),
  })
]

const withThemeProvider = (Story, context) => {
  // const theme = getTheme();
  console.log('context', context)
  console.log(context.loaded.theme)
  return (
    <Emotion10ThemeProvider theme={context.loaded.theme}>
      <ThemeProvider theme={context.loaded.theme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}