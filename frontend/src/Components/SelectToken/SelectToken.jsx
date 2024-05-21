import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './SelectToken.css'; // CSS dosyasını içe aktarıyoruz

const SelectToken = ({ coins, handleSelectChange, selectedCoin, handleInputChange, inputValue }) => (
  <div style={{alignItems:"center", display:'flex', justifyContent:"column", width:"100%" }}>
    <Dropdown onSelect={(eventKey) => handleSelectChange(eventKey)} className="flex-grow-1" >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="d-flex align-items-center">
        {selectedCoin ? (
          <>
            <img 
              src={selectedCoin.image} 
              alt={selectedCoin.id} 
              style={{ width: '20px', height: '20px', marginRight: '10px' }} 
            />
            {selectedCoin.symbol.toUpperCase()}
          </>
        ) : (
          'Select Coin'
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {coins.map((coin, index) => (
          <Dropdown.Item key={index} eventKey={coin.id} className="d-flex align-items-center">
            <img src={coin.image} alt={coin.id} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            {coin.symbol.toUpperCase()}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default SelectToken;
