export default class Validator {
	constructor(name) {
        this.name = name;
    }
	validateUsername() {
		if (!(/^[a-z]+[a-z0-9-_]*[a-z]+$/i.test(this.name)) || (/\d{4,}/.test(this.name))) {
			return false
		}
		return true
	}
}