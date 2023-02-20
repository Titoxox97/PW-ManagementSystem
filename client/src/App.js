import './App.css';
import { useState } from 'react';
import Axios from "axios";
function App() {

  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')

  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', {
      password: password, 
      title: title
    })
  }

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
      <button onClick={addPassword}> Add Password </button>
    </div>
  </div>
  );
}

export default App;
