import { Words } from 'sample'

const App = {
	data() {
		const words = Words
		const url = "https://korc.me"
		return {
			position: [0,0],
			message: 'Hello Vue!',
			words,
			url
		}
	},
	methods: {
		cellClicked(event) {
			console.log(`Before click: ${this.position}`)
			this.position = [0,1]
			console.log(`Cell A was clicked: ${this.position}`)
		}
	}
}

export { App }