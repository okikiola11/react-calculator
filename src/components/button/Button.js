import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './button.module.css';

const Button = (props) => {
  const {
    name, clickHandler, color, wide,
  } = props;

  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <>
      <button
        onClick={() => handleClick(name)}
        type="button"
        className={`${color ? styles.grayColor : styles.orangeColor} ${wide && styles.wide ? styles.wide : styles.button}`}
      >
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: false,
  wide: false,
};

export default Button;
