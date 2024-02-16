import React from 'react';
import { Field } from 'formik';

const CardForm = () => {
  return (
    <div className="payment-card-box-data w-100 d-block">
      <div className="row gx-3">
        <div className="col-12">
          <div className="form-group w-100 d-block">
            <Field
              type="text"
              id="card-number"
              name="cardNumber"
              placeholder="Card Number"
              className="form-control checkout"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group w-100 d-block">
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name on card"
              className="form-control checkout"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group w-100 d-block">
            <Field
              type="text"
              id="expiration"
              name="expiration"
              placeholder="Expiration date (MM / YY)"
              className="form-control checkout"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group w-100 d-block">
            <Field
              type="text"
              id="Security-code"
              name="securityCode"
              placeholder="Security code"
              className="form-control checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;