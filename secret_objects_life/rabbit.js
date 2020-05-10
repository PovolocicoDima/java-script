function Rabbit(type){
    this.type = type;
}
Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit speak: '${line}'`);
};

let weirdRabbit = new Rabbit('weird');