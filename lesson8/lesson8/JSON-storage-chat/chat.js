// TEMPLATE for a message
class Message{
    constructor(text, autor, date){
        this.text   = text;
        this.autor  = autor;
        this.date   = new Date();  //current date / time
    }
}
///////////////////


//////////////////   CHAT LOGIC  ///////////////
var messages = []; // list of messages

function addMessage(){
    var input = document.querySelector('#chat .input input');
    var m = new Message(input.value, "user");
        messages.push( m );   // add to the end of array
        // save -- messages[] -> 'messages'
        localStorage.setItem('messages', JSON.stringify(messages));
        // очистить строку чата
        input.value = '';
    showMessages();
}


// функция загружает из localStorage массив
function loadMessages(){
    messages = JSON.parse( localStorage.getItem('messages') );
    if (messages === null){
        messages = [];
    }
    showMessages();
}


function showMessages(){
    var div = document.querySelector('#chat .messages');
        div.innerHTML = '';
        for(var i in messages){
            var html = `<div class="message">
                            <p>
                                ${messages[i].text}<hr>
                                <small>
                                ${messages[i].autor} / ${messages[i].date}
                                </small>
                            </p>
                        </div>`;
                        div.innerHTML += html;
        }
}
//////////////////////////
