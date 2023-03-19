import React from 'react'
import banner from "../Images/banner.png"
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>

            <img src={banner} alt="banner" className='home_image' />

            <div className="home_row">
                {/* product : id, title, price, rating, image */}
                <Product
                    id={9237}
                    title="Apple 2021 MacBook Pro (16-inch/41.05 cm, M1 Max chip with 10core CPU and 32core GPU, 32GB RAM, 1TB SSD) - Silver"
                    price={329900}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61Y30DpqRVL._SL1500_.jpg"
                />


                <Product
                    id={923127}
                    title="https://m.media-amazon.com/images/I/61XO4bORHUL._SX679_.jpg"
                    price={329900}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61XO4bORHUL._SX679_.jpg"
                />
            </div>

            <div className="home_row">
                {/* product : id, title, price, rating, image */}
                <Product
                    id={921237}
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa, compact size, loud sound & Bluetooth"
                    price={2599}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61IfOpQwIEL._SX679_.jpg"
                />


                <Product
                    id={98}
                    title="Global Grabbers Polyresin Sitting Buddha Idol Statue Showpiece for HomeDecor Decoration Gift Gifting Items-ORG_BLK-BS2-(00)"
                    price={399}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91FwdCVfcJL._SX679_.jpg"
                />

                <Product
                    id={1}
                    title="Apple Magic Keyboard with Touch ID and Numeric Keypad US English - Silver ((for Mac Silicon Running macOS 11.4 or Later)"
                    price={17500}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/71Yw0WfNfML._SX679_.jpg"
                />
            </div>

            <div className="home_row">
                {/* product : id, title, price, rating, image */}
                <Product
                    id={2}
                    title="Apple Thunderbolt 27-inch Monitor"
                    price={32182}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/61fWqr2ZqTL._SX679_.jpg"
                />

            </div>



        </div>
    )
}

export default Home
