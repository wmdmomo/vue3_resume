const path = require('path')

module.exports = {
    hostname: 'localhost',
    port: 3000,
    base: './',
    // 反向代理
    proxy: {
        '/api': {
            target: 'https://jsonplaceholder.typicode.com/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
}
