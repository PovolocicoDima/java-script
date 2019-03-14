// module -> Car component

class Car{
    constructor(){
        this.left  = 0;  // pixel from left
        this.speed = 10; // pixel / seconds...

    }
    render(){
        // создали переменную div и сохранили связь с ним
        this.div = document.createElement('div');
        this.div.className = 'car main';
        this.updateStyle();
        var road = document.getElementById('road');
        road.appendChild( this.div );
    }

    steerLeft(){
        this.left -= 10;
        this.updateStyle();
    }

    steerRight(){
        this.left += 10;
        this.updateStyle();
    }

    updateStyle(){
        // этот метод обновляет стиль на экрана в зависимости от параметров
        this.div.style.left = `${this.left}px`;
    }
}
