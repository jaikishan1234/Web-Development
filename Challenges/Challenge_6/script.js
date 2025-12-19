// Adds a subtle 3D hover effect to the main card
const card = document.querySelector('.glass-card');

document.addEventListener('mousemove', (e) => {
    // Only apply if screen is wide (desktop)
    if (window.innerWidth > 900) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        if(card) {
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            card.style.transition = 'transform 0.1s ease';
        }
    }
});