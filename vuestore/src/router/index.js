import { createRouter, createWebHistory } from 'vue-router';
import Calendar from '../views/workers/calendar.vue';
import homepage from '../views/workers/homepage.vue';
import side from '../views/side.vue';
import calendar from "../views/workers/calendar.vue";
import login from '../views/login.vue'
import stock from '../views/mainPage/stock.vue'
import self from '../views/mainPage/selfinformation.vue'
import action from '../views/mainPage/actionLoad.vue'
import ware from '../views/warehouse/warehouseBig.vue'
const routes = [
    {path: '/allin', component: () => import('../views/allinAdmin.vue'),
        children : [
            {  name : "home" ,path: '/side/home',component : homepage},
            { name : "calendar" , path :'/side/calendar' , component : calendar},
            {name : "stock" , path: '/side/stock' , component: stock},
            {name : "self" , path : '/side/self' , component: self},
            {name : "action" , path : '/side/action' , component: action},
            {name:  "ware"  , path: '/side/ware', component: ware ,
                children : [{name : "hardware",path : '/side/ware/hardware',component : import('../views/warehouse/hardWare.vue')},
                    {name : "manifest",path: '/side/ware/manifest',component: import('../views/warehouse/manifest.vue')}]
            }
        ]},
    { path: '/side',component : () => import("../views/side.vue"),
        },
    { name : 'login', path : '/login' , component : login}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
