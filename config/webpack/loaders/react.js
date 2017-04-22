module.exports = {
  test: /\.(js|jsx)?(\.erb)?$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    presets: [["env", { modules: false }], "react", "es2015", "stage-0"]
  }
};
