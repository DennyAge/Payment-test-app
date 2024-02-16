import React from 'react';
import PropTypes from 'prop-types';

const Select = ( { id, options, value, onChange } ) => {
  return (
    <select id={id} className="form-select checkout" value={value} onChange={onChange}>
      {options.map( ( option, index ) => (
        <option key={index} value={option.label}>
          {option.label}
        </option>
      ) )}
    </select>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string, 
  onChange: PropTypes.func.isRequired,
};

export default Select;
