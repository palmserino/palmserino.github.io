module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_mules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
        },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
        }
    }