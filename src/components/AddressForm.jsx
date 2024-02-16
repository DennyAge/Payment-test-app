import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import Select from './Select';

import { countryOptions, stateOptions } from '../variables';

const AddressForm = ( { formik } ) => {
  return (
    <div>
      <div className="row gx-3">
        <div className="col-12">
          <div className="form-group">

            <Select
              id="country"
              name="country"
              options={countryOptions}
              value={formik.values.country}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="form-control checkout"
              placeholder="First name (optional)"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="form-control checkout"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <Field
              type="text"
              id="address"
              name="address"
              className="form-control checkout"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <Field
              type="text"
              id="apartment"
              name="apartment"
              className="form-control checkout"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <Field
              type="text"
              id="city"
              name="city"
              className="form-control checkout"
              placeholder="City"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <Select
              id="state"
              name="state"
              options={stateOptions}
              value={formik.values.state}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <Field
              type="text"
              id="zipCode"
              name="zipCode"
              className="form-control checkout"
              placeholder="Zip code"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <Field
              type="tel"
              id="phone"
              name="phone"
              className="form-control checkout"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
AddressForm.propTypes = {
  formik: PropTypes.object,
};
export default AddressForm;