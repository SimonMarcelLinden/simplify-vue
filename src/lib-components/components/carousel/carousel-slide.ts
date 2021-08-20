import Vue from "vue";
// SCarouselIndicator

import { carouselBus } from "@/lib-components/events/carousel/carousel";

export default /*#__PURE__*/ Vue.extend({
    name: "SCarouselSlide", // vue component name
    components: { },
    props: {
        caption: {
            type: String,
            required: false,
        },
        text: {
            type: String,
            required: false,
        },
        imgSrc: {
            type: String,
            required: false,
            // default: ( this ? 'test' : 'test2'),            

        },
        imgAlt: {
            type: String,
            required: false,
        },
        imgBlank: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            width: 1920,
            height: 1080,
            blankSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY1i9ejUABAYCAuT82/EAAAAASUVORK5CYII='
        };
    },
    created() {
        carouselBus.$on('size', (value: Array<Number>) => {
            // @ts-ignore-next-line
            this.width  = value['width'];
            // @ts-ignore-next-line
            this.height = value['height'];
        });
    },
    computed: { }
});
