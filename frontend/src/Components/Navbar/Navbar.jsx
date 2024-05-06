import React from 'react'
import './Navbar.css'
import logo from '../Assest/logoblue.png'
import { Link } from 'react-router-dom'
import WSCoin from '../WSCoin/WSCoin'
import ConnectWallet from '../ConnectWallet/ConnectWallet' // ConnectWallet componentini import edin

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="lefth">
            <img src={logo} alt="" />
            <Link to="/"><div className="headerItem">Swap</div></Link>
            <div className="headerItem">Tokens</div>
        </div>
        <div className="righth">
            <div><WSCoin /></div>
            <div className="headerItem"><ConnectWallet /></div>
        </div>
    </div>
  )
}

export default Navbar
