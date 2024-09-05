import MagicianDaemon from './magicianDaemon'

export default class Magician extends MagicianDaemon {
	constructor ({ name, attack = 10, stoned = false, distance }) {
		super({ name: name, type: 'Magician', attack: attack, stoned: stoned, distance: distance });
		this.defence = 40;
	};
}