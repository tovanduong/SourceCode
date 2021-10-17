$(document).ready(function () {
    var today;
    var time;
    var giay;
    var phut;
    var numbers=0;
    var numberp=0;
    setInterval(function () {
    today = new Date();
    giay = today.getSeconds()
    phut = today.getMinutes()
    if(giay<10){
        numbers = "0";
    }else{
        numbers = "";
    }
    if(phut<10){
        numberp = "0";
    }else{
        numberp = "";
    }
    console.log(today.getSeconds())
    $('#output').text(`${today.getHours()} : ${numberp}${today.getMinutes()} : ${numbers}${today.getSeconds()}`);
    },1000)
})