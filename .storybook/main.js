module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "features": {
    "storyStoreV7": true,
  },
  "core": {
    "builder": 'webpack5',
    "options": { 
      "lazyCompilation": true,
      "fsCache": true, 
    }
  }
}