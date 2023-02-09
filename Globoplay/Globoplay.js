// Directly modify the DOM
javascript:void(document.querySelector(".media-control-panel__front-layer").style.display='none')
javascript:void(document.querySelector(".media-control-panel__front-layer").style.display='block')


// Declaring separated functions
function hidePanel() {document.querySelector("div.media-control-panel__front-layer").style.display='none'}
function showPanel() {document.querySelector("div.media-control-panel__front-layer").style.display='block'}


// Fetching functions and calling one
javascript:if(typeof hidePanel!=='function'){window.s0=document.body.appendChild(document.createElement('script'));s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';s0.onload=()=>hidePanel()}else{hidePanel()}

// if(typeof hidePanel!=='function'){
//    window.s0=document.body.appendChild(document.createElement('script'));
//    s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';
//    s0.onload=()=>hidePanel()
// }else{hidePanel()}

javascript:if(typeof showPanel!=='function'){window.s0=document.body.appendChild(document.createElement('script'));s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';s0.onload=()=>showPanel()}else{showPanel()}
// if(typeof showPanel!=='function'){
//    window.s0=document.body.appendChild(document.createElement('script'));
//    s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';
//    s0.onload=()=>showPanel()
// }else{showPanel()}

// Only calling showPanel when the hider was already fetched
javascript:try{showPanel()}catch(error){}


// Declaring function with parameters
let objOpt={true:'block',false:'none'}
function displaySwitch(op) {
   document.querySelector(".media-control-panel__front-layer").style.display=objOpt[op]
}
// Using only one function with arguments
javascript:if(typeof displaySwitch!=='function'){window.s0=document.body.appendChild(document.createElement('script'));s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';s0.onload=()=>displaySwitch(false)}else{displaySwitch(false)}
// if(typeof displaySwitch!=='function'){
//    window.s0=document.body.appendChild(document.createElement('script'));
//    s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';
//    s0.onload=()=>displaySwitch(false)
// }else{displaySwitch(false)}

javascript:if(typeof displaySwitch!=='function'){window.s0=document.body.appendChild(document.createElement('script'));s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';s0.onload=()=>displaySwitch(true)}else{displaySwitch(true)}
// if(typeof displaySwitch!=='function'){
//    window.s0=document.body.appendChild(document.createElement('script'));
//    s0.src='https://cdn.jsdelivr.net/gh/RSPadilha/bookmarklets@main/Globoplay/Globoplay.js';
//    s0.onload=()=>displaySwitch(true)
// }else{displaySwitch(true)}