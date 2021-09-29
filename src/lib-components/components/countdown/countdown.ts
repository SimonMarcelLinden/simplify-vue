import Vue from "vue";

const STYLES = [
	1, 2, 3, 4
];

export default /*#__PURE__*/ Vue.extend({
	name: "SCountdown",
	components: {},
	props: {
		endDate: {
			type 	: Date, //[Date, String],
			required: true,
			// default	: function() {
			// 	return new Date();
			// },
		},
        variant: {
            type 	: Number,
            required: false,
			default : 1,
            validator(value) {
              const isValid = STYLES.includes(value);
              if (!isValid) {
                console.warn(`allowed variants are ${STYLES}`);
              }
              return isValid;
            },
        },
	},
	data() {
		return{
			displayDays		: 0,
			displayHours 	: 0,
			displayMinutes	: 0,
			displaySeconds	: 0,
		}
	},
	mounted() {
		// @ts-ignore-next-lines
		this.showRemaining();
	},
	computed: {
		_seconds(): number {
			return 1000;
		},
		_minutes(): number {
			// @ts-ignore-next-lines
			return this._seconds * 60;
		},
		_hours(): number {
			// @ts-ignore-next-lines
			return this._minutes * 60;
		},
		_days(): number {
			// @ts-ignore-next-lines
			return this._hours * 24;
		},
		getStyleClass(): null{
			return null;
			// return `countdown-style-${this.variant}`
		},
		// _endDate() {
		// 	return this.endDate;
		// }
	},
	methods: {
		formatNum(num: number): String {
			return num < 10 ? `0${num}` : `${num}`;
		},
		showRemaining() {
			const timer = setInterval(() => {
				const now = new Date();
				let end = new Date( this.endDate );

				const distance = end.getTime() - now.getTime();

				if(distance < 0 ){
					clearInterval(timer);
					return;
				}

				// @ts-ignore-next-lines
				const days 		= Math.floor(distance / this._days);
				// @ts-ignore-next-lines
				const hours 	= Math.floor((distance % this._days) / this._hours);
				// @ts-ignore-next-lines
				const minutes 	= Math.floor((distance % this._hours) / this._minutes);
				// @ts-ignore-next-lines
				const seconds 	= Math.floor((distance % this._minutes) / this._seconds);

				// @ts-ignore-next-lines
				this.displayMinutes = this.formatNum(minutes);
				// @ts-ignore-next-lines
				this.displaySeconds = this.formatNum(seconds);
				// @ts-ignore-next-lines
				this.displayHours 	= this.formatNum(hours);
				// @ts-ignore-next-lines
				this.displayDays 	= this.formatNum(days);
			}, 1000)
		}
	},
	watch : { },
	beforeDestroy(){
		// @ts-ignore-next-line
		clearInterval(this.timer)
	}
});