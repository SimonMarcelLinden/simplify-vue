import Vue from "vue";

const TYPES = ["button", "submit", "reset"];
const VARIANTS = ["primary", "second", "third", "info", "danger", "warning"];

export default /*#__PURE__*/ Vue.extend({
    name: "SButton",
    components: {},
    props: {
        type: {
            type: String,
            required: false,
            default: "button",
            validator(value) {
                const isValid = TYPES.includes(value);
                if (!isValid) {
                    console.warn(`allowed types are ${TYPES}`);
                }
                return isValid;
            },
        },
        variant: {
            type: String,
            required: false,
            validator(value) {
              const isValid = VARIANTS.includes(value);
              if (!isValid) {
                console.warn(`allowed variants are ${VARIANTS}`);
              }
              return isValid;
            },
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {};
    },
    computed: {
        classes: function() {
            return ( this.variant ) ? 'btn-' + this.variant : null;
        }
    },
    methods: {
        onClick(event: Event) {
            this.$emit('onClick', event)
        },
    }
});