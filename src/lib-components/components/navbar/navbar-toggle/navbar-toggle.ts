import Vue from "vue";

import {eventBus} from "@/lib-components/events/collapse/collapse";

export default /*#__PURE__*/ Vue.extend({
    name: "SNavbarToogle",
    components: {},
    props: {
        target: {
            type: String,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            toggled: false,
        };
    },
    methods: {
        // Todo: Add prop event: Event
        // @ts-ignore
        onClick(event: Event) {
            if (!this.disabled) {
                this.toggled = !this.toggled
                eventBus.$emit('collapse', this.toggled)
            }
        },
    },
    mounted() { }
});