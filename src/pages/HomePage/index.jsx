import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate( '/checkout' );
  };
  return (
    <div className='container'>
      <div className="btn-row w-100 d-flex justify-content-end">
        <button
          type="submit"
          className="checkout-btn"
          onClick={goToCheckout}
        >
          Go to checkout page
        </button>
      </div>
    </div>
  );
};

export default HomePage;