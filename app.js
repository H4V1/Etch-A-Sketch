let container = document.querySelector('#container');


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

const newGridBtn = document.querySelector('button');

//remove all div elements and create a new grid using the number the user enter in the prompt
function newGrid(size) {
    div.forEach(element => element.remove());
    
    for(i = 0; i < size * size; i++) {
        container.appendChild(document.createElement('div'));
    }
};

//add eventListener to the New Grid button and pop up a prompt asking for a number less than 100 for the new grid
newGridBtn.addEventListener('click', function() {
    let num = prompt('Insert a number less than 100');

    if(num > 100) {
        alert('NUMBER IS GREATER THAN 100 TRY AGAIN!');
    } else {
        newGrid(num);
    }
});

container.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = 'blue';
    })
})
