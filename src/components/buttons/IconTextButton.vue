<script setup>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
defineProps({
  color: {
    type: String,
    default: "btn-primary",
  },
  icon: {
    type: String,
    default: "zmdi-home",
  },
  preload: {
    type: Boolean,
    default: false,
  },
});

const Preloader = defineAsyncComponent(() =>
  import("../preloaders/Preloader.vue")
);

const showPreLoader = ref(false);
</script>

<template>
  <button
    @click="preload ? (showPreLoader = true) : (showPreLoader = false)"
    :class="['btn', 'btn-vue', 'btn-icon-text', color]"
  >
    <i v-if="!showPreLoader" :class="['zmdi', icon]"></i>
    <slot v-if="!showPreLoader"> Home </slot>
    <transition name="fade">
      <Preloader v-if="preload && showPreLoader"></Preloader>
    </transition>
  </button>
</template>

<style>
@import "../../../css/app.min.1.css";
@import "../../../css/app.min.2.css";
@import "../../../vendors/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css";

.btn-vue {
  position: relative;
  overflow: hidden;
  min-width: 7.5em;
  min-height: 2.4em;
  margin: 0 5px 10px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
