let offset = 0;
const slider = document.querySelector('.inf-us-slider-line')
const count = slider.getElementsByTagName('img').length;

document.querySelector('.inf-us-slider-prev').addEventListener('click', function(){
    offset = offset - 28;
    if (offset < 0) {
        offset = 28*(count1-1);
    }
    slider.style.left = -offset + 'vmax';
});

document.querySelector('.inf-us-slider-next').addEventListener('click', function(){
    offset = offset + 28;
    if (offset > 28*(count1-1)) {
        offset = 0;
    }
    slider.style.left = -offset + 'vmax';
});

