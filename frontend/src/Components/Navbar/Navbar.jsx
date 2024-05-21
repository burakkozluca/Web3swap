// import React from 'react'
// import './Navbar.css'
// import logo from '../Assest/logoblue.png'
// import { Link } from 'react-router-dom'
// import WSCoin from '../WSCoin/WSCoin'
// import ConnectWallet from '../ConnectWallet/ConnectWallet' // ConnectWallet componentini import edin

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <div className="lefth">
//             <img src={logo} alt="" />
//             <Link to="/"><div className="headerItem">Swap</div></Link>
//             <div className="headerItem">Tokens</div>
//         </div>
//         <div className="righth">
//             <div><WSCoin /></div>
//             <div className="headerItem"><ConnectWallet /></div>
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import './Navbar.css';
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import WSCoin from '../WSCoin/WSCoin'
import logo from '../Assest/logoblue.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <div className="navbar-links"> <a href="#home">BABU</a></div>
      </div>
      <div className="navbar-links">
        <Link to="/chat"><a>Chat</a></Link>
        <a href="#trade">Trade</a>
        <div className="dropdown">
          <a href="#pool">Pool</a>
          <div className="dropdown-content">
            <a href="#pool1">Pool 1</a>
            <a href="#pool2">Pool 2</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#explore">Explore</a>
          <div className="dropdown-content">
            <a href="#explore1">Explore 1</a>
            <a href="#explore2">Explore 2</a>
          </div>
        </div>
        <a href="#launch">Launch</a>
        <a href="#portfolio">Portfolio</a>
        <div className="dropdown">
          <a href="#bridge">Bridge</a>
          <div className="dropdown-content">
            <a href="#bridge1">Bridge 1</a>
            <a href="#bridge2">Bridge 2</a>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <span className="navbar-balance"><div><WSCoin /></div></span>
        <div className="headerItem"><ConnectWallet /></div>
      </div>
    </nav>
  );
};

export default Navbar;
