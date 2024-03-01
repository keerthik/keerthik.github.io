import { ref } from 'vue'

const App = {
	setup() {
	const message = ref('Hello Vue!')
		return {
		message
	}
}
}

export { App }