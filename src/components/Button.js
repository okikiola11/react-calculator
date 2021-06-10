import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;

  const handleClick = (buttonName) => clickHandler(buttonName);

  const styles = {
    width: '25%',
  };

  return (
    <>
      <button
        onClick={() => handleClick(name)}
        type="button"
        style={name === 0 ? 'null' : styles}
      >
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
