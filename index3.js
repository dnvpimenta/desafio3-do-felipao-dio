class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;

        this.types = ["mago", "guerreiro", "monge", "ninja"];
        this.attacks = ["magia", "espada", "artes marciais", "shuriken"]
        this.type = type % this.types.length;
    }
    getType() {
        return this.types[this.type];
    }
    getAttack() {
        return this.attacks[this.type];
    }
    attack() {
        console.log(`O ${this.getType()} atacou usando ${this.getAttack()}`);
    }
    info() {
        console.log(`Nome: ${this.name}, idade: ${this.age}, Tipo: ${this.getType()}`);
    }
}

for(let i = 0; i < 4; i++) {
    let dnvpimenta = new Hero("dnvpimenta", 0, i);
    dnvpimenta.attack();
}