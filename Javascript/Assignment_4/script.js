var arr = [
    { 
        team: 'CSK', 
        captain: 'Ruturaj Gaikwad',
        trophies: 5,
        primary: '#FFFF00', 
        secondary: '#0080FF', 
        fullName: 'Chennai Super Kings' 
    },
    { 
        team: 'RCB', 
        captain: 'Rajat Patidar',
        trophies: 0,
        primary: '#FF0000', 
        secondary: '#000000', 
        fullName: 'Royal Challengers Bengaluru' 
    },
    { 
        team: 'MI', 
        captain: 'Hardik Pandya',
        trophies: 5,
        primary: '#004BA0', 
        secondary: '#FFD700', 
        fullName: 'Mumbai Indians' 
    },
    { 
        team: 'KKR', 
        captain: 'Ajinkya Rahane',
        trophies: 3,
        primary: '#3B0082', 
        secondary: '#FFD700', 
        fullName: 'Kolkata Knight Riders' 
    },
    { 
        team: 'SRH', 
        captain: 'Pat Cummins',
        trophies: 1,
        primary: '#FF6600', 
        secondary: '#000000', 
        fullName: 'Sunrisers Hyderabad' 
    },
    { 
        team: 'PBKS', 
        captain: 'Shreyas Iyer',
        trophies: 0,
        primary: '#DC143C', 
        secondary: '#C0C0C0', 
        fullName: 'Punjab Kings' 
    },
    { 
        team: 'RR', 
        captain: 'Dhruv Jurel',
        trophies: 1,
        primary: '#FF69B4', 
        secondary: '#004BA0', 
        fullName: 'Rajasthan Royals' 
    },
    { 
        team: 'DC', 
        captain: 'KL Rahul',
        trophies: 0,
        primary: '#004BA0', 
        secondary: '#FF0000', 
        fullName: 'Delhi Capitals' 
    },
    { 
        team: 'GT', 
        captain: 'Shubman Gill',
        trophies: 1,
        primary: '#1C4A8B', 
        secondary: '#FF6600', 
        fullName: 'Gujarat Titans' 
    },
    { 
        team: 'LSG', 
        captain: 'Rishabh Pant',
        trophies: 0,
        primary: '#00A6E9', 
        secondary: '#FFD700', 
        fullName: 'Lucknow Super Giants' 
    }
];

var btn = document.getElementById('predictBtn');
var teamName = document.getElementById('teamName');
var main = document.querySelector('main');
var winnerCard = document.querySelector('.winner-card');
var captainName = document.getElementById('captainName');
var trophyCount = document.getElementById('trophyCount');

btn.addEventListener('click', function() {
    // Add animation
    winnerCard.classList.remove('animate');
    void winnerCard.offsetWidth;
    winnerCard.classList.add('animate');
    
    // Select random winner
    var winner = arr[Math.floor(Math.random() * arr.length)];
    
    // Update UI
    teamName.innerHTML = winner.team;
    captainName.innerHTML = `Captain: ${winner.captain}`;
    trophyCount.innerHTML = `🏆 ${winner.trophies} ${winner.trophies === 1 ? 'Title' : 'Titles'}`;
    
    teamName.style.backgroundColor = winner.secondary;
    teamName.style.color = winner.primary === '#FFFF00' ? '#000' : '#FFF';
    main.style.background = `linear-gradient(135deg, ${winner.primary} 0%, ${winner.secondary} 100%)`;
});
