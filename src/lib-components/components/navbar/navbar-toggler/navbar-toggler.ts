import Vue from "vue";

import {eventBus} from "@/lib-components/events/collapse/collapse";

export default /*#__PURE__*/ Vue.extend({
    name: "SNavbarToogler",
    components: {},
    props: {
        target: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false,
            default: 'menu'
        },
        toggleIcon: {
            type: String,
            required: false,
            default: 'close'
        }
    },
    data() {
        return {
            toggled: false,
        };
    },
    watch: {
        toggled: function() {

        }
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