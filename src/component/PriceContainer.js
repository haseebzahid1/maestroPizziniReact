import React from 'react';
import Price from "./Price";


const PriceContainer = (propsPrice) => {
    return (
        <div className='priceContainer'>
            <div className='container'>
            <div className='priceContainer__row'>
            
            <Price 
            imgPrice="/img/pizza1.png"
            heading="Pizza Margeritta"
            priceText="Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in."
            priceTotal="$39"
           
            />
            <Price 
            imgPrice="/img/pizza2.png"
            heading="Beer Pizza Crust"
            priceText="Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in."
            priceTotal="$25"
           
            />
            <Price 
            imgPrice="/img/pizza3.png"
            heading="Pizza Biscuit Bake"
            priceText="Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in."
            priceTotal="$49"
           
            />
            </div>

            <div className='priceContainer__row'>
            
            <Price 
            imgPrice="/img/pizza4.png"
            heading="Pizza Prosciutto"
            priceText="Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in."
            priceTotal="$25"
           
            />
            <Price 
            imgPrice="/img/pizza5.png"
            heading="Crazy Crust Pizza"
            priceText="Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in."
            priceTotal="$29"
           
            />
            <Price 
            imgPrice="/img/pizza6.png"
            heading="Low Carb Pizza"
            priceText="Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in."
            priceTotal="$49"
           
            />
            </div>
            </div>
        </div>
    );
}

export default PriceContainer;