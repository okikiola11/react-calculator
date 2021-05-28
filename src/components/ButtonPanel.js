import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const GroupButtons = {
  Group1: ['AC', '+/-', '%', '÷'],
  Group2: ['7', '8', '9', 'X'],
  Group3: ['4', '5', '6', '-'],
  Group4: ['1', '2', '3', '+'],
  Group5: ['0', '.', '='],
};

const ButtonPanel = (props) => {
  const buttons = Object.keys(GroupButtons);

  // const handleClick = (buttonName) => {
  //   props.clickHandler(buttonName);
  // };
  const { clickHandler } = props;

  return (
    <>
      {buttons.map((item, i) => (
        <main key={`item-${(i + 1)}`} className="buttons">
          {GroupButtons[item].map((buttons) => (
            <Button
              key={buttons}
              name={buttons}
              clickHandler={clickHandler}
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
