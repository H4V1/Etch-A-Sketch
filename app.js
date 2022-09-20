const container = document.querySelector('#container');

for(i = 0; i < 16*16; i++) {
    container.appendChild(document.createElement('div'));
}

const div = document.querySelectorAll('div');

div.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = 'blue';
    });
});