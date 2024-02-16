import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Basket = ( { basketData, onChangeData } ) => {
  const [ code, setCode ] = useState( '' );
  return (
    <div >
      <div className="right-side-top w-100 d-block">
        <div className="product-thumb">
          <span className="cart-item">{basketData.product_count}</span>
          <img src="/images/product.jpeg" alt="" className="img-fluid" />
        </div>
        <div className="product-name w-100 d-block">
          {basketData.product_name}
        </div>
        <div className="product-supply">
          {basketData.product_supply}
        </div>
        <div className="product-price">
          <span>${basketData.old_price}</span>
            ${basketData.product_price}
        </div>
      </div>
      <div className="discount-box w-100 d-block">
        <input
          type="text"
          className="form-control checkout"
          placeholder="Discount code"
          value={code}
          onChange={( e ) => setCode( e.target.value )}
        />
        <button onClick={() => onChangeData( { ...basketData, discount_code: code } )}>
            Apply
        </button>
      </div>
      <div className="discount-code-btn-row">
        <ul>
          <li>
            <button className="discount-code-btn">
              {basketData.discount}
            </button>
            <span className="code-close-btn">x</span>
          </li>
        </ul>
      </div>
      <div className="total-box-row w-100 d-block">
        <div className="data-row w-100 d-flex flex-wrap justify-content-between">
          <span>Subtotal</span>
          <span>${basketData.subtotal}</span>
        </div>
        <div className="data-row w-100 d-flex flex-wrap justify-content-between">
          <span>Shipping</span>
          <span>{basketData.shipping}</span>
        </div>
        <div className="data-row w-100 d-flex flex-wrap justify-content-between total">
          <span>Total</span>
          <span>USD ${basketData.total}</span>
        </div>
      </div>
    </div>
  );
};
Basket.propTypes = {
  onChangeData: PropTypes.func,
  basketData: PropTypes.object,
};

export default Basket;