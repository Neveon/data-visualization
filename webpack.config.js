const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
    },
};
