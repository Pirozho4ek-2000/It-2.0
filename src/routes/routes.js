import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import User from "../components/User";
import Details from "../components/details";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',  
            component: Home
        },
        {
            path: '/User',
            component: User
        },
        {
        	path: '/details/:Pid',
        	name: 'Details',
        	component: Details
        }
    ],
    mode: 'history'
}) 