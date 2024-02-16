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
  const [ basketData, setBasketData ] = useState( {
    product_count: 1,
    product_name: 'Semaglutide',
    product_supply: '1 Month Supply',
    old_price: '395',
    product_price: '99.00',
    discount: '75%OFF',
    discount_code: '',
    subtotal: '99.00',
    shipping: 'Free',
    total: '99.00',

  } );

  const handleShippingDataChange = ( data ) => {
    setShippingData( data );
  };
  const handleBasketDataChange = ( data ) => {
    setBasketData( data );
  };
  const handlePaymentDataChange = ( data ) => {
    setPaymentData( data );
  };
  const handleSendPayment = (  ) => {
    const formData = {
      shippingData: shippingData,
      paymentData: paymentData,
      basketData: basketData
    };
    console.log( JSON.stringify( formData ) );

    alert( JSON.stringify( formData ) );
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
                shippingData={shippingData}
                onChangeData={handleShippingDataChange}
              />
            ) }
            { activeTab === 'payment' && (
              <Payment
                activeTab={activeTab}
                onChangePage={setActiveTab}
                paymentData={paymentData}
                shippingData={shippingData}
                onChangeData={handlePaymentDataChange}
                handleSendPayment={handleSendPayment}
              />
            ) }
          </div>
        }
        rightSide={ <Basket basketData={basketData} onChangeData={handleBasketDataChange}/> }
        footer={<Footer/>}
      />
    </div>
  );
};

export default CheckoutPage;