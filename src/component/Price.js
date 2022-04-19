import React from 'react';
import '../css/Price.css'

const Price = (propsPrice) => {
    return (
        <div className='price'>
            <div className='Price__card'>
              <div className="price__img">
                <img src={propsPrice.imgPrice} alt="pizza" />
              </div>
              <h1 className="price__heading">{propsPrice.heading}</h1>
              <p className="price__text">
               {propsPrice.priceText}
              </p>
              <p className="price_rs">{propsPrice.priceTotal}</p>
           
         
            </div>
        </div>
    );

}

export default Price;