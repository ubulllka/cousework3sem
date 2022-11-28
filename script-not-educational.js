let offset1 = 0;
const slider1 = document.querySelector('.charging-slider-line');
const count1 = slider1.getElementsByTagName('img').length;

document.querySelector('.charging-slider-prev').addEventListener('click', function(){
    offset1 = offset1 - 28;
    if (offset1 < 0) {
        offset1 = 28*(count1-1);
    }
    slider1.style.left = -offset1 + 'vmax';
});

document.querySelector('.charging-slider-next').addEventListener('click', function(){
    offset1 = offset1 + 28;
    if (offset1 > 28*(count1-1)) {
        offset1 = 0;
    }
    slider1.style.left = -offset1 + 'vmax';
});

let offset2 = 0;
const slider2 = document.querySelector('.theatre-slider-line');
const count2 = slider2.getElementsByTagName('img').length;

document.querySelector('.theatre-slider-prev').addEventListener('click', function(){
    offset2 = offset2 - 28;
    if (offset2 < 0) {
        offset2 = 28*(count2-1);
    }
    slider2.style.left = -offset2 + 'vmax';
});

document.querySelector('.theatre-slider-next').addEventListener('click', function(){
    offset2 = offset2 + 28;
    if (offset2 > 28*(count2-1)) {
        offset2 = 0;
    }
    slider2.style.left = -offset2 + 'vmax';
});

let offset3 = 0;
const slider3 = document.querySelector('.intel-slider-line')
const count3 = slider3.getElementsByTagName('img').length;

document.querySelector('.intel-slider-prev').addEventListener('click', function(){
    offset3 = offset3 - 24;
    if (offset3 < 0) {
        offset3 = 24*(count3-3);
    }
    slider3.style.left = -offset3 + 'vmax';
});

document.querySelector('.intel-slider-next').addEventListener('click', function(){
    offset3 = offset3 + 24;
    if (offset3 > 24*(count3-3)) {
        offset3 = 0;
    }
    slider3.style.left = -offset3 + 'vmax';
});

