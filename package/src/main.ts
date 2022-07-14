import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/scss/style.scss";
import VueApexCharts from "vue3-apexcharts";
// @ts-ignore:next-line
import InstantSearch from "vue-instantsearch/vue3/es";

const app = createApp(App);
app.use(InstantSearch);
app.use(VueApexCharts);
app.use(router);
app.use(vuetify).mount("#app");
