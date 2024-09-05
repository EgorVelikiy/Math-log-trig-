import Magician from '../magician'
import Daemon from '../daemon'


test('Проверка урона на второй клетке без дурмана', () => {
	const mag = new Magician({name: 'Егор', attack: 100, stoned: false, distance: 2})

	expect(mag.attack).toBe(90)
})


test('Проверка урона на пятой клетке без дурмана', () => {
	const mag = new Magician({name: 'Егор', attack: 100, stoned: false, distance: 5})

	expect(mag.attack).toBe(60)
})


test('Проверка урона на второй клетке с дурманом', () => {
	const mag = new Magician({name: 'Егор', attack: 100, stoned: true, distance: 2})

	expect(mag.attack).toBe(85)
})


test('Проверка урона на второй клетке с дурманом', () => {
	const mag = new Magician({name: 'Егор', attack: 100, stoned: true, distance: 5})

	expect(mag.attack).toBe(48)
})


test('Проверка отрицательного урона', () => {
	const mag = new Magician({name: 'Егор', attack: 100, stoned: false, distance: 11})

	expect(mag.attack).toBe(0)
})