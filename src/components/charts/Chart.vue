<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

const data1 = ref([]);
const data2 = ref([]);

//make some random data, realistically this data gets pulled from api call
for (var i = 0; i <= 10; i++) {
  data1.value.push([i, parseInt(Math.random() * 30)]);
}
for (var i = 0; i <= 10; i++) {
  data2.value.push([i, parseInt(Math.random() * 30)]);
}

/* Chart Options */

var options = {
  series: {
    shadowSize: 0,
    lines: {
      show: false,
      lineWidth: 0,
    },
  },
  grid: {
    borderWidth: 0,
    labelMargin: 10,
    hoverable: true,
    clickable: true,
    mouseActiveRadius: 6,
  },
  xaxis: {
    tickDecimals: 0,
    ticks: false,
  },

  yaxis: {
    tickDecimals: 0,
    ticks: false,
  },

  legend: {
    show: false,
  },
};

onMounted(() => {
  //JQUERY

  /* Regular Line Chart */
  if ($("#line-chart")[0]) {
    $.plot(
      $("#line-chart"),
      [
        {
          data: data1.value,
          lines: { show: true, fill: 0.98 },
          label: "Product 1",
          stack: true,
          color: "#e3e3e3",
        },
        {
          data: data2.value,
          lines: { show: true, fill: 0.98 },
          label: "Product 2",
          stack: true,
          color: "#FFC107",
        },
      ],
      options
    );
  }

  /* Tooltips for Flot Charts */

  if ($(".flot-chart")[0]) {
    $(".flot-chart").bind("plothover", function (event, pos, item) {
      if (item) {
        var x = item.datapoint[0].toFixed(2),
          y = item.datapoint[1].toFixed(2);
        $(".flot-tooltip")
          .html(item.series.label + " of " + x + " = " + y)
          .css({ top: item.pageY + 5, left: item.pageX + 5 })
          .show();
      } else {
        $(".flot-tooltip").hide();
      }
    });

    $("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo(
      "body"
    );
  }
});
</script>

<template>
  <div
    id="line-chart"
    class="flot-chart"
    style="padding: 0px; position: relative"
  ></div>
</template>

<style>
@import "../../../css/app.min.1.css";
@import "../../../css/app.min.2.css";
@import "../../../vendors/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css";
</style>
