import { ThemeProvider, createTheme } from '@mui/material/styles';
import data from "../data/tokens.json"

const defaultTheme = createTheme({
  palette: {
    primary: data.Test.primary.value
  }
}); // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Story {...context} />
    </ThemeProvider>
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