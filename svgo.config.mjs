export default {
  path: "./lib/Icons/icons",
  folder: "./lib/Icons/dist",

  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // disable a default plugin
          cleanupIds: false,

          // customize the params of a default plugin
          inlineStyles: {
            onlyMatchedOnce: false,
          },
        },
      },
    },
  ],
};
