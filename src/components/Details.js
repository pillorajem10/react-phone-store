import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer,ButtonContainers} from './Button';
export default class Details extends Component{
  render(){
    return (
    <ProductConsumer>
      {value=>{
      const {id,company,img,info,price,title,inCart} = value.detailProduct;
      return(
        <div className="container py-5">
         {/* title */}
            <div className="row">
             <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>{title}</h1>
             </div>
            </div>
         {/*end of title */}
         {/*product info*/}
         <div className="row ">
           <div className="col-10 mx-auto col-md-6 my-3">
         <img src={img} className=" img-fluid" alt="product"/>
           </div>
           {/*product text*/}
           <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model:{title}</h2>
            <h4 className="text-blacktet-title text-uppercase  mt-3 mb-2">
            made by:<span className=" text-white text-uppercase">{company}</span></h4>
            <h4 className="text-yellow">
              <strong>
                 price:<span>₱{price}</span>
               </strong>
            </h4>
            <h4>
              <p className=" text-capitalize font-weight-bold mt-3 mb-0">
               Information of the product:
              </p>
              <p className="text-white">
                {info}
              </p>
              {/*buttons*/}
            <div>
              <Link to='/products'>
              <ButtonContainers>
               back to products
              </ButtonContainers>
              </Link>
              <ButtonContainer cart
              disabled={inCart?true:false}
              onClick={()=>{
                value.addToCart(id);
                value.openModal(id);
              }}
              >
               {inCart? "inCart":"add to cart"}
              </ButtonContainer>
            </div>
            </h4>
           </div>
         </div>
        </div>
      )
      }}
    </ProductConsumer>
    );
  }
}
