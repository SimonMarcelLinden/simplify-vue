import Vue from "vue";

import { eventBus } from "@/lib-components/events/collapse/collapse";

export default /*#__PURE__*/ Vue.extend({
    name: "SCollapse",
    components: {},
    props: {
        id: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        generateClass: function() {
            return (this.show) ? 'show' : null;
        }
    },
    mounted() { },
    created() {
        eventBus.$on('collapse', (value: boolean) => {
            this.show = value;
        });
    }
});