import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>CRYPTO</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='https://cryptowebapp024.netlify.app/'>Tracker</a>
                    </li>
                    <li>
                        <a href='https://wallet-demo-react.netlify.app/'>Wallet</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'><a className ='Wallet-btn' href='https://wallet-demo-react.netlify.app/'>Go to crypto Wallet</a></button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
