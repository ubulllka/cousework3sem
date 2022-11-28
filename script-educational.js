let offset1 = 0;
const slider1 = document.querySelector('.inform-slider-line')
const count1 = slider1.getElementsByTagName('img').length;

document.querySelector('.inform-slider-prev').addEventListener('click', function(){
    offset1 = offset1 - 28;
    if (offset1 < 0) {
        offset1 = 28*(count1-1);
    }
    slider1.style.left = -offset1 + 'vmax';
});

document.querySelector('.inform-slider-next').addEventListener('click', function(){
    offset1 = offset1 + 28;
    if (offset1 > 28*(count1-1)) {
        offset1 = 0;
    }
    slider1.style.left = -offset1 + 'vmax';
});

let offset2 = 0;
const slider2 = document.querySelector('.pair-slider-line')
const count2 = slider2.getElementsByTagName('img').length;

document.querySelector('.pair-slider-prev').addEventListener('click', function(){
    offset2 = offset2 - 24;
    if (offset2 < 0) {
        offset2 = 24*(count2-3);
    }
    slider2.style.left = -offset2 + 'vmax';
});

document.querySelector('.pair-slider-next').addEventListener('click', function(){
    offset2 = offset2 + 24;
    if (offset2 > 24*(count2-3)) {
        offset2 = 0;
    }
    slider2.style.left = -offset2 + 'vmax';
});

