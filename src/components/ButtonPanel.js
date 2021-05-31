import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const GroupButtons = {
    Group1: ['AC', '+/-', '%', '÷'],
    Group2: ['7', '8', '9', 'x'],
    Group3: ['4', '5', '6', '-'],
    Group4: ['1', '2', '3', '+'],
    Group5: ['0', '.', '='],
  };
  const buttons = Object.keys(GroupButtons);

  const handleClick = (buttonName) => {
    props.clickHandler(buttonName);
  };
  return (
    <>
      {buttons.map((item, i) => (
        <main key={`item-${(i + 1)}`} className="buttons">
          {GroupButtons[item].map((button) => (
            <Button
              key={button}
              name={`${button}`}
              clickHandler={handleClick}
            />
          ))}
        </main>
      ))}
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
