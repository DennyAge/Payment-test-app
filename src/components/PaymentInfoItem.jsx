import React from 'react';
import PropTypes from 'prop-types';

const PaymentInfoItem = ( { label, text, value, onClick } ) => {
  return (
    <li className="d-flex w-100 flex-wrap justify-content-between">
      <span className="left-text">{label}</span>
      <span className="left-text">{value}</span>
      <button onClick={onClick}><span className='underline'>{text}</span></button>
    </li>
  );
};
PaymentInfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default PaymentInfoItem;