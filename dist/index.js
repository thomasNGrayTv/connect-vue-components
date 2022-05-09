import { defineAsyncComponent, ref, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, createVNode, Transition, withCtx, createBlock, unref, createTextVNode, onMounted, createElementVNode } from "vue";
var IconTextButton_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = /* @__PURE__ */ createTextVNode(" Home ");
const _sfc_main$2 = {
  props: {
    color: {
      type: String,
      default: "btn-primary"
    },
    icon: {
      type: String,
      default: "zmdi-home"
    },
    preload: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const Preloader$1 = defineAsyncComponent(() => Promise.resolve().then(function() {
      return Preloader;
    }));
    const showPreLoader = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        onClick: _cache[0] || (_cache[0] = ($event) => __props.preload ? showPreLoader.value = true : showPreLoader.value = false),
        class: normalizeClass(["btn", "btn-vue", "btn-icon-text", __props.color])
      }, [
        !showPreLoader.value ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["zmdi", __props.icon])
        }, null, 2)) : createCommentVNode("", true),
        !showPreLoader.value ? renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
          _hoisted_1$2
        ]) : createCommentVNode("", true),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            __props.preload && showPreLoader.value ? (openBlock(), createBlock(unref(Preloader$1), { key: 0 })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 2);
    };
  }
};
const _hoisted_1$1 = {
  id: "line-chart",
  class: "flot-chart",
  style: { "padding": "0px", "position": "relative" }
};
const _sfc_main$1 = {
  setup(__props) {
    const data1 = ref([]);
    const data2 = ref([]);
    for (var i = 0; i <= 10; i++) {
      data1.value.push([i, parseInt(Math.random() * 30)]);
    }
    for (var i = 0; i <= 10; i++) {
      data2.value.push([i, parseInt(Math.random() * 30)]);
    }
    var options = {
      series: {
        shadowSize: 0,
        lines: {
          show: false,
          lineWidth: 0
        }
      },
      grid: {
        borderWidth: 0,
        labelMargin: 10,
        hoverable: true,
        clickable: true,
        mouseActiveRadius: 6
      },
      xaxis: {
        tickDecimals: 0,
        ticks: false
      },
      yaxis: {
        tickDecimals: 0,
        ticks: false
      },
      legend: {
        show: false
      }
    };
    onMounted(() => {
      if ($("#line-chart")[0]) {
        $.plot($("#line-chart"), [
          {
            data: data1.value,
            lines: { show: true, fill: 0.98 },
            label: "Product 1",
            stack: true,
            color: "#e3e3e3"
          },
          {
            data: data2.value,
            lines: { show: true, fill: 0.98 },
            label: "Product 2",
            stack: true,
            color: "#FFC107"
          }
        ], options);
      }
      if ($(".flot-chart")[0]) {
        $(".flot-chart").bind("plothover", function(event, pos, item) {
          if (item) {
            var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
            $(".flot-tooltip").html(item.series.label + " of " + x + " = " + y).css({ top: item.pageY + 5, left: item.pageX + 5 }).show();
          } else {
            $(".flot-tooltip").hide();
          }
        });
        $("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo("body");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1);
    };
  }
};
var Preloader_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("svg", {
  class: "pl-circular",
  viewBox: "25 25 50 50"
}, [
  /* @__PURE__ */ createElementVNode("circle", {
    class: "plc-path",
    cx: "50",
    cy: "50",
    r: "20"
  })
], -1);
const _hoisted_2 = [
  _hoisted_1
];
const _sfc_main = {
  props: {
    color: {
      type: String,
      default: "pls-white"
    },
    size: {
      type: String,
      default: "pl-xs"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["preloader", "preloader-vue", __props.size, __props.color])
      }, _hoisted_2, 2);
    };
  }
};
var Preloader = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const ConnectVueComponents = {
  install(Vue, options) {
    Vue.component("IconTextButton", _sfc_main$2);
    Vue.component("Chart", _sfc_main$1);
    Vue.component("Preloader", _sfc_main);
  }
};
export { ConnectVueComponents as default };
