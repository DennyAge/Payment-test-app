import React, { useState } from 'react';
import { Formik, Form, Field  } from 'formik';
import PropTypes from 'prop-types';

import Header from './Header';
import AddressForm from '../../../components/AddressForm';
import CardForm from '../../../components/CardForm';
import PaymentInfoItem from '../../../components/PaymentInfoItem';
import ChevronLeftIcon from '../../../components/Icons/ChevronLeftIcon';

const Payment = ( { activeTab, onChangePage, checkoutData, onChangeData } ) => {
  const initialValues = {
    cardNumber: checkoutData.cardNumber || '',
    name: checkoutData.name || '',
    expiration: checkoutData.expiration || '',
    securityCode: checkoutData.securityCode || '',
    billingFirstName: checkoutData.billingFirstName || '',
    billingLastName: checkoutData.billingLastName || '',
    billingAddress: checkoutData.billingAddress || '',
    billingApartment: checkoutData.billingApartment || '',
    billingCity: checkoutData.billingCity || '',
    billingState: checkoutData.billingState || '',
    billingZipCode: checkoutData.billingZipCode || '',
    billingPhone: checkoutData.billingPhone || '',
    country: checkoutData.country || '',
    firstName: checkoutData.firstName || '',
    lastName: checkoutData.lastName || '',
    address: checkoutData.address || '',
    apartment: checkoutData.apartment || '',
    city: checkoutData.city || '',
    state: checkoutData.state || '',
    zipCode: checkoutData.zipCode || '',
    phone: checkoutData.phone || '',
  };

  const initialBillingAddress = checkoutData.billingAddress || 'same';
  const [ differentBilling, setDifferentBilling ] = useState( initialBillingAddress === 'different' );

  const handleBillingChange = ( formik, event ) => {
    const newValue = event.target.value === 'different';
    setDifferentBilling( newValue );
    formik.setFieldValue( 'billingAddress', newValue ? 'different' : 'same' );
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={( values ) => {
        onChangeData( values );
      }}
      onSubmit={( values, { setSubmitting } ) => {
        setSubmitting( false );
        alert( 'Payment send' );
        // onChangePage('confirmation');
      }}
    >
      {formik => (
        <Form>
          <Header activeTab={activeTab} />
          <div className="payment-top w-100 d-block">
            <ul>
              <PaymentInfoItem label="Contact" text="Change" />
              <PaymentInfoItem label="Ship to" text="Change" />
              <PaymentInfoItem label="Shipping method" text="Standard" />
            </ul>
          </div>
          <div className="payment-card-section w-100 d-block">
            <div className="checkout-title flex-auto">Payment</div>
            <p>All transactions are secure and encrypted.</p>
            <div className="payment-card-box w-100 d-block">
              <div className="payment-card-box-top w-100 d-flex flex-wrap justify-content-between">
                <span>Credit card </span>
                <span>
                  <img src="/images/card-logo.jpg" alt="" className="img-fluid" />
                </span>
              </div>
              <CardForm/>
            </div>
          </div>
          <div className="billing-address-section w-100 d-block">
            <div className="checkout-title flex-auto">Billing address</div>
            <p>Select the address that matches your card or payment method.</p>
            <div className="radio-button-row w-100 d-block">
              <label className="control control-radio"> Same as shipping address
                <Field
                  type="radio"
                  name="billingAddress"
                  value="same"
                  checked={!differentBilling}
                  onChange={( event ) => handleBillingChange( formik, event )}
                />
                <div className="control-indicator"></div>
              </label>
              <label className="control control-radio">
                Use a different billing address
                <Field
                  type="radio"
                  name="billingAddress"
                  value="different"
                  checked={differentBilling}
                  onChange={( event ) => handleBillingChange( formik, event )}
                />
                <div className="control-indicator"></div>
              </label>
            </div>
            <div className={`billing-address-form w-100 ${ differentBilling ? '' : 'd-none' }`}>
              <div className="checkout-form w-100 d-block">
                <AddressForm formik={formik}/>
              </div>
            </div>
          </div>
          <div className="btn-row w-100 d-flex justify-content-between">
            <div className="back-link" onClick={() => onChangePage( 'shipping' )}>
              <a href="#" className='d-flex'>
                <ChevronLeftIcon/>
                Return to shipping
              </a>
            </div>
            <button type="submit" className="checkout-btn" disabled={formik.isSubmitting}>
              Checkout now
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

Payment.propTypes = {
  activeTab: PropTypes.string,
  onChangePage: PropTypes.func,
  checkoutData: PropTypes.object,
  onChangeData: PropTypes.func,
};

export default Payment;
