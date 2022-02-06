import { SIcon } from '@/lib-components';
import Vue, { VNode } from 'vue';

const TARGET = [
    "_blank",
    "_self",
    "_parent",
    "_top",
];

export default /*#__PURE__*/ Vue.extend({
	name: "SDropdownItem",
    components: { },
	props: {
        text: {
			type: String,
			default: 'Item',
			required: false,
			validator(value: String) {
				if (value === '' || value === null || value === undefined) {
					console.warn(`no text set for item`);
					// throw new TypeError(`no text set for item`)
					return false;
				}
				return true;
			},
		},
        href: {
			type: String,
            default: '#',
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
        alt: {
			type: String,
			required: false,
			validator(value: String) {
				if (value === '' || value === null || value === undefined) {
					console.warn(`no alt set for item`);
					// throw new TypeError(`no text set for item`)
					return false;
				}
				return true;
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
    },
	data() {
		return { };
	},
    render: function(createElement): VNode{

        let icon = (this.icon) ? createElement(SIcon,{ 'class': ['si', this.icon] }, ) : undefined;

        let link = (!this.$slots['default']) ?
        createElement(
            'a',
            {
                attrs: {
                    'href': this.href,
                    'target': this.target,
                    'alt': this.alt,
                },
            },
            [
                this.text,
                icon,
            ]
        ) : this.$slots['default'];

        return createElement(
            'li',
            {
                attrs: {
                    role: 'menuitem'
                },
                'class': ['dropdown-item'],
            },
            [
                link,
            ]
        );
    }
});
