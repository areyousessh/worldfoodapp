module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ".",
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
        ],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@routes": "./src/routes",
          "@theme": "./src/theme",
          "@service": "./src/service",
          "@utils": "./src/utils",
          "@assets": "./src/assets",
          "@hooks": "./src/hooks",
        },
      },
    ],
  ],
};
