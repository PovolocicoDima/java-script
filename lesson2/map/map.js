// class of map componentpackman
// LEGEND
const EMPTY    = 0;
const PACMAN   = 1;
const CHERRY   = 2;
const BOMB     = 3;
const COIN     = 4;
var pac_direction = "right"; // куда смотрит лица пакмэна
var pac_explosion = false;   //  чтобы корректно работал взрыв

// homework каждый раз когда COIN = score+5
// bomb: -50 health
// cherry : +30 health
// when health < 0 => game over
// ограничить карту , чтобы не уходил за её пределы
var health = 100;
var score = 0;


function endExplosion(){
    pac_explosion = false;
    m.render();
}

class GameMap {
    // init
    constructor() {
        this.grid = [EMPTY,
            CHERRY,
            EMPTY,
            COIN,
            BOMB,
            PACMAN,
            EMPTY,
            COIN,
            CHERRY,
            BOMB];
        //              ^
        //              6(index)
    }
    render(){
        var div = document.getElementById('map');
        var html = ``;

        for (var i = 0; i< this.grid.length; i++){
            // if / else чтобы в зависимости от найденного кода между дивами происходил чтото(показывало что указано в массиве)
            var c = '';
            switch(this.grid[i]){
                case EMPTY:                 break;
                case PACMAN:
                    c = 'pacman' ;
                        if(pac_direction == "left"){
                            c+=' left';
                        }
                        if(pac_explosion == true){
                            c+=" explosion";
                            // timer na 1 sec
                            setTimeout( endExplosion, 1000 );
                        }
                break;
                case CHERRY: c = 'cherry' ; break;
                case BOMB:   c = 'bomb' ; break;
                case COIN:   c = 'coin' ; break;
            }
            html += `<div class="${c}"></div>`;
        }
        div.innerHTML = html;
    }
    action(){
        // в зависимости от нажатых клавиш высветит сообщение
        if(event.code == "ArrowRight"){
            pac_direction = "right";
            this.moveRight()
        }
        if(event.code == "ArrowLeft"){
            pac_direction = "left";
            this.moveLeft();
        }
        console.log( event.code );
    }
    moveLeft(){
        // 1) find pacman ............. где-то ограничить карту
        var index = this.grid.indexOf(PACMAN);
        this.grid[index] = 0;   //  9 индекс конец карты
        // 3) check what is there
        if (this.grid[index - 1] == BOMB){
            pac_explosion = true;
        }
        // 4) set pacman to next position , to the left( -1 )
        this.grid[index - 1] = PACMAN;
        // 5) render the result
        this.render();
    }
    moveRight(){
        // 1) find pacman index
        var index = this.grid.indexOf(PACMAN);
        // 2) delete pacman from current position
        this.grid[index] = 0;  // конец карты на 9 ингдексе
        // 3) check what is there
        if (this.grid[index + 1] == BOMB){
            pac_explosion = true;
        }
        // 4) set pacman to next position , to the right( + 1 )
        this.grid[index + 1] = PACMAN;
        // 5) render result
        this.render();
    }
}
