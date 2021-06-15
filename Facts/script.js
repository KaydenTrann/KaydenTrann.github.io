document.querySelector('#q1').f1.addEventListener("click", FactOne);

function FactOne() {
    document.querySelector('#q2').innerHTML = "Coyotes outpace roadrunners by 23 mph.";
    document.querySelector('#q2').style.color = "white";
    document.querySelector('#image').src = "images/coyote.jpg";
    document.querySelector('#image').style.visibility = "visible";
}

document.querySelector('#q1').f2.addEventListener("click", FactTwo);

function FactTwo() {
    document.querySelector('#q2').innerHTML = "High heels were originally worn by men.";
    document.querySelector('#q2').style.color = "white";
    document.querySelector('#image').src = "images/heels.jpg";
    document.querySelector('#image').style.visibility = "visible";
}

document.querySelector('#q1').f3.addEventListener("click", FactThree);

function FactThree() {
    document.querySelector('#q2').innerHTML = "Stop signs used to be yellow.";
    document.querySelector('#q2').style.color = "white";
    document.querySelector('#image').src = "images/newyork.jpg";
    document.querySelector('#image').style.visibility = "visible";
}

document.querySelector('#q1').f4.addEventListener("click", FactFour);

function FactFour() {
    document.querySelector('#q2').innerHTML = "New York was briefly named New Orange.";
    document.querySelector('#q2').style.color = "white";
    document.querySelector('#image').src = "images/stop.jpg";
    document.querySelector('#image').style.visibility = "visible";
}

document.querySelector('#q1').f5.addEventListener("click", FactFive);

function FactFive() {
    document.querySelector('#q2').innerHTML = "Nintendo was founded in 1889. Before it sold video games, the Japanese company specialized in playing cards.";
    document.querySelector('#q2').style.color = "white";
    document.querySelector('#image').src = "images/nintendo.jpg";
    document.querySelector('#image').style.visibility = "visible";
}