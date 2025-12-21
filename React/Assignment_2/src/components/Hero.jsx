import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="top">
            <h1>Unleash Your Inner Champion Today. <br /> All In One Place</h1>
            <p>
                Join the ultimeate tennis experience - where passion meets performance, 
                <br />  and everyswing brings you closer to victory.
            </p>
            <div className='start'>Start your own journey</div>
        </div>
        <div className="bottom">
            <div className="bottom-left">
                <p>Train with real performances. <br /> Get the real results</p>
                <div className='imgs'>
                    <img src="img1.avif" alt="" />
                    <img src="img2.avif" alt="" />
                    <img src="img3.avif" alt="" />
                </div>
            </div>
            <div className="bottom-right">
                <ul>
                    <li><a href="#">Instagram </a> <i className="ri-arrow-right-up-line"></i> </li>
                    <li><a href="#">Facebook  </a> <i className="ri-arrow-right-up-line"></i> </li>
                    <li><a href="#">Tiktok </a> <i className="ri-arrow-right-up-line"></i> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero