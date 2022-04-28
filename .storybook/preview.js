import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../src/theme';

const getTheme = () => {
  return defaultTheme
}

export const globalTypes = {
  theme: {
    name: 'Refresh Theme',
    description: 'Refresh your theme',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme();
  return (
    <ThemeProvider theme={theme}>
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