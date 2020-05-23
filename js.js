// const blueCircle = document.getElementsByClassName('st2-3')[0];
const body = document.getElementsByTagName('body')[0];





// blueCircle.addEventListener('touchstart', function () {
//     blueCircle.classList.toggle('big');
// })

document.addEventListener("keydown", function(){
    keypress(event)
})

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


document.getElementsByClassName('st4')[0].addEventListener('click', function(){
    document.getElementsByClassName('st4')[0].classList.toggle('active');
})

document.getElementsByClassName('st0-1')[0].addEventListener('click', function(){
    document.getElementsByClassName('st0-1')[0].classList.toggle('active');
})

document.getElementsByClassName('st2-4')[0].addEventListener('click', function(){
    document.getElementsByClassName('st2-4')[0].classList.toggle('active');
})

// Zo kan het ook als ik fancy wil zijn.
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