import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/tabbar/home/Home')
const Category = () => import('../views/tabbar/category/Category')
const ShopCart = () => import('../views/tabbar/shopcart/ShopCart')
const Profile = () => import('../views/tabbar/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '我的'
      }
    }
  ],
  mode: 'history'
})

// Router.beforeEnter((to, from, next) => {
//   document.title = to.matched[0].meta.title
//   next()
// })
