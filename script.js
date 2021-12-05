
let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {

    copyAllButtons.push(all_buttons[i].classList[1]);
}




function buttonColorChanger(manu) {

    if (manu.value === 'red') {
        colorRed();
    }
    else if (manu.value === 'green') {
        colorGreen();
    }
    else if (manu.value === 'blue') {
        colorBlue();
    }
    else if (manu.value === 'yellow') {
        colorYellow();
    }
    else if (manu.value === 'random') {
        colorRandom();
    }
    else if (manu.value === 'reset') {
        colorReset();
    }
}

function colorRed() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');


    }
}

function colorGreen() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');


    }
}


function colorBlue() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');


    }
}


function colorYellow() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');


    }
}


function colorReset() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);


    }
}


function colorRandom() {

    let data = ['btn-danger', 'btn-success', 'btn-primary', 'btn-warning']

    for (let i = 0; i < all_buttons.length; i++) {

        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(data[randomNumber]);



    }


}

