import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import fb from './fb.svg';
import ig from './ig.svg';
import twt from './twt.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

class App extends Component{
  render(){
  return (
    <React.Fragment>
       <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={ProductList}/>
          <Route path="/aboutUs" component={AboutUs}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
        <div className="socmed"><a  href="https://www.facebook.com/?ref=logo"><img src={fb} alt="store" className="fb"/></a></div>
        <div className="socmed1"><a  href="https://www.instagram.com/?hl=en"><img src={ig} alt="store" className="ig"/></a></div>
        <div className="socmed2"><a  href="https://twitter.com/home"><img src={twt} alt="store" className="twt"/></a></div>
        <div className="copyright">Copyright © 2018 PhoneShop</div>

    </React.Fragment>
  );
 }
}

export default App;
