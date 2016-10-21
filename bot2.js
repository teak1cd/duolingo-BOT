var words = {"un":"a ","hombre":"man ","una":"a ","mujer":"woman ","soy":"i am ","el":"the ","niño":"boy ","la":"the ","niña":"girl ","a":"un ","man":"hombre ","a":"un ","woman":"mujer ","boy":"nino ","the":"el ","girl":"niña ","yo":"i ","i":"yo ","soy ":"am ","am":"soy "};
function f(){
try{
window.g = function(){        
    window.requestAnimationFrame(window.g);
    try{
        if(document.getElementsByClassName("player")[2].innerHTML==="Translate this text"){
            window.l();
        }else{
            var k = document.getElementsByClassName("player")[2].innerHTML.split("“");
            k[1] = k[1].substring(0, k[1].length - 1);
            var t = window.l(k[1]).replace(/ ;/g,"");
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
        }else{
            var j = words[t[i].innerHTML.toLowerCase()];
        }
        if(typeof j === "undefined") j = " ";
        trans+=j
    }
    if(typeof s === "undefined"){
        document.getElementById("text-input").value = trans;
    }else{
        trans+=";";
    }
    return trans;
}
window.g();
}catch(e){consome.log(e);setTimeout(f,500);}
}
f();
alert("thanks for using my basics 1 bot");
