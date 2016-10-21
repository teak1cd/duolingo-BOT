var words = {"un":"a ","hombre":"man ","una":"a ","mujer":"woman ","soy":"am ","el":"the ","niño":"boy ","la":"the ","niña":"girl ","a":"un ","man":"hombre ","a":"un ","woman":"mujer ","boy":"nino ","the":"el ","girl":"niña ","yo":"i ","i":"yo ","soy":"am ","am":"soy ","come":"eats ","eats":"come ","apple":"manzana ","manzana":"apple","she":"ella ","ella":"she ","es":"is ","is":"es ","él":"he ","he":"él ","manzanas":"apples","apples":"manzanas"};
var exeptions = [
    ["soy","un","i am "],
    ["usted","es","you are "],
    ["tú","eres","you are "],
    ["the","woman","la mujer "]
];
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
            document.getElementsByClassName("player")[2].innerHTML = t;
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
            //if(t[i] === "soy" && t[i+1]==="un") j = "i am ";
            //if(t[i] === "usted" && t[i+1]==="es"){ j = "you are ";i++;}
            //if(t[i] === "tú" && t[i+1]==="eres"){ j = "you are ";i++;}
        }else{
            var j = words[t[i].innerHTML.toLowerCase()];
            for(var f=0;f<exeptions.length;f++){
                if(t[i].innerHTML.toLowerCase()===exeptions[f][0] &&t[i+1].innerHTML.toLowerCase()===exeptions[f][1]){ j = exeptions[f][2];i++;}
            }
            //if(t[i].innerHTML.toLowerCase()==="soy" &&t[i+1].innerHTML.toLowerCase()==="un") j = "i am ";
           // if(t[i].innerHTML.toLowerCase()==="usted" &&t[i+1].innerHTML.toLowerCase()==="es"){ j = "you are ";i++;}
           // if(t[i].innerHTML.toLowerCase()==="tú" &&t[i+1].innerHTML.toLowerCase()==="eres"){ j = "you are ";i++;}
        }
        if(typeof j === "undefined") j = " ";
        trans+=j
    }
    if(trans === "un niña ")trans = "una niña";//
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
alert("thanks for using my basics 1 bot");
