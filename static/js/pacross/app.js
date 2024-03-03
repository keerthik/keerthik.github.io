import { Words } from 'sample'
import { padArray } from 'tools'

const App = {
	data() {
		let rows = []
		const url = "https://korc.me"
		let maxwidth = 0
		for (let word of Words.across) {
			maxwidth = Math.max(word.word.length, maxwidth)
			let newrow = Array.from({length: word.word.length}, () => 0)
			newrow = padArray(newrow, maxwidth, word.start[1], -1)
			rows.push(newrow)
		}
		const grid = rows
		return {
			position: [0,0],
			message: 'Hello Vue!',
			grid,
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

