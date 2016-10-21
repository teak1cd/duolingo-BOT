
    function g(){
        
         window.requestAnimationFrame(g);
        try{
        if(document.getElementsByClassName("player")[2].innerHTML==="Translate this text"){
            l();
        }else{
            var k = document.getElementsByClassName("player")[2].innerHTML.split("“");
            k[1] = k[1].substring(0, k[1].length - 1);
            var t = l(k[1]).replace(/ ;/g,"");
            console.log(t);
        }
        }catch(e){}
    }
    var words = {"un":"a ","hombre":"man ","una":"a ","mujer":"woman ","soy":"i am ","el":"the ","niño":"boy ","la":"the ","niña":"girl ",
                "a":"un ","man":"hombre ","a":"un ","woman":"mujer ","boy":"nino ","the":"el ","girl":"niña "};
    function l(g){
    var t ="" 
    if(typeof g !== "undefined")g.split(" ");
    if(typeof g === "undefined") t = g || document.getElementsByClassName("non-space");
    var trans = "";
    for(var i = 0;i<t.length;i++){
        if(typeof g !== "undefined"){
            var j = words[t[i]];
        }else{
            var j = words[t[i].innerHTML.toLowerCase()];
        }
        if(typeof j === "undefined") j = " ";
        trans+=j
    }
    if(typeof g === "undefined"){
        document.getElementById("text-input").value = trans;
    }else{
        trans+=";";
    }
    return trans;
}
alert("thanks for using my basics 1 bot");
