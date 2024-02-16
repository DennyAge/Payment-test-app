import React from 'react';
import PropTypes from 'prop-types';

const CheckoutLayout = ( { activeTab, rightSide, leftSide, footer } ) => {
  return (
    <div id="wrapper" className="w-100 d-block">
      <div className="container small-container">
        <div className="mobile-data w-100 d-block d-lg-none">
          <div className="checkout-logo w-100 d-block">
            <img src="/images/logo-blue.png" alt="" className="m-auto d-block" />
          </div>
          <div className="cus-breadcrumb w-100 d-block">
            <ul>
              <li className={`${ activeTab === 'shipping' ? 'active' : '' }`}>Shipping</li>
              <li className={`${ activeTab === 'payment' ? 'active' : '' }`}>Payment</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap w-100">
          <div className="right-side flex-auto order-lg-1">
            {rightSide}
          </div>
          <div className="left-side flex-auto order-lg-0">
            {leftSide}
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

CheckoutLayout.propTypes = {
  activeTab: PropTypes.string.isRequired,
  rightSide: PropTypes.element.isRequired,
  leftSide: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
};

export default CheckoutLayout;
