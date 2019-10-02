
//here we setinterval to print time without milliseconds
//we can set milliseconds and it is possible for the timer to
//skip certain seconds if it is high 
setInterval(printTime);
function printTime() {
   
     //here we make a var called today
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    

    //this will add a zero if the nummber is equal to one 
    //it is to mimic a real clock
    if (s.toString().length== 1) {
        s = "0" + s;
    }
    if (m.toString().length == 1) {
        m = "0" + m;
    
    }
    if (h.toString().length == 1) {
        h = "0" + h;
    }

    //here we console log the time for debugging and to see that everything is working fine

    var time =   h + ":"+ m +":"+ s;
    console.log(time);
    
    //here we print out the time and style the it
    document.getElementById("showtime").style.color="white";
    document.getElementById("showtime").innerHTML = time;
}