import Vue, { VNode } from 'vue';

export default /*#__PURE__*/ Vue.extend({
    name: "SIcon",
    components: { },
    props: {
        icon: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            toggled: false,
        };
    },
    watch: {},
    methods: {},
    render: function(createElement): VNode{
        return createElement(
            'i',
            {
                attrs: {},
                on: {},
                'class': ['si', `si-${this.icon}`],
            },
        );
    },
});
