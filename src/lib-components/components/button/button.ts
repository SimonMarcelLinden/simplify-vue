import Vue from "vue";

const TYPES = ["button", "submit", "reset"];
const VARIANTS = ["primary", "secondary", "third", "info", "danger", "warning"];
const SIZES = [
    "sm",
    "md",
    "lg",
    "xl",
    "xll",
];

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
        size: {
          type: String,
          default: null,
          validator(value) {
            const isValid = SIZES.includes(value) || value == null;
            if (!isValid) {
              console.warn(`allowed types are ${SIZES}`);
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
            let $class = ( this.variant ) ? 'btn-' + this.variant : null;
                $class = ( this.size ) ? $class + ' btn-' + this.size : $class;

            return $class;
        }
    },
    methods: {
        onClick(event: Event) {
            this.$emit('onClick', event)
        },
    }
});