const merge = require("webpack-merge");
const config = require("./common");

module.exports = merge(config, {
    mode: "production",
    watch: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    }
});
