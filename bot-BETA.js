var words = {"un":"a ","hombre":"man ","una":"a ","mujer":"woman ","soy":"am ","el":"the ","niño":"boy ","la":"the ","niña":"girl ","a":"un ","man":"hombre ","a":"un ","woman":"mujer ","boy":"nino ","the":"el ","girl":"niña ","yo":"i ","i":"yo ","soy":"am ","am":"soy ","come":"eats ","eats":"come ","apple":"manzana ","manzana":"apple ","she":"ella ","ella":"she ","es":"is ","is":"es ","él":"he ","he":"él ","manzanas":"apples ","apples":"manzanas ","bread":"pan ","pan":"bread ","agua":"water ","water":"agua ","leche":"milk ","milk":"leche ","bebo":"drink ","drink":"bebo ","tú":"you ","comes":"eat ","eat":"comes ","como":"eat ","bebes":"drink ","bebe":"drink ","usted":"you ","segura":"safe ","safe":"segura ","nosotras":"we ","somos":"are ","mujeres":"women ","women":"mujeres ","bebemos":"drink ","aqua":"water ","water":"aqua ","nosotros":"we ","hombres":"men ","¿son":"are ","ustedes?":"you?","dueño":"owner ","owner":"dueño "};
var exeptions = [
    ["soy","un","i am a "],
    ["usted","es","you are "],
    ["tú","eres","you are "],
    ["the","woman","la mujer "],
    ["it","is","es "],
    ["somos","mujeres","we are women"],
    ["somos","hombres","we are men"],
    ["el","mujer","the woman"],
    ["the","apple","la manzana"]
];
function f(){
try{
    window.simulateClick = function(control)
{
    if (document.all)
    {
        control.click();
    }
    else
    {
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
        control.dispatchEvent(evObj);
    }
}
window.g = function(){        
    window.requestAnimationFrame(window.g);
    try{
        if(document.getElementsByClassName("player")[2].innerHTML==="Translate this text"){
            window.l();
            /*
            var e = new Event("keydown");
            e.key="a";    // just enter the char you want to send 
            e.keyCode=e.key.charCodeAt(0);
            e.which=e.keyCode;
            e.altKey=false;
            e.ctrlKey=true;
            e.shiftKey=false;
            e.metaKey=false;
            e.bubbles=true;
            document.dispatchEvent(e);
           */
            var keyboardEvent = document.createEvent("KeyboardEvent");
            var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


            keyboardEvent[initMethod](
                   "keydown", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    40, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
            );
            document.dispatchEvent(keyboardEvent);
            simulateClick(document.getElementById("next_button"));
            simulateClick(document.getElementById("next_button"));
        }else{
            var k = document.getElementsByClassName("player")[2].innerHTML.split("“");
            k[1] = k[1].substring(0, k[1].length - 1);
            var t = window.l(k[1]).replace(/ ;/g,"");
            document.getElementsByClassName("player")[2].innerHTML = t;
            var _h = document.getElementsByClassName("title");
            var c = [0,0,0];
            try{
            for(var i = 0;i<3;i++){
                for(var j = 0;j<_h[i].innerHTML.length;j++){
                    if(_h[i].innerHTML[j]===t[j]){
                        c[i]++;
                    }
                }
            }
            }catch(e){
            }
            var s = 0;
            var __g = 0;
            if(c[0] > s && c[0] > 2){ s = c[0];__g=1;}
            if(c[1] > s && c[1] > 2){ s = c[1];__g=2;}
            if(c[2] > s && c[2] > 2){ s = c[2];__g=3;}
            console.log(__g);
            console.log(c);
            simulateClick(document.getElementById("option-"+__g));
            simulateClick(document.getElementById("next_button"));
            simulateClick(document.getElementById("next_button"));
        }
    }catch(e){}
}
window.l = function(s){
    var t ="" 
    if(typeof s !== "undefined")t = s.split(" ");
    if(typeof s === "undefined")t =document.getElementsByClassName("non-space");
    var trans = "";
    for(var i = 0;i<t.length;i++){
        if(typeof s !== "undefined"){
            var j = words[t[i]];
            for(var f=0;f<exeptions.length;f++){
                if(t[i] === exeptions[f][0] && t[i+1]===exeptions[f][1]){ j = exeptions[f][2];i++;}  
            }
        }else{
            var j = words[t[i].innerHTML.toLowerCase()];
            for(var f=0;f<exeptions.length;f++){
                if(t[i].innerHTML.toLowerCase()===exeptions[f][0] &&t[i+1].innerHTML.toLowerCase()===exeptions[f][1]){ j = exeptions[f][2];i++;}
            }
        }
        if(typeof j === "undefined") j = " ";
        trans+=j
    }
    if(trans === "un niña ")trans = "una niña";//
    trans = trans.replace(/i i/gm,"i");
    if(typeof s === "undefined"){
        document.getElementById("text-input").value = trans;
    }else{
        trans+=";";
    }
    return trans;
}
g();
}catch(e){consome.log(e);setTimeout(f,500);}
}
f();
alert("thanks for using my basics 1 bot\nbot by teak1cd");
