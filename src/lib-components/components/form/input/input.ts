import Vue from "vue";

const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "color",
];

export default /*#__PURE__*/ Vue.extend({
  name: "SFormInput", // vue component name
  components: { },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    id: {
      required: false,
      type: String,
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        const isValid = TYPES.includes(value);
        if (!isValid) {
          console.warn(`allowed types are ${TYPES}`);
        }
        return isValid;
      },
    },
    name: {
      required: false,
      type: String,
    },
    placeholder: {
      required: false,
      type: String,
    },
    required: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputVal: {
      get(): String {
        return this.value;
      },
      set(val: String) {
        this.$emit("input", val);
      },
    },
  },
});