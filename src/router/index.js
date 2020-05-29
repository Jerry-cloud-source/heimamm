import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import { getToken } from '@/utils/token'

import Login from '@/views/login'
import Layout from '@/views/layout'

//以下是测试的
import Slot1 from '@/test/slot1/parent'
import Slot2 from '@/test/slot2/parent'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/Login' },
        { path: '/login', component: Login },
        { path: '/layout', component: Layout },

        //下面是测试的路由
        { path: '/slot1', component: Slot1 },
        { path: '/slot2', component: Slot2 }
    ]
});

//全局导航守卫
router.beforeEach((to, from, next) => {
    //console.log('to------',to);
    //console.log('from----',from);

    if (to.fullPath === '/login') {
        next();
    } else {
        //你要去非登陆页面，这个时候，我就要先判断你是否登录了，如果登录了，就让你过，没有登录则返回到登录页面
        const token = getToken()
        if (token) {  //代表登录了
            next();  //去到你想去的页面
        } else {
            //console.log('token没有，没有登陆');
            //token没有，没有登陆
            next('/login')
        }
    }
})

export default router;