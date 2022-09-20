const container = document.querySelector('#container');


//Creates the first grid
for(i = 0; i < 16*16; i++) {
    container.appendChild(document.createElement('div'));
}

const div = document.querySelectorAll('div');

//add eventListener to every 'div' element
div.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = 'blue';
    });
});

const newGrid = document.querySelector('button');
let gridSize = 0;

newGrid.addEventListener('click', function() {
    let num = prompt('Insert a number less than 100');

    if(num > 100) {
        alert('NUMBER IS GREATER THAN 100 TRY AGAIN!');
    } else {
        gridSize = num;
    }
});