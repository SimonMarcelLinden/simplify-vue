import Vue from "vue";
import SNavItem from "../nav-item/nav-item.vue"
import SNavLink from "../nav-link/nav-link.vue";

export default /*#__PURE__*/ Vue.extend({
  name: "SNavDropdown",
  components: {
    SNavItem,
    SNavLink,
  },
  props: {
    title: {
      type: String,
      default: 'Dropdown',
      required: false,
      validator(value: String) {
        if (value === '' || value === null || value === undefined) {
          console.warn(`no title set for item`);
          // throw new TypeError(`no title set for item`)
          return false;
        }
        return true;
      },
    },
    right: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
});
