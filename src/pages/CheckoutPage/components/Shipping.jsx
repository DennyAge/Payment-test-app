import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import Header from './Header';
import AddressForm from '../../../components/AddressForm';

const Shipping = ( { activeTab, onChangePage, checkoutData, onChangeData } ) => {
  const initialValues = {
    country: checkoutData.country || '',
    email: checkoutData.email || '',
    subscribe: checkoutData.subscribe || '',
    firstName: checkoutData.firstName || '',
    lastName: checkoutData.lastName || '',
    address: checkoutData.address || '',
    apartment: checkoutData.apartment || '',
    city: checkoutData.city || '',
    state: checkoutData.state || '',
    zipCode: checkoutData.zipCode || '',
    phone: checkoutData.phone || ''
  };

  const validationSchema = Yup.object( {
    email: Yup.string().email( 'Invalid email address' ).required( 'Required' ),
  } );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validate={( values ) => {
        onChangeData( values );
      }}
      onSubmit={( values, { setSubmitting } ) => {
        setSubmitting( false );
        onChangePage( 'payment' );
      }}
    >
      {formik => (
        <Form>
          <Header activeTab={activeTab} />
          <div className="left-top-row w-100 d-flex flex-wrap justify-content-between">
            <div className="checkout-title flex-auto">
              Contact
            </div>
            <div className="email-box w-100 d-block">
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control checkout"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error"
              />
              <div className="checkbox-row w-100 d-block">
                <label className="control control-checkbox">
                  Email me with news and offers
                  <Field
                    type="checkbox"
                    name="subscribe"
                  />
                  <div className="control-indicator"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="checkout-form-section w-100 d-block">
            <div className="checkout-title flex-auto">
              Shipping address
            </div>
            <div className="checkout-form w-100 d-block">
              <AddressForm formik={formik}/>
              <div className="btn-row w-100 d-flex justify-content-end">
                <button
                  type="submit"
                  className="checkout-btn"
                  disabled={formik.isSubmitting}
                >
                  Continue to payment
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

Shipping.propTypes = {
  activeTab: PropTypes.string,
  onChangePage: PropTypes.func,
  checkoutData: PropTypes.object,
  onChangeData: PropTypes.func,
};

export default Shipping;
