var btn = document.querySelector('button')
var main = document.querySelector('main')

const arr = [
  "Small steps every day add up to big changes.",
  "Believe you can, and you're halfway there.",
  "Dream big. Start small. Act now.",
  "Your only limit is you.",
  "Consistency beats motivation.",
  "Great things take time—keep going.",
  "Focus on progress, not perfection.",
  "Success is built on the days you don’t feel like doing it.",
  "Do something today that your future self will thank you for.",
  "Stay patient. Trust your journey.",
  "Push yourself, no one is going to do it for you.",
  "Hard work beats talent when talent doesn’t work hard.",
  "You don’t have to be perfect to be amazing.",
  "Discipline is choosing what you want most over what you want now.",
  "Fall seven times, stand up eight.",
  "The best way to predict the future is to create it.",
  "You are stronger than you think.",
  "If it matters to you, you’ll make time.",
  "Improve 1% every day. That’s enough.",
  "Nothing changes if nothing changes."
];


btn.addEventListener('click',function(){    

    var h1 = document.createElement('h1')
    
    var x = Math.random()*80
    var y = Math.random()*80
    var rot = Math.random()*360
    var scl = Math.random()*3
    var a = Math.floor(Math.random()*arr.length)
    var x1 = Math.floor(Math.random()*256)
    var x2 = Math.floor(Math.random()*256)
    var x3 = Math.floor(Math.random()*256)

    h1.innerHTML = arr[a]

    h1.style.position = 'absolute'

    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = rot+'deg'
    h1.style.scale = scl
    h1.style.color = `rgb(${x1} , ${x2}, ${x3})`
    
    main.appendChild(h1)
})

