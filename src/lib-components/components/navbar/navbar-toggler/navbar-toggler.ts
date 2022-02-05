import Vue, { VNode } from 'vue';

import { SButton, SIcon} from '@/lib-components';

import {eventBus} from "@/lib-components/events/collapse/collapse";
export default /*#__PURE__*/ Vue.extend({
    name: "SNavbarToogler",
    components: {
        SButton,
        SIcon
    },
    props: {
        target: {
            type: String,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
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
        toggled: function() { }
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
    render: function(createElement): VNode{

        return createElement(
            SButton,
            {
                attrs: {
                    type: 'button'
                },
                on: {
                    onClick: (event: Event) => {
                        this.onClick(event);
                    },
                },
                'class': ['navbar-toggler'],
            },
            [
                (this.icon) ? createElement(
					SIcon,
                    {
                        attrs: {
                            'icon': (!this.toggled) ? this.icon : this.toggleIcon,
                        },
                        'class': [],
                    }

                ): undefined,
            ]
        );
    },
});
