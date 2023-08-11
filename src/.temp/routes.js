const c1 = () => import(/* webpackChunkName: "page--src--pages--index-copy-vue" */ "/home/rebron1900/developer/my-gridsome-site/src/pages/Index copy.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/rebron1900/developer/my-gridsome-site/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--ghost-post-vue" */ "/home/rebron1900/developer/my-gridsome-site/src/templates/GhostPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/rebron1900/developer/my-gridsome-site/src/pages/Index.vue")

export default [
  {
    path: "/index-copy/:page(\\d+)?/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    path: "/:slug/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
