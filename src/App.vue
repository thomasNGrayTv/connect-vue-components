<script setup>
import IconTextButton from "./components/buttons/IconTextButton.vue";
import Chart from "./components/charts/Chart.vue";
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2>
        Buttons
        <small
          >Use any of the available button classes to quickly create a styled
          button.</small
        >
      </h2>
      <br />
      <div class="btn-demo">
        <icon-text-button> </icon-text-button>
        <icon-text-button color="bgm-amber" icon="zmdi-search" :preload="true">
          Search
        </icon-text-button>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <h2>
        Charts
        <small
          >Use any of the available chart classes to quickly create a styled
          chart.</small
        >
      </h2>
      <br />
      <div class="btn-demo">
        <chart></chart>
      </div>
    </div>
  </div>
</template>

<style></style>
