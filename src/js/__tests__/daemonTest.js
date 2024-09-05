import Daemon from '../daemon'

test('Создание Daemon', () => {
	const daemon = new Daemon({ name: 'Егор', distance: 1 });

	const obj = {
		atck: 10,
		name: 'Егор',
		type: 'Daemon',
		health: 100,
		level: 1,
		defence: 40,
		stoned: false,
		distance: 1
	};

	console.log(daemon)

	expect(daemon).toEqual(obj);
})