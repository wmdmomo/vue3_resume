const path = require('path')

module.exports = {
    hostname: 'localhost',
    port: 3000,
    base: '/vue3_resume',
    outDir: 'dist',
    assetsDir: 'test',
    // 反向代理
    proxy: {
        '/api': {
            target: 'https://jsonplaceholder.typicode.com/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
}
