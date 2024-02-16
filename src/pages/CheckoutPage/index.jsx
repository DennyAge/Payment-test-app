import React, { useState } from 'react';

import CheckoutLayout from '../../layouts/CheckoutLayout';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Basket from './components/Basket';
import Footer from './components/Footer';

const CheckoutPage = () => {
  const [ activeTab, setActiveTab ] = useState( 'shipping' );
  const [ shippingData, setShippingData ] = useState( {
    email: '',
    subscribe: '',
    country: 'United States',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  } );

  const [ paymentData, setPaymentData ] = useState( {
    cardNumber: '',
    name: '',
    expiration: '',
    securityCode: '',
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingApartment: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    billingPhone: '',

    country: 'United States',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  } );

  const handleShippingDataChange = ( data ) => {
    setShippingData( data );
  };
  const handlePaymentDataChange = ( data ) => {
    setPaymentData( data );
  };

  return (
    <div>
      <CheckoutLayout
        activeTab={activeTab}
        leftSide={
          <div>
            { activeTab === 'shipping' && (
              <Shipping
                activeTab={activeTab}
                onChangePage={setActiveTab}
                checkoutData={shippingData}
                onChangeData={handleShippingDataChange}
              />
            ) }
            { activeTab === 'payment' && (
              <Payment
                activeTab={activeTab}
                onChangePage={setActiveTab}
                checkoutData={paymentData}
                onChangeData={handlePaymentDataChange}
              />
            ) }
          </div>
        }
        rightSide={ <Basket/> }
        footer={<Footer/>}
      />
    </div>
  );
};

export default CheckoutPage;