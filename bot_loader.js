(
function(){
  var chk = document.getElementsByTagName("h1")[0].innerHTML;
  var s= document.createElement("script");
  s.src="https://rawgit.com/teak1cd/duolingo-BOT/master/bot-BETA.js";
  switch(chk"){
    case "Basics 1":
    s.src="https://rawgit.com/teak1cd/duolingo-BOT/master/bot-BETA.js";
    break;
  }
  if(s.addEventListener){
    s.addEventListener("load",callback,false);
  }else if(s.readyState){
    s.onreadystatechange=callback;
  }
    document.body.appendChild(s);
  }
)()
