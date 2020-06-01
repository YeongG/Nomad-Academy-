const add = document.getElementById('add');
const minus = document.getElementById('minus');
const num = document.getElementById('num');

let count = 0;


add.onclick = function(){
    num.innerText = ++count;
}

minus.onclick = function(){
    num.innerText = --count;
}