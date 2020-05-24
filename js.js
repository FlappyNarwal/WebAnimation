// const blueCircle = document.getElementsByClassName('st2-3')[0];
const body = document.getElementsByTagName('body')[0];





// blueCircle.addEventListener('touchstart', function () {
//     blueCircle.classList.toggle('big');
// })

//
document.addEventListener("keydown", function(){
    keypress(event)
})

//Make stuff change on keypress events bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
function keypress(event){
    var x = event.keyCode;
    if (x == 80) {
        colorChange("purple")   
    }
    if (x == 71){
        colorChange("green")
    }
    if (x == 89) {
        colorChange("yellow")
    }
}

function colorChange(color){
    body.className = '';
    body.classList.add(color)
}

//make objects clickable bron: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.getElementsByClassName('st4')[0].addEventListener('click', function(){
    document.getElementsByClassName('st4')[0].classList.toggle('active');
})

document.getElementsByClassName('st0-1')[0].addEventListener('click', function(){
    document.getElementsByClassName('st0-1')[0].classList.toggle('active');
})

document.getElementsByClassName('st2-4')[0].addEventListener('click', function(){
    document.getElementsByClassName('st2-4')[0].classList.toggle('active');
})

document.getElementsByClassName('cloud')[0].addEventListener('click', function(){
    document.getElementsByClassName('cloud')[0].classList.toggle('active');
})

document.getElementsByClassName('st2-3')[0].addEventListener('click', function(){
    document.getElementsByClassName('st2-3')[0].classList.toggle('active');
})

document.getElementsByClassName('st3-2')[0].addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('active');
    document.getElementsByClassName('st4')[0].classList.toggle('active3');
})

document.getElementsByClassName('st3-1')[0].addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('active2');
    document.getElementsByClassName('st4')[0].classList.toggle('active4');
    
})
// How to play audio with js bron: https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
document.getElementsByClassName('cloud')[0].addEventListener('click', musicPlay);
document.getElementsByClassName('cloud')[0].addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('active5');

    
})

function musicPlay(){
    var audio = new Audio ("./sounds/muziek.mp3")
    audio.play();
}
// Zo kan het ook als ik fancy wil zijn volgens Ramon Meijers, ik kwam hier niet helemaal uit dus vandaar dat ik het uitendelijk niet meer heb gebruikt.
// document.addEventListener('click', function(){
//     clicked(event.target)

// })

// function clicked(element){
//     let elementClass = element.className.baseVal;
//     console.log(element.className)

//     removeActive()

//     if(elementClass.includes('st')){
//         element.classList.add('active')
//     }
// }

// function removeActive(){
//     let active = document.getElementsByClassName('active');

//     console.log(active)
//     for(let i =0; i < active.length; i++){
//         active[i].classList.remove('active');
//     }
// }