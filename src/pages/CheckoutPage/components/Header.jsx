import React from 'react';
import PropTypes from 'prop-types';

const Header = ( { activeTab } ) => {
  return (
    <div>
      <div className="checkout-logo w-100 d-none d-lg-block">
        <img src="/images/logo-blue.png" alt="" /></div>
      <div className="cus-breadcrumb w-100 d-none d-lg-block">
        <ul>
          <li className={`${ activeTab === 'shipping' ? 'active' : '' }`}>Shipping</li>
          <li className={`${ activeTab === 'payment' ? 'active' : '' }`}>Payment</li>
        </ul>
      </div>
    </div>
  );
};
Header.propTypes = {
  activeTab: PropTypes.string,
};
export default Header;