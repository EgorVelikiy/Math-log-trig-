import Validator from '../validator'

test('Проверка валидного ника', () => {
	const validator = new Validator('Eg-or_123A')

	expect(validator.validateUsername()).toBe(true)
})

test('Проверка ника с цифрами вначале', () => {
	const validator = new Validator('1Egor_123A')

	expect(validator.validateUsername()).toBe(false)
})

test('Проверка ника с цифрами вконце', () => {
	const validator = new Validator('Egor_123')

	expect(validator.validateUsername()).toBe(false)
})

test('Проверка ника с дифисом вначале', () => {
	const validator = new Validator('-Egor_123A')

	expect(validator.validateUsername()).toBe(false)
})

test('Проверка ника с недопустимыми символами', () => {
	const validator = new Validator('Egor*_!123A')

	expect(validator.validateUsername()).toBe(false)
})

test('Проверка ника с 4 цифрами', () => {
	const validator = new Validator('Egor*_!1234A')

	expect(validator.validateUsername()).toBe(false)
})