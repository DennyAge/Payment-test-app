import React from 'react';
import PropTypes from 'prop-types';

const PaymentInfoItem = ( { label, text } ) => {
  return (
    <li className="d-flex w-100 flex-wrap justify-content-between">
      <span className="left-text">{label}</span>
      <span>
        <a href="#">{text}</a>
      </span>
    </li>
  );
};
PaymentInfoItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string
};

export default PaymentInfoItem;