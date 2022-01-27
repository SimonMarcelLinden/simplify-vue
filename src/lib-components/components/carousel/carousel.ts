import Vue, {VNode} from 'vue';
import SCarouselSlide from './carousel-slide.vue';
import SCarouselControl from './carousel-control.vue';
import SCarouselIndicator from './carousel-indicator.vue';

import { cloneSlide, mergeSlideData, setSlideData, } from './utils/utils'

export default /*#__PURE__*/ Vue.extend({
	name: "SCarousel", // vue component name
	components: {
		SCarouselSlide,
		SCarouselControl,
		SCarouselIndicator
	},
	props: {
		id			: {
			type	: String,
			required: false,
		},
		controls	: {
			type	: Boolean,
			required: false,
			default	: true,
		},
		indicators	: {
			type	: Boolean,
			required: false,
			default	: false,
		},
		infiniteLoop: {
			type	: Boolean,
			required: false,
			default	: false,
		},
		responsive	: {
			type    : Object,
			required: false,
			// default: () => ({
			// 	0     : {'items': 1},
			// 	481   : {'items': 2},
			// 	768   : {'items': 3},
			// 	1199  : {'items': 4},
			// })
		},
        customCSS:  {
			type	: Boolean,
			required: false,
			default	: false,
		},
	},
	data() {
		return {
			currentIndex    : 0,
			upcomingIndex   : 0,
			prefersReducedMotion: false,
			transformStyle  : "translateX(0)",
			transitionClass : "transition-initial",
			translateX      : 0,
			maxTranslateX   : 0,
			isTransitioning : false,
			leftEdgeScale   : 0,
			rightEdgeScale  : 0,
			display			: 1
		}
	},
	computed: {
		infoItems(): VNode[] {
			// let arr = [...this.items];
			// let arr : VNode[] = [...this.$slots.default] || [];
			let arr = this.$slots['default'] || [];

			// If there are only 2 items, double array to always have odd number in renderedItems
			if (arr.length === 2) {
				arr = [...arr, ...arr];
			}

			if (arr.length % this.display != 0)
				arr.push(cloneSlide(arr[0]))

			// let arr = arr.map((id, index) => ({ id, key: `${id}-${index}` }));
			return arr;
		},
		renderedItems(): VNode[] {
			const i         = this.currentIndex;
			const infoItems = this.infoItems;
			let slideIndex  = i * this.display;
			const lastIndex = infoItems.length - 1;
			let items		= [];

			if ( infoItems.length === 1 ) {
				// return [infoItems[0]];
				return infoItems;
			}

			while (slideIndex > lastIndex) {
				slideIndex = slideIndex - infoItems.length;
			}

			for (let a = this.display; a > 0; a--) {
				let cloneIndex 	= (slideIndex === 0 ? (lastIndex - a) : (slideIndex - a));
				let pushItem    = cloneSlide( infoItems[cloneIndex] );

				setSlideData    (pushItem, 'key', 100 * cloneIndex + 10);
				mergeSlideData  (pushItem, 'attrs', { tabIndex: -1 } );
				mergeSlideData  (pushItem, 'style', this.renderedWidth());

				items.push(pushItem);
			}

			for (let a = 0; a < this.display; a++) {
				let cloneIndex 	= slideIndex + a;
				let pushItem    = cloneSlide( infoItems[cloneIndex] );

				setSlideData    (pushItem, 'key', 100 * cloneIndex + 10);
				mergeSlideData  (pushItem, 'attrs', { tabIndex: -1 } );
				mergeSlideData  (pushItem, 'style', this.renderedWidth());

				items.push(pushItem);
			}

			for (let a = this.display; a < (this.display*2); a++) {
				let cloneIndex = ((slideIndex+a) > lastIndex) ? (-this.display) + a : slideIndex+a;
				let pushItem    = cloneSlide( infoItems[cloneIndex] );

				setSlideData    (pushItem, 'key', 100 * cloneIndex + 10);
				mergeSlideData  (pushItem, 'attrs', { tabIndex: -1 } );
				mergeSlideData  (pushItem, 'style', this.renderedWidth());

				items.push(pushItem);
			}

			return items;
        },
        isNextAvailable(): boolean {
            const items         = this.$slots['default'] || [];
            const currentIndex  = this.currentIndex;
            const infiniteLoop  = this.infiniteLoop;

            return ( currentIndex < items.length - 1 || ( infiniteLoop && items.length !== 1 ) );
        },
        isPreviousAvailable(): boolean {
            // const { items, currentIndex, infiniteLoop } = this;

            const items         = this.$slots['default'] || [];
            const currentIndex  = this.currentIndex;
            const infiniteLoop  = this.infiniteLoop;

            return currentIndex > 0 || (infiniteLoop && items.length !== 1);
        }
    },
    methods: {
		renderedWidth(): Object {
            // if(!this.customCSS)
                return { 'min-width': 100/this.display +'%' };
            // else
                // return [];
		},
		updateEdgeEffect(deltaX = 0, isFinal = false) {
			if (isFinal) {
				this.transitionClass 	= "transition-edge";
				this.leftEdgeScale 		= 0;
				this.rightEdgeScale 	= 0;
			} else {
				this.transitionClass = "transition-initial";
				const scaleVal = Math.min(0.2 + Math.abs(deltaX) / 50, 1);
			if (deltaX > 0) {
				this.leftEdgeScale = scaleVal;
			}
			if (deltaX < 0) {
				this.rightEdgeScale = scaleVal;
			}
			}
		},
		previous: function () {
			if (this.isTransitioning) {
				return;
			}

			if (!this.isPreviousAvailable) {
				this.updateEdgeEffect(100, false);
				setTimeout(() => {
					this.updateEdgeEffect(0, true);
				}, 100);
				return;
			}

			const items                 = this.infoItems;
			const currentIndex          = this.currentIndex;
			const prefersReducedMotion  = this.prefersReducedMotion;

			this.transitionClass = "transition-item";
			this.transformStyle  = "translateX(100vw)";

			const prevIndex =
			currentIndex === 0 ? items.length - 1 : currentIndex - 1;
			this.upcomingIndex = prevIndex;

			if (prefersReducedMotion) {
				this.updateCurrentItem();
			}
		},
		next: function() {
			if (this.isTransitioning) {
				return;
			}

			if (!this.isNextAvailable) {
				this.updateEdgeEffect(-100, false);
				setTimeout(() => {
					this.updateEdgeEffect(0, true);
				}, 100);
				return;
			}

			const currentIndex         = this.currentIndex;
			const items                = this.infoItems;
			const prefersReducedMotion = this.prefersReducedMotion;

			this.transitionClass = "transition-item";
			this.transformStyle  = "translateX(-100vw)";

			const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
			this.upcomingIndex = nextIndex;

			if (prefersReducedMotion) {
				this.updateCurrentItem();
			}
		},
        setSlide: function(index: number) {

			if (this.isTransitioning) {
				return;
			}
console.log(index)
			// if (!this.isNextAvailable) {
			// 	this.updateEdgeEffect(-100, false);
			// 	setTimeout(() => {
			// 		this.updateEdgeEffect(0, true);
			// 	}, 100);
			// 	return;
			// }

			const currentIndex         = index;
			const items                = this.infoItems;

			this.transitionClass = "transition-item";
			this.transformStyle  = "translateX(-100vw)";

			const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
			this.upcomingIndex = nextIndex;

			// if (prefersReducedMotion) {
			// 	this.updateCurrentItem();
			// }
        },
		updateCurrentItem() {
			this.currentIndex = this.upcomingIndex;
			this.resetTranslate();
		},
		resetTranslate() {
			this.isTransitioning	= false;
			this.transitionClass	= "transition-initial";
			this.transformStyle		= "translateX(0)";
			this.translateX			= 0;
			this.maxTranslateX		= 0;
		},
		calculateItemSize() {
			if( this.responsive ){
				Object.entries( this.responsive ).forEach(([key, value]) => {
					if ( parseInt(key) <= window.innerWidth ) {
						// @ts-ignore-this-line
						this.display = value['items'];
					}
				})
			}
        },
    },
    render: function (createElement): VNode {
		let children: (VNode | VNode[]) = this.renderedItems;

		let wrapperAttr = {
			attrs: {
				role: 'list'
			},
			on: {
				transitionstart: (e: Event) => {
					const element = e.currentTarget as HTMLElement
					if(element.classList.contains('carousel-wrapper')) {
						this.isTransitioning = true;
					};
				},
				transitionend: (e: Event) => {
					const element = e.currentTarget as HTMLElement
					if(element.classList.contains('carousel-wrapper')) {
						this.updateCurrentItem();
					};
				},
			},
			'class': ['carousel-wrapper', this.transitionClass],
			'style': `transform: ${this.transformStyle};`
		};

		let controls = (this.controls) ? createElement(
			SCarouselControl,
			{
				on: {
					previous: () => {
						this.previous();
					},
					next: () => {
						this.next();
					},
				},
				attrs: {
					id: (this.id) ? this.id + '-control' : 'control',
				},
				props: { },
			}
		) : undefined

		let indicators = (this.indicators) ? createElement(
			SCarouselIndicator, {
                on: {
                    slide: (index: number) => {
                        this.setSlide(index);
                    },
                },
                attrs: {
                    id			: this.id,
                    length		: children.length/this.display,
                    currentIndex: this.currentIndex,
                },
                props: { }
		    }
        ) : undefined

		return createElement(
			/** {String | Object | Function} tag
			 * An HTML tag name, a component, an async component, or a
			 * functional component.
			 * Required.
			 **/
			'div',
			/**
			 * {Object} props
			 * An object corresponding to the attributes, props and events
			 * we would use in a template.
			 *
			 * Optional.
			 **/
			{
				attrs: {
					id: this.id
				},
				'class': ['carousel', 'slide', (this.customCSS)? 'custom-style' : ''],
			},

			/**
			 * {String | Array | Object} children
			 * Children VNodes, built using `h()`,
			 * or using strings to get 'text VNodes' or
			 * an object with slots.
			 *
			 * Optional.
			 **/
			[
				createElement(
					'div',
					wrapperAttr,
					[
						children,
					]
				),
				controls,
				indicators,
			]
		)
	},
	beforeMount() {
		this.calculateItemSize();
	},
	created() {
		window.addEventListener('resize', this.calculateItemSize)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.calculateItemSize)
	},
});
