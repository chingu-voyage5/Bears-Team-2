import React from 'react';
import classnames from 'classnames';

const InputGroup = ({ name, placeholder, value, errors, type, onChange }) => {
  return (
    <div className="form-div">
      <input
        className={classnames('form-control', {
          'is-invalid': errors
        })}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
