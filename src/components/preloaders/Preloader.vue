<script setup>
defineProps({
  color: {
    type: String,
    default: "pls-white",
  },
  size: {
    type: String,
    default: "pl-xs",
  },
});
</script>

<template>
  <div :class="['preloader', 'preloader-vue', size, color]">
    <svg class="pl-circular" viewBox="25 25 50 50">
      <circle class="plc-path" cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</template>

<style>
.preloader-vue {
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%);
}

.preloader.pls-white .plc-path {
  stroke: white;
}
</style>
