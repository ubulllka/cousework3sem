let offset1 = 0;
const slider1 = document.querySelector('.inf-us-slider-line')
const count1 = slider1.getElementsByTagName('img').length;

document.querySelector('.inf-us-slider-prev').addEventListener('click', function(){
    offset1 = offset1 - 28;
    if (offset1 < 0) {
        offset1 = 28*(count1-1);
    }
    slider1.style.left = -offset1 + 'vmax';
});

document.querySelector('.inf-us-slider-next').addEventListener('click', function(){
    offset1 = offset1 + 28;
    if (offset1 > 28*(count1-1)) {
        offset1 = 0;
    }
    slider1.style.left = -offset1 + 'vmax';
});

