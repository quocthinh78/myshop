import Vue from "vue";
import Router from "vue-router"
import Home from "../components/Home"
import AllProducts from "../components/AllProducts"
import CatProducts from "../components/CatProducts"

Vue.use(Router)
export default new Router({
    mode: "history",
    routes: [{
        path: '',
        name: 'All Products',
        component: Home,
        children: [{
            path: "",
            component: AllProducts
        }, {
            path: "/loai-san-pham/:cat",
            component: CatProducts
        }]
    }, ],
})