import { createApp } from "vue";
import App from "./App.vue";
import ConnectVueComponents from "./install";

const app = createApp(App);

//plugin
app.use(ConnectVueComponents);

app.mount("#app");
