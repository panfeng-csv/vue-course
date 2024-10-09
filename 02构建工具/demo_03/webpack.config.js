module.exports = {
    mode: "production",//设置打包的模式，production表示生产模式 development 开发模式
    // entry: "./hello/hello.js" //打包时的主文件，默认是 ./src/index.js
    entry: {
        hello: "./src/a.js",
        b: "./src/b.js",
    },
}