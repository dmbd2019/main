var x = 0;

var interval = setInterval(function() {
    x++;
    image.style.top = 10 - (-0.1 * x * (x - 10)) + 'px';

    if(x >= 50) clearInterval(interval);
}, 20);


el = document.getElementById('lol');
el.onmouseover = function(){el.click();}

el.onclick = function(){
    el.style.background = 'red';
}
