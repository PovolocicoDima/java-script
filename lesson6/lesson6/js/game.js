var player_car = new Car();
    player_car.render();
var road = document.getElementById('road');
function action(){
    if(event.code == "ArrowLeft"){
        player_car.steerLeft();
    }
    if (event.code == "ArrowRight"){
        player_car.steerRight();
    }
    // alert( event.code );

    // +2 if -----> .speed
    // 1 = уменьшая 2 - увеличивает скорость
}

function animate(){
    var y = parseInt(road.style.backgroundPositionY)
    y += player_car.speed;
    road.style.backgroundPositionY = `${y}px`;
    // console.log(road.style.backgroundPositionY);
}

setInterval(animate, 20);
