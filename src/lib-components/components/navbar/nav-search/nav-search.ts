import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
	components: {},
	name: "SNavSearch",
	props: {
		href: {
			type: String,
			required: false,
		},
		overlay: {
			type: Boolean,
			required: false,
			default: false,
		}
	},
	data() {
		return {
			open: false,
		};
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