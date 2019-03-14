var slides = [
    // Массив из объектов
    {   //index 0
        title: "Buy apple and be happy!",
        src: "images/apple-device.jpeg"
    },
    {   // index 1
        title: "Be on the bridge and be happy",
        src: "images/bridge.jpeg"
    },
    {  /// index 2
        title: "Be with girl and be happy",
        src: "images/girl-river.jpeg"
    }
];


// logic

function showSlide(effect, n){
    // стыкует слайды из маленьких квадратов
    // ищем див при помощи селектора
    let div_slide = document.querySelector('#carousel .slide')
    for(var row = 0; row < 6; row++){

        for(var col = 0; col < 8; col++){
            // задаем смещение
            let x  = -100 * col; // смещаем колонку
            let y = -100 * row; // смещаем строку
            // задаем delay
            let d = Math.random()/2;
            // let effect = 'flip';
            src = slides[n].src;   // задаем номер картинки которую вызываем
            // создаем html элементы
            let html =
            `<div style="background-image:url(${src});
            background-position: ${x}px ${y}px; animation-delay:${d}s;"
            class="box ${effect} animated">
            </div>`;
            div_slide.innerHTML += html;
        }
    }
}

showSlide('flip', 1);
