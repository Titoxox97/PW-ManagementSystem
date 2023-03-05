import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
function App() {

  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [pwList, setPwList] = useState([]);


  useEffect (()=> {
    Axios.get('http://localhost:3001/showpasswords').then((response)=> {
      setPwList(response.data);
    });
  }, [] );


  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', {
      password: password, 
      title: title,
    });
  };

  const decryptPw = (encryption) => {
    Axios.post('http://localhost:3001/decryptpassword', {
    password: encryption.password, 
    iv: encryption.iv,
  }).then((response) => {
    // Changes to the decrypted password when one clicks on the title
    setPwList(pwList.map((val)=> {
      return val.id === encryption.id ? {
        id: val.id, 
        password: val.password, 
        title: response.data,
        iv: val.iv,      
      } 
      : val;
    }))
  });

  };

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
      placeholder="Domain" 
      onChange={(event) => {
        setTitle(event.target.value);
      }}
      />
      <button onClick={addPassword}> Add Password </button>
    </div>

      <div className='Passwords'>
        {
          pwList.map((val, key) => {
            return  (

              // Call decrypt function
            <div className='password' 
            onClick={()=> {
              decryptPw({
                password: val.password, 
                iv: val.iv,
                id: val.id,
              });
            }}
            key={key}
            >
              <h3> {val.title} </h3>
            </div>
            );
          })}
        
      </div>

  </div>
  );
}

export default App;
