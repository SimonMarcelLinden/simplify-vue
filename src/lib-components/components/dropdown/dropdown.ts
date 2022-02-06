import Vue, { VNode } from 'vue';
import SButton from "../button/button.vue"
import SDropdownItem from "./dropdown-item.vue"

import { cloneSlide } from '../carousel/utils/utils';

export default /*#__PURE__*/ Vue.extend({
	name: "SDropdown",
    components: {
		SButton,
		SDropdownItem,
	},
	props: {
		id			: {
			type	: String,
			required: false,
		},
        text: {
			type: String,
			default: 'Dropdown',
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
        icon: {
			type: String,
			required: false,
			validator(value: String) {
				if (value === null || value === undefined) {
					console.warn(`no icon set for item`);
					// throw new TypeError(`no text set for item`)
					return false;
				}
				return true;
			},
		},
        items: {
			type: Array,
			required: false,
			validator(value: Array<String>) {
				if ( value === null || value === undefined) {
					console.warn(`no items set for item`);
					// throw new TypeError(`no text set for item`)
					return false;
				}
				return true;
			},
		},
        merge: {
            type: Boolean,
            required: false,
            default: false
        }
    },
	data() {
		return {
			hover: false,
		};
	},
	computed: {
        rendered_slots(): VNode[] {
            if( !this.$slots['default'] && !this.items ) {
                return [this.$createElement(
                    SDropdownItem,
                    {
                        on: { },
                        attrs: { },
                        props: {
                            'text': 'No item for this Dropdown',
                            'href': null
                        },
                    }
                )];
            }

            return this.items_by_props;

            // return (!this.$slots['default']) ? this.items_by_props : this.items_by_slot;
        },
        items_by_props(): VNode[] {
            let childs:VNode[] = [];

            if( this.items ){
                this.items.forEach((item) => {
                    let child = this.$createElement(
                        SDropdownItem,
                        {
                            on: { },
                            attrs: { },
                            props: {
                                // @ts-ignore-next-line
                                'text'  : item.text,
                                // @ts-ignore-next-line
                                'href'  : item.href,
                                // @ts-ignore-next-line
                                'alt'   : item.alt,
                                // @ts-ignore-next-line
                                'icon'  : item.icon
                            },
                        }
                    );
                    childs.push(child);
                });

                if(this.merge) {
                    let arr = this.$slots['default'] || [];
                    for (let index = 0; index < arr.length; index++) {
                        let pushItem    = cloneSlide( arr[index] );
                        childs.push(pushItem);
                    }
                }
            } else {
                return this.$slots['default'] || [];
            }

            return childs;
        },
    },
    methods: {
        close (e: Event) {
            // @ts-ignore-next-line
            if (!this.$el.contains(e.target)) {
              this.hover = false
            }
        }
    },
    mounted () {
        document.addEventListener('click', this.close)
    },
    beforeDestroy () {
        document.removeEventListener('click',this.close)
    },
    render: function(createElement): VNode{
		let children: (VNode | VNode[]) = this.rendered_slots;

		return createElement(
            'div', {
                attrs: {
                    'id': (this.id) ? this.id : "dropdown",
                },
                on: {
                    click: () => {
                        this.hover = !this.hover;
                    },
				},
				'class': 'dropdown',
            },
            [
                createElement(
					SButton,
					{
                        'class': 'dropdown-toggle',
                        attrs: {
                            'data-toggle': (this.id) ? this.id : "dropdown",
                        },
                    },
                    [
                        (this.icon) ? [createElement('i',{ 'class': ['si', this.icon] }, )] : undefined,
                        (this.$slots['text'] ) ? this.$slots['text'] : [createElement('span', this.text, )],
                    ]
                ),
                createElement(
                    'ul',
                    {
                        attrs: {
                            'role': "menu",
                        },
                        'class': ['dropdown-menu', { 'show': this.hover }],
                    },
                    [
                        children,
                    ]
                )
            ]
        );
    }
});
