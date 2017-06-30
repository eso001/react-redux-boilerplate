var path = require('path');

module.exports = {
    entry: path.resolve('src/index.js')
    ,
    output: {
        path: path.resolve('/'),
        publicPath: "public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: [/\.js$/], 
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            //add this for a style/less loader
            // {
            //     test: /\.less$/,
            //     exclude: /node_modules/,
            //     loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
            // }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: "source-map"
}