import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { myTheme } from '../src/theme';

// const getTheme = async () => {
//   let tokens = await (await fetch('https://raw.githubusercontent.com/mstelz/figma-sb-example/master/data/tokens.json')).json()
//   let theme = await myTheme(tokens)
//   console.log('theme', theme)
//   return theme
// }


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

let ayo = createTheme()
ayo = createTheme(ayo, {palette: {
  primary: {
    main: "#000",
    light: "#FFF"
  }
}})

export const loaders = [
  async () => ({
    theme2: createTheme({palette: {
      primary: {
        main: "#000"
      }
    }}),
    theme: myTheme(await (await fetch('https://raw.githubusercontent.com/mstelz/figma-sb-example/master/data/tokens.json')).json()),
  })
]

const withThemeProvider = (Story, context) => {
  // const theme = getTheme();
  console.log('context', context)
  console.log(context.loaded.theme)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={ayo}>
        {console.log(JSON.stringify(context.loaded.theme.components.MuiButton))}
        {console.log('render')}
        <Story {...context} />
      </ThemeProvider>
    </StyledEngineProvider>
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