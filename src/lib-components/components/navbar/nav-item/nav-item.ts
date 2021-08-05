import navLink from "../nav-link/nav-link.vue";
import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  components: { navLink },
  name: "SNavItem",
  props: {
    href: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    }
  },
});