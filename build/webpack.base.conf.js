const path = require('path');

module.exports = {
    //设置入口文件
    entry: {
        polyfills: ['./src/app/polyfills.ts'],
        vendor: ['./src/app/vendor.ts'],
        app: ['./src/app/app.ts']
    },
    //出口文件
    output: {
        //根据config模块得知是根目录下的dist文件夹
        path: path.join(__dirname, '../src/dist'),
        filename: '[name].bundle.js',
    }, module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js', '.json'],
        alias: {
            //使用@替代src路径，当你引入src下的文件是可以使用import xx from "@/XX.js"
            '@': path.resolve(__dirname, '../src')
        }
    },
    mode: 'none'
};
