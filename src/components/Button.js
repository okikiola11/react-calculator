import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, clickHandler } = props;

  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <>
      <button onClick={() => handleClick(name)} type="button">
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

// Button.defaultProps = {
//   name: '',
// };

export default Button;
