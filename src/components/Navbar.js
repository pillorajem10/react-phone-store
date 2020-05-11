import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer,ButtonContainerss} from "./Button";
import shop from '../shop.svg';
import AboutUs from './AboutUs';

export default class Navbar extends Component{
  render(){
    return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark">
    {/*
    https://www.iconfinder.com/icons/1243689/call_phone_icon
    Creative Commons (Attribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk */}
    <Link to='/'>
  <img src={logo} alt="store" className="navbar"/>
    </Link>
       <ul className="navbar-nav align-items-center">
       <div className="title">
       PhoneShop
       </div>
          <li className="nav-item">
          <Link to="/aboutUs" className="nav">
             About Us
          </Link>
            <Link to="/products" className="nav">
               Shop
            </Link>
          </li>
       </ul>
       <Link to='/cart' className="ml-auto">
         <ButtonContainerss>
         <span className="mr-2">
            <i><img src={shop} alt="store" className="navbar-brand"/></i>
             My cart
          </span>
         </ButtonContainerss>
       </Link>
    </NavWrapper>
    );
  }
}


const NavWrapper = styled.nav`
background:black;
.nav-link{
   color:black;
   font-size:1.5rem;
}
.nav-link:hover{
  color:var(--mainWhite);
  background:white;
}
`;
