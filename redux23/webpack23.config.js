const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "development" }) => {
    console.log(`mode is ===> ${mode}`);
    return {
        mode,
        entry: "./src/index.js",
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "build"),
            filename: "bundled.js"
        },
        module: {
            rules: [
                { test: /\.jpeg|png/, exclude: /node_modules/, use: ["url-loader", "file-loader"] },
                { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }    /* needed for jsx files */
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
        ],
        devServer: { open: false }
    }
};