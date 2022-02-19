import Vue, { VNode } from 'vue';

import { SIcon } from '@/lib-components';
import { linkBus } from "@/lib-components/events/link/link";

const TARGET = [
    "_blank",
    "_self",
    "_parent",
    "_top",
];

export default /*#__PURE__*/ Vue.extend({
	name: "SLinks",
    components: { },
	props: {
        active: {
			type: Boolean,
            default: false,
			required: false,
		},
        activeClass: {
			type: String,
            default: 'active',
			required: false,
		},
        disabled: {
			type: Boolean,
            default: false,
			required: false,
		},
        href: {
			type: String,
			required: false,
			validator(value: String) {
				if (value === '' || value === null || value === undefined) {
					console.warn(`no link set for item`);
					// throw new TypeError(`no text set for item`)
					return false;
				}
				return true;
			},
		},
        target: {
            type: String,
            default: TARGET[1],
            validator(value) {
                const isValid = TARGET.includes(value) || value == null;
                if (!isValid) {
                  console.warn(`allowed types are ${TARGET}`);
                }
                return isValid;
            },
        },
        icon: {
			type: String,
			required: false,
			validator(value: String) {
				if (value === '' || value === null || value === undefined) {
					console.warn(`no icon set for item`);
					// throw new TypeError(`no text set for item`)
					return false;
				}
				return true;
			},
		},
        to: {
            type: String,
            required: false
        }
     },
	data() {
		return { };
	},
	computed: { },
    methods: { },
    mounted () { },
    beforeDestroy () { },
    render: function(createElement): VNode{

        let icon = (this.icon) ? createElement(SIcon, {attrs: { 'icon': this.icon, }},) : undefined;

		return createElement(
            'a',
            {
                attrs: {
                    'href': (this.to) ? this.to : this.href,
                    'target': this.target,
                    'tabindex': (this.disabled) ? '-1' : null,
                    'aria-disabled': (this.disabled) ? true : false,
                },
                on: {
                    onClick: (event: Event) => {
                        // if(this.disabled){
                        //     event.preventDefault();
                        // }
                        event.preventDefault();
                        window.history.pushState(null, '', this.to);
                        linkBus.$emit('navigate');
                    },
                },
                'class': [
                    (this.disabled) ? 'disabled' : null,
                    (this.active) ? this.activeClass : null
                ]
            },
            [
                this.$slots['default'],
                icon,
            ]
        );
    }
});


//<router-link to="/foo">Go to Foo</router-link>
