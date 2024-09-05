import MagicianDaemon from './magicianDaemon'

export default class Daemon extends MagicianDaemon {
	constructor({ name, attack = 10, stoned = false, distance }) {
		super({ name: name, type: 'Daemon', attack: attack, stoned: stoned, distance: distance });
		this.defence = 40;
	}
}

