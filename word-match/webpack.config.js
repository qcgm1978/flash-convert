var path = require("path");
module.exports = {
    entry: "./entry.js",
    output: {
        //path: path.resolve(__dirname, "build"),
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //{test: /\.css$/, loader: "style!css"},
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};