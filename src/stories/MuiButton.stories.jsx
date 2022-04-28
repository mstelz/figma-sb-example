import React from 'react';
import {ThemeProvider} from '@mui/material/styles'

import { MuiButton } from './MuiButton';


const withThemeProvider = (Story, context) => {
  // const theme = getTheme();
  console.log('context', context)
  console.log(context.loaded.theme)
  return (
      <ThemeProvider theme={context.loaded.theme2}>
        {console.log(JSON.stringify(context.loaded.theme.components.MuiButton))}
        {console.log('render')}
        billy
        <Story {...context} />
      </ThemeProvider>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MuiButton',
  component: MuiButton,
  decorators: [
    withThemeProvider
  ]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MuiButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
};
