import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  name: "SFormGroup", // vue component name
  components: {},
  inheritAttrs: false,
  props: {
    id: {
      required: false,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
    labelFor: {
      required: false,
      type: String,
    },
  },
  computed: { },
});