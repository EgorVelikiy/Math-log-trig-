import Character from "./character";

export default class MagicianDaemon extends Character {
	constructor ({ name, type, attack, stoned, distance }) {
		super(name, type);
		this.attack = attack;
		this.stoned = stoned;
		this.distance = distance;
	};

	set attack(points) {
		this.atck = points
	}

	get attack() {
        let damage = this.atck
        damage -= damage * ((this.distance - 1) / 10);

        if (this.stoned) {
            damage -= Math.log2(this.distance) * 5;
        }

        if (damage < 0) {
        	return 0;
        } else {
        	return Math.floor(damage);
        }
	};
}