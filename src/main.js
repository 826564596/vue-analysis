import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

// var app = new Vue({
//     el: "#app",
//     data: {
//         message: "hello world",
//     },
// });
