import IconTextButton from "./components/buttons/IconTextButton.vue";
import Chart from "./components/charts/Chart.vue";
import Preloader from "./components/preloaders/Preloader.vue";

const ConnectVueComponents = {
  install(Vue, options) {
    Vue.component("IconTextButton", IconTextButton);
    Vue.component("Chart", Chart);
    Vue.component("Preloader", Preloader);

    Vue.mixin({
      created() {
        console.log("Print from created!");
      },
    });
  },
};

export default ConnectVueComponents;
