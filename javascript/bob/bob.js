const isYelling = (string) => {
	return string === string.toUpperCase()
}

const isQuestion = (string) => {
	return string.slice(-1) === '?'
}

const noLetters = (string) => {
	return /^[^a-zA-Z]*$/.test(string)
}

export const hey = (message) => {
	message = message.replace(/\s/g, '')
	if (noLetters(message) && isQuestion(message)) {
		return 'Sure.'
	} else if (noLetters(message) && message === "") {
		return 'Fine. Be that way!'
	} else if (noLetters(message)) {
		return 'Whatever.'
	} else if (isQuestion(message) && isYelling(message)) {
		return 'Calm down, I know what I\'m doing!'
	} else if (isYelling(message)) {
		return 'Whoa, chill out!'
	} else if (isQuestion(message)) {
		return 'Sure.'
	} else {
		return 'Whatever.'
	}
};