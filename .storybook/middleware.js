const proxy = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  var filter = function(pathname) {
    return ['^/api'].find(url => pathname.match(url));
  };

  router.use(
    '/',
    proxy(filter, {
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );
};
