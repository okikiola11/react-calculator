import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;

  return (
    <>
      <button onClick={() => clickHandler(name)} type="button" name={name}>
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;
