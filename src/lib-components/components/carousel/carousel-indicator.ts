import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
    name: "SCarouselIndicator", // vue component name
    components: {},
    props: {
        id: {
            type: String,
            required: false,
        },
        length: {
            type: Number,
            required: false,
            default: 3,
        },
        currentIndex: {
          type: Number,
          required: false,
          default: 0,
        },
    },
    data() {
      return {

      }
    },
    computed: { },
    methods: {
        setSlide: function(index: Number) {
            this.$emit('slide', index)
        },
    }
});
