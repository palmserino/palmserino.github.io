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
        }
    }