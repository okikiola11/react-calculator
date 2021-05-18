import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button" name={name}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'This is a button',
};

export default Button;
