const Vue = require('vue');
(async () => {
const Home = await import('./views/Home.vue')
const Splash = await import('./views/Splash.vue');
//import the vue-router package and create a router object

const VueRouter = await import('vue-router');
console.log(VueRouter)
Vue.use(VueRouter);
//create routes for the different pages
const routes = [
  {
    path: '/',
    name: 'splash',
    component: Splash
  },
  {
    path: '/patient',
    name: 'patient',
    component: Home
  },
  {
    path: '/provider',
    name: 'provider',
    component: Home
  },
  {
    path: '/payer',
    name: 'payer',
    component: Home
  },
  {
    path: '/paid',
    name: 'paid',
    component: Home
  }  
];
//create the router object and export it
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

module.exports = router
})()