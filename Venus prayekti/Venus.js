window.onload = function (){
    window.setInterval(function (){
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            milliseconds = date.getMilliseconds(),
            clock = hours + ":" + minutes + ":" + seconds +":"+ milliseconds;
        document.getElementById("clock").innerHTML = clock;
        }
    );
}