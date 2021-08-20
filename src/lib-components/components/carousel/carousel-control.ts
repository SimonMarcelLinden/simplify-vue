import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
    name: "SCarouselControl", // vue component name
    components: {},
    props: {

    },
    data() {
        return {
          currentIndex: 0,
          touch: {
            startX: 0,
            endX: 0,
          },
        };
      },
    methods: { 
        previous: function(event: Event) {
            event.preventDefault;
            this.$emit('previous')
        },
        next: function(event: Event) {
            event.preventDefault;
            this.$emit('next')
        },
    }
});
