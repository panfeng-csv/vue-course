const path =require("path")
module.exports = {
    mode: "production",

    module: {
        rules: [
            {
                test: /\.css$/i,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.(jpeg|png|gif)$/i,
                type: "asset/resource"
            }
        ]
    }

}