import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <h1>Horizon Courts</h1>
        </div>
        <div className="center">
            <ul>
                <li className='about'><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Coaches</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Contacts</a></li>
                
            </ul>
        </div>
        <div className="right">
            <div>Book Now</div>
            <div><i className="ri-arrow-right-up-line"></i></div>
        </div>
    </nav>
  )
}

export default Navbar