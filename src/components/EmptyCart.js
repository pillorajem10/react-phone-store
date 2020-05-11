import React from 'react';
import{Link} from 'react-router-dom';
import {ButtonContainers} from "./Button";

export default function EmptyCart(){
  return(
    <div className="container mt-5">
     <div className="row">
      <div className="col-10 mx-auto text-center text-title">
      <h1>Your cart is curently empty</h1>
      <div className="col-10 mx-auto text-center text-title">
      <Link to="/products">
      <ButtonContainers>
       Continue Shopping
      </ButtonContainers>
      </Link>
      </div>
      </div>
     </div>
    </div>
  )
}
