const reels = [
  {
    username: "rose_marley",
    likeCount: 12400,
    isLiked: false,
    commentCount: 320,
    caption: "A calm energy with a voice that lights up any room.",
    video: "./videos/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1545912453-3d32e20f72bf",
    shareCount: 88,
    isFollowed: false
  },
  {
    username: "travelwithsam",
    likeCount: 52500,
    isLiked: true,
    commentCount: 1400,
    caption: "Morning hike through the Italian mountains 🏔️",
    video: "./videos/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 260,
    isFollowed: true
  },
  {
    username: "daily_jess",
    likeCount: 9800,
    isLiked: false,
    commentCount: 210,
    caption: "Sunset vibes and peaceful thoughts 🌅",
    video: "./videos/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
    shareCount: 41,
    isFollowed: false
  },
  {
    username: "chef_aaron",
    likeCount: 67400,
    isLiked: false,
    commentCount: 3300,
    caption: "Crispy fried chicken recipe you’ll want to save 🍗🔥",
    video: "./videos/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 520,
    isFollowed: true
  },
  {
    username: "marie_reads",
    likeCount: 4300,
    isLiked: false,
    commentCount: 88,
    caption: "Books that changed my life 📚✨",
    video: "./videos/video5.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 10,
    isFollowed: false
  },
  {
    username: "urban_vibes",
    likeCount: 28900,
    isLiked: true,
    commentCount: 930,
    caption: "City lights hitting different tonight 🌃",
    video: "./videos/video6.mp4",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    shareCount: 145,
    isFollowed: true
  },
  {
    username: "fitwithleo",
    likeCount: 81200,
    isLiked: false,
    commentCount: 5100,
    caption: "10-minute morning workout that burns 🔥",
    video: "./videos/video7.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 670,
    isFollowed: true
  },
  {
    username: "artbyluna",
    likeCount: 7200,
    isLiked: true,
    commentCount: 300,
    caption: "Painting galaxies with just a toothbrush ✨🌌",
    video: "./videos/video8.mp4",
    userProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    shareCount: 55,
    isFollowed: false
  },
  {
    username: "henry_shots",
    likeCount: 54000,
    isLiked: false,
    commentCount: 1700,
    caption: "Captured this moment at 1AM… worth it 📸",
    video: "./videos/video9.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "musicbyzara",
    likeCount: 20100,
    isLiked: true,
    commentCount: 8500,
    caption: "New cover out now! Hope you feel this one 🎶❤️",
    video: "./videos/video10.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 950,
    isFollowed: false
  }
];

var  sum = 0;
reels.forEach(function (elem) {
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked 
                                ? '<i class="love ri-heart-3-fill"></i>' 
                                : '<i class="ri-heart-3-line"></i>'
                            }</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

var allReels = document.querySelector(".all-reels")

allReels.innerHTML = sum