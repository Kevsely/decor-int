//Our work
//Changing the background color of the selected one
var imgCaption_s = document.getElementsByClassName("img-caption");
var selected_item = 0;
imgCaption_s[0].addEventListener('click', function() {changeElmtBgColor(0)})
imgCaption_s[1].addEventListener('click', function() {changeElmtBgColor(1)})
imgCaption_s[2].addEventListener('click', function() {changeElmtBgColor(2)})
imgCaption_s[3].addEventListener('click', function() {changeElmtBgColor(3)})

function changeElmtBgColor(index) {
    if(index<0) index=3;
    if(index>3) index=0;
    selected_item = index;

    for(let i=0; i<imgCaption_s.length; i++) {
        if (i===index) imgCaption_s[i].classList.add("selected")
        else imgCaption_s[i].classList.remove("selected")
    }
}

//Changing the bg color depending on prev and next buttons
var prev_btn = document.getElementsByClassName("carousel-control-prev")[0]
var next_btn = document.getElementsByClassName("carousel-control-next")[0]

prev_btn.addEventListener('click', function() {changeElmtBgColor_control(false)})
next_btn.addEventListener('click', function() {changeElmtBgColor_control(true)})

function changeElmtBgColor_control(button) {
    if(button) //Next button
        changeElmtBgColor(selected_item+1)
    else //Prev button
        changeElmtBgColor(selected_item-1)
}


//Testimony vertical slider
var cards = Array.from(document.querySelectorAll('#card-slider .slider-item'));
startAnim(cards);

function startAnim(array) {
    if (array.length >= 4) {
        TweenMax.fromTo(array[0], 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) });

        TweenMax.fromTo(array[1], 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });

        TweenMax.to(array[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });

        TweenMax.fromTo(array[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut },);
    } else {
        document.getElementById('card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function () {
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array);
    }, 3000)
}

