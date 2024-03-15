import React from 'react'
import './Navbar.css'
import logo from '../Assest/logoblue.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="lefth">
            <img src={logo} alt="" />
            <Link to="/"><div className="headerItem">Swap</div></Link>
            <div className="headerItem">Tokens</div>
        </div>
        <div className="righth">
            <div className="headerItem">Ethereum</div>
            <div className="headerItem"><button>Connect</button></div>
        </div>
    </div>
  )
}

export default Navbar