import React from 'react'
import './Signup.css'

import Crypto from '../assets/cryptoresponsive.PNG'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Mobile Responsive Design</h2>
                    <p>Track cryptocurrencies prices with ease on your phone with friendly user interface.</p>
                    
                </div>

            </div>
        </div>
    )
}

export default Signup
