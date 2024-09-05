import Magician from '../magician'

test('Создание Magician', () => {
	const magician = new Magician({name: 'Егор', distance: 1});

	const obj = {
		atck: 10,
		name: 'Егор',
		type: 'Magician',
		health: 100,
		level: 1,
		defence: 40,
		stoned: false,
		distance: 1
	};

	console.log(magician)

	expect(magician).toEqual(obj);
})