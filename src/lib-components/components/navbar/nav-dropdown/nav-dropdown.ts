import Vue, { VNode } from 'vue';
import SNavItem from "../nav-item/nav-item.vue"
import SNavLink from "../nav-link/nav-link.vue";

import { setSlotClass } from '@/lib-components/utils/utils';

export default /*#__PURE__*/ Vue.extend({
	name: "SNavDropdown",
	components: {
		SNavItem,
		SNavLink,
	},
	props: {
		text: {
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
	mounted() {
		// console.log( this.$slots['default'] )
	},
	computed: {
		renderedSlot(): VNode[] {
            let slots = this.$slots['default'] || [];
			for (let index = 0; index < slots.length; index++) {
				setSlotClass(slots[index], 'dropdown-item');
			}
			return slots;
		}
	},
	render: function (createElement): VNode {

		return createElement(
			'li',
			{
				attrs: { },
				on: {
					mouseover: () => {
						this.hover = true;
					},
					mouseleave: () => {
						this.hover = false;
					},
				},
				'class': 'nav-item dropdown',
			},
			[
				createElement(
					SNavLink,
					[
						createElement(
							'span',
							this.text
						)
					]
				),
				createElement(
					'div',
					{
						'class': ['dropdown-menu', { 'show': this.hover }, { 'dropdown-menu-right': this.right }],
					},
					[
						createElement(
							'ul',
							[	
								this.renderedSlot,
							]
						),
					]
				),
			],
		);
	}
});
