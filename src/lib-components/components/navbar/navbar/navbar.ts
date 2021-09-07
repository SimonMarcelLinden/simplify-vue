import Vue from "vue";

const EXPAND = [
    'sm', 'md', 'lg', 'xl'
];

export default /*#__PURE__*/ Vue.extend({
    name: "SNavbar", // vue component name
    components: {},
    props: {
        expand: {
            type: String,
            required: false,
            validator(value) {
                const isValid = EXPAND.includes(value);
                if (!isValid) {
                    console.warn(`allowed types are ${EXPAND}`);
                }
                return isValid;
            },
        },
    },
    data() {
        return {};
    },
    computed: {
        expandClass: function () {
            if (this.expand)
                return this.expand + ':navbar-expand';
            else
                return null;
        }
    }
});
