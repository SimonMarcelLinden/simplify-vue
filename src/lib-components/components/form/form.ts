import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
    name: "SForm", // vue component name
    components: {},
    props: {},
    data() {
        return {};
    },
    methods: {
        onSubmit: function (event: Event) {
            this.$emit("submit", event);
        },
        onReset: function (event: Event) {
            this.$emit("reset", event);
        }
    }
});
