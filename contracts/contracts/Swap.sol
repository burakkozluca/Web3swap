// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenSwap {
    address public token1;
    address public token2;
    uint256 public rateToken1ToToken2;

    constructor(address _token1, address _token2, uint256 _rateToken1ToToken2) {
        token1 = _token1;
        token2 = _token2;
        rateToken1ToToken2 = _rateToken1ToToken2;
    }

    function swapToken1ForToken2(uint256 _amountToken1) public {
        uint256 amountToken2 = _amountToken1 * rateToken1ToToken2;
        IERC20(token1).transferFrom(msg.sender, address(this), _amountToken1);
        IERC20(token2).transfer(msg.sender, amountToken2);
    }

    function swapToken2ForToken1(uint256 _amountToken2) public {
        uint256 amountToken1 = _amountToken2 / rateToken1ToToken2;
        IERC20(token2).transferFrom(msg.sender, address(this), _amountToken2);
        IERC20(token1).transfer(msg.sender, amountToken1);
    }
}
