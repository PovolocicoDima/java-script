//clock component
class Clock{
    constructor(){
        var d = new Date(); // отмечаем текущий момент в виде объекта
        this.hours = d.getHours();

        // дополнить логикой и инструментами если минуты и секунды и часы появляются в формате 1 , 2 , 3 , то преобразовать их в 01 , 02, 03
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
        if (this.seconds < 10){
          this.seconds = "0" + d.getSeconds();
        } else if (this.minutes < 10){
          this.minutes = '0' + d.getMinutes();
        } else if (this.hours < 10) {
          this.hours = '0' + d.getHours();
        }
    }
// задать вопрос по поводу узнать длину this.minutes?length

    // show html
    render(){
        let html = `
        <div class="clock">
            ${this.hours} : ${this.minutes}: ${this.seconds}
        </div>`;
        document.write(html);
    }

}

// object
let c = new Clock();
c.render();



// задать перезагрузку браузера
setTimeout(function(){   location.reload()   }, 1000)
