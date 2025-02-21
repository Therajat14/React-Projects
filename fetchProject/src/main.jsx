import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Buttons from './buttons';
import Content from './content';
import "./style.css"; // Import CSS file


const Main = () => {

  const [buttonState, setButtonState] = useState("users");





  return (
    <main>
      <h1> Fetch Challange</h1>

      <Buttons buttonState={buttonState} setButtonState={setButtonState} />
      <Content buttonState={buttonState} />

    </main>
  );
};

createRoot(document.getElementById('root')).render(

  <Main />


)
