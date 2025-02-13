
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Product-Management-Application/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Product-Management-Application/home",
    "route": "/Product-Management-Application"
  },
  {
    "renderMode": 2,
    "route": "/Product-Management-Application/home"
  },
  {
    "renderMode": 2,
    "route": "/Product-Management-Application/favorites"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5628, hash: 'b6949832719524ca0ce694f5bd399b90d988e9c878630dc4b6856bd9f6c8ebe2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1745, hash: 'e6020044e5e46d6a9a7e88d4a481b6de1ffee8694f63b86650ccf45996f1e650', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'favorites/index.html': {size: 14332, hash: '78f72177e21cdc9ae8ba585a232eee94e23c562b1c3c428d62e5a2b355518a04', text: () => import('./assets-chunks/favorites_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 28430, hash: 'af4fc5cd52aa59022b6b55c137a2d894a1594daebae64348f7e1886c0d035367', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
