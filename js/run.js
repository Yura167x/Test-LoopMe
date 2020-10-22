(function(){

var delay = 60,
    i=0,
    startTimer = function () {
        var elem = document.getElementById('pink_watch'),
            bottom = elem.offsetTop;

        if (i < 10) {
            setTimeout(startTimer, delay);

            elem.style.top = bottom + 20 +'px';
        }

        i++;
    };

var timer = setTimeout(startTimer, delay);
})();

(function(){

var delay = 60,
    i=0,
    startTimer = function () {
        var elem = document.getElementById('grey_watch'),
            bottom = - elem.offsetTop;
    
        if (i < 10) {
            setTimeout(startTimer, delay);
    
            elem.style.top = - bottom - 20 +'px';
        }
    
        i++;
    };
    
var timer = setTimeout(startTimer, delay);
})();

/*(function(){

var delay = 50,
    i=0,
    startTimer = function () {
        var elem = document.getElementById('pink_watch'),
            op = elem.opacity;
    
        if (i < 8) {
            setTimeout(startTimer, delay);
    
            elem.style.opacity = op - 0.1;
        }
    
        i++;
    };
    
var timer = setTimeout(startTimer, delay);
})();*/