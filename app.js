

let button = document.getElementById('clickMe');

button.onclick = function () {
    let arrNone = document.getElementById('arrow');
    let itemCont = document.getElementById('item-container');
    if (arrNone.style.display === 'none' && itemCont.style.display === 'none') {
        arrNone.style.display = 'block';
        itemCont.style.display = 'block';
    } else {
        arrNone.style.display = 'none';
        itemCont.style.display = 'none';
    }
}



let buttonDown = document.getElementById('down');
let buttonUp = document.getElementById('up');

let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');

 buttonDown.onclick = function () {
    if(fourth.classList.contains('itemInvisible')) {   
        fourth.classList.remove('itemInvisible');
        fourth.classList.add('itemVisible');
        first.classList.remove('itemVisible');
        first.classList.add('itemInvisible');
        buttonUp.classList.remove('buttonInvisible');
        buttonUp.classList.add('buttonVisible');

    } else if (fourth.classList.contains('itemVisible') && fifth.classList.contains('itemInvisible')) {
        fifth.classList.remove('itemInvisible');
        fifth.classList.add('itemVisible');
        second.classList.remove('itemVisible');
        second.classList.add('itemInvisible');
        buttonDown.classList.remove('buttonVisible');
        buttonDown.classList.add('buttonInvisible');
    }
 } 
    


buttonUp.onclick = function () {
    if (second.classList.contains('itemInvisible')) {
        second.classList.remove('itemInvisible');
        second.classList.add('itemVisible');
        fifth.classList.remove('itemVisible');
        fifth.classList.add('itemInvisible');
        buttonDown.classList.remove('buttonInvisible');
        buttonDown.classList.add('buttonVisible');
    } else if (second.classList.contains('itemVisible') && first.classList.contains('itemInvisible')) {
        first.classList.remove('itemInvisible');
        first.classList.add('itemVisible');
        fourth.classList.remove('itemVisible');
        fourth.classList.add('itemInvisible');
        buttonUp.classList.remove('buttonVisible');
        buttonUp.classList.add('buttonInvisible');
    }

}