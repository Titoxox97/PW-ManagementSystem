import './App.css';
import { useState } from 'react';

function App() {

  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')


  return ( 
  <div className="App">
    <div className='AddPw'>
      <input 
      type="text" 
      placeholder="password123" 
//When password is changed the change is recorded in the back end
//onChange is called each time there is a change to the input
      onChange={(event) => {
        setPassword(event.target.value);
        }}
      />
      <input 
      type="text" 
      placeholder="E-mail" 
      onChange={(event) => {
        setTitle(event.target.value);
      }}
      />
      <button> Add Password </button>
    </div>
  </div>
  );
}

export default App;
