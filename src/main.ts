import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";

const app = createApp(App);
app.use(router);
if (process.env.NODE_ENV === 'development') {
    console.log(process.env.NODE_ENV)
    app.config.performance = true;
}
app.mount("#app");
