// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       mykytabashenko.github.io
// @match        https://www.instagram.com/your_name/
// @grant        none
// ==/UserScript==

//change match
//paste code only bellow

var arraynotunfollow = [//array with names you don`t wanna unfollow


"account1",
"account2"

]

var countering = 0;
var followingorunfollow = 0;


function scrolling(){//scroll down for geting all following
setTimeout(function() {
if(countering < 10){//if folowing more then 100 10++
follow[0].scrollTo(0,900000);
    countering++;
    scrolling();
}else{
    follow[0].scrollTo(0,900000);
    program();
return;
}

},400);
}


function podpisochka(counter) {

//console.log(`podpiska na ${counter} element`)
setTimeout(function() {
arraywithunfollow[counter++].childNodes[0].childNodes[1].childNodes[0].click();
    if(counter<arraywithunfollow.length )
   podpisochka(counter);
    else{
    setTimeout(function() {
 startofera();
},900000);// 15 minut otpiska
    }

},90000);// 1.5 min

}


function atipisochka(counter) {

//console.log(`atpiska ot ${counter} element`)
setTimeout(function() {
arraywithunfollow[counter++].childNodes[0].childNodes[1].childNodes[0].click();
    var button2 = document.getElementsByClassName("-Cab_");
   button2[0].click();
    if(counter<arraywithunfollow.length)
    atipisochka(counter);
    else{
    setTimeout(function() {
 startofera();
},150000);// 2.5 minut podpiska
    }
},30000);// 30sec interval otpiski

}


function startofera(){
followingorunfollow ;
   if(arraywithunfollow[0].childNodes[0].childNodes[1].childNodes[0].innerHTML == "Following" ){
      // console.log("atpiska");
       atipisochka(0);
   }
    else if(arraywithunfollow[0].childNodes[0].childNodes[1].childNodes[0].innerHTML == "Follow"){
//   console.log("podpiska");
       podpisochka(0);
    }

}



function program(){
var allfollowing = document.getElementsByClassName("wo9IH");

    var names = document.getElementsByClassName("notranslate");
    arraywithunfollow = [];
    for(var i = 0; i < names.length; i++){
    if(arraynotunfollow.indexOf(names[i].title) == -1){
arraywithunfollow.push(allfollowing[i]);
    }
    }

startofera();
}


function scrolldown(){setTimeout(function(){
follow = document.getElementsByClassName("isgrP");
var ulscroling = document.getElementsByClassName("jSC57");
follow[0].scrollTo(0,90000)
scrolling();


},500);

}

function start(){setTimeout(function() {
var following = document.getElementsByClassName("-nal3");
    following[2].click();
    scrolldown();
        },1000);
               }
 start();