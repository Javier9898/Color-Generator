const colorBtn = document.querySelector('#btn-1');
const boxes = document.querySelectorAll('.box');

let running = false;

function getRandomColor(){
    let components = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i<6; i++){
        color += components[Math.floor(Math.random()*16)];
    }

    return color;
}

function start(){
    if(running){
        boxes.forEach(color => {
            color.style.background = getRandomColor();
        })
        setTimeout(start, 1000);
    }
}

colorBtn.addEventListener('click', function() {
    colorBtn.innerText = 'Stop';

    if(running){
        running = false;
        colorBtn.innerText = 'Change Color';
    } else {
        running = true;
        start();
    }

});