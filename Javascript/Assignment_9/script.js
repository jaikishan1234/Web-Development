// Auto-focus body so keyboard works immediately
window.addEventListener("load", () => {
    document.body.focus();
});

// AUDIO FILES (28–39)
var w1 = new Audio('./sounds/28.mp3')
var w2 = new Audio('./sounds/29.mp3')
var w3 = new Audio('./sounds/30.mp3')
var w4 = new Audio('./sounds/31.mp3')
var w5 = new Audio('./sounds/32.mp3')
var w6 = new Audio('./sounds/33.mp3')
var w7 = new Audio('./sounds/34.mp3')

var b1 = new Audio('./sounds/35.mp3')
var b2 = new Audio('./sounds/36.mp3')
var b3 = new Audio('./sounds/37.mp3')
var b4 = new Audio('./sounds/38.mp3')
var b5 = new Audio('./sounds/39.mp3')

// MOUSE EVENTS
document.querySelector('.wk1').onclick = () => w1.play()
document.querySelector('.wk2').onclick = () => w2.play()
document.querySelector('.wk3').onclick = () => w3.play()
document.querySelector('.wk4').onclick = () => w4.play()
document.querySelector('.wk5').onclick = () => w5.play()
document.querySelector('.wk6').onclick = () => w6.play()
document.querySelector('.wk7').onclick = () => w7.play()

document.querySelector('.bk1').onclick = () => b1.play()
document.querySelector('.bk2').onclick = () => b2.play()
document.querySelector('.bk3').onclick = () => b3.play()
document.querySelector('.bk4').onclick = () => b4.play()
document.querySelector('.bk5').onclick = () => b5.play()

// KEYBOARD EVENTS
document.body.addEventListener('keydown', function(e) {
    if (e.code === "KeyA") w1.play();   // A
    if (e.code === "KeyS") w2.play();   // B
    if (e.code === "KeyD") w3.play();   // C
    if (e.code === "KeyF") w4.play();   // D
    if (e.code === "KeyG") w5.play();   // E
    if (e.code === "KeyH") w6.play();   // F
    if (e.code === "KeyJ") w7.play();   // G

    if (e.code === "KeyW") b1.play();   // A#
    if (e.code === "KeyE") b2.play();   // C#
    if (e.code === "KeyR") b3.play();   // D#
    if (e.code === "KeyT") b4.play();   // F#
    if (e.code === "KeyY") b5.play();   // G#
});