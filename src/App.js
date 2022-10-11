import { useState } from 'react';
import './App.scss';
import ColorDiv from './components/ColorDiv';
import ColorButtons from './components/ColorButtons';

export const random_hex = () => {
  const valid_choices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  let hex = "#"
  for (let i = 0; i < 6; i++) {
    hex += valid_choices[Math.floor(Math.random() * valid_choices.length)]
  }
  return hex;
}

const App = () => {
  const [color, setColor] = useState(random_hex());

  return (
    <div>
      <ColorDiv color={color} />
      <ColorButtons color={color} setColor={setColor}/>
    </div>
  );
}

export default App;
