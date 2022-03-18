import React from 'react'
import './Hero.css'
import Crypto from '../assets/cryptoo.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Track your favorite cryptocurrencies with</p>
                    <h1>Cryptocurrency tracker</h1>
                    <p>A cryptocurrency tracker is a Webapp that allows you to manage your investments and keep track of how the value of your coins are changing</p>
                    <div className='input-container'>
                        <button className='btn'>Explore More</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
