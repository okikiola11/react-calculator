import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './button.module.css';

const Button = (props) => {
  const {
    name, clickHandler, color,
  } = props;

  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <>
      <button
        onClick={() => handleClick(name)}
        type="button"
        className={`${styles.button} ${color ? styles.grayColor : styles.orangeColor} `}
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
};

Button.defaultProps = {
  color: false,
};

export default Button;
