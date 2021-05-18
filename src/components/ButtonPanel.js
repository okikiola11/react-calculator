import Button from './Button';

const GroupButtons = {
  Group1: ['AC', '+/-', '%', '÷'],
  Group2: ['7', '8', '9', 'X'],
  Group3: ['4', '5', '6', '-'],
  Group4: ['1', '2', '3', '+'],
  Group5: ['0', '.', '='],
};

const buttons = Object.keys(GroupButtons);

const ButtonPanel = () => buttons.map((item) => (
  <main key={item} className="buttons">
    {GroupButtons[item].map((buttons) => <Button key={buttons} name={buttons} />)}
  </main>
));

export default ButtonPanel;
