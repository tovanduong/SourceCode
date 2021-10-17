$(document).ready(function () {
    var tiktak = 0;
    var giay ="00";
    var phut = 0;
    var demp =0;
    var demt =0;
    var bodem="";
    $("#start").click(function () {
        bodem = setInterval(count,10)
    })
    $("#stop").click(function () {
        clearInterval(bodem)
        // bodem = setInterval(count,10)             
    })
    $("#rs").click(function () {
        tiktak = 0;
        giay ="00";
        phut = 0;
        clearInterval(bodem)
        $("span").text(`00 : 00: 00`)  
        
    })
    var count = function () {
        tiktak++;        
        if(tiktak==100){
            giay++;
            demp++;
            if(giay>59){
                phut++;
                giay=0; 
            }
            if(giay < 10){
                giay = "0"+giay;
            }
            if(demp<600){
                demt = 0;
            }else if(demp>=600) {
                demt = "";
            }         
            tiktak=0;                                    
        }
        $("span").text(`${demt}${phut} : ${giay} : ${tiktak}`)  
    }
})
