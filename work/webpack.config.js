var webpack =require( 'webpack')
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    //vendor: [
    //    'underscore',
    //],
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    //plugins: [
    //    new webpack.ProvidePlugin({
    //        underscore: "underscore"
    //    })
    //]
};
