import React from 'react'
import banner from "../Images/banner.png"
import "./Home.css"

function Home() {
    return (
        <div className='home'>

            <img src={banner} alt="banner" className='home_image' />

            {/* product : id, title, price, rating, image */}

        </div>
    )
}

export default Home
