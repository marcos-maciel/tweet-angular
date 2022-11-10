const proxy = [
    {
        context: '/api',
        target: 'http://localhost:8040',
        pathRewrite: { '^/api': '/tweets' }
    }
];
module.exports = proxy;