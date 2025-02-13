
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/product-management-application/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/product-management-application/home",
    "route": "/product-management-application"
  },
  {
    "renderMode": 2,
    "route": "/product-management-application/home"
  },
  {
    "renderMode": 2,
    "route": "/product-management-application/favorites"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5628, hash: '3449fe4124c47489657e03874e49ddbaf57be514308d8a84abc6e26739f45ab7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1745, hash: '1d832f907a6030b0252d9571652907366423001a342e9bc41cdd69558b50857c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'favorites/index.html': {size: 14332, hash: 'fd8c9ec89d657b1ecc6d95cab06d2b46438138293a98d3014aa1f25f01a37842', text: () => import('./assets-chunks/favorites_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 28430, hash: 'bcecd61f2408ce39514dbda15c7bb2420df08fdd4d96be380f1a07dfc260887d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
