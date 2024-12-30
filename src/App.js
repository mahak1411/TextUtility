import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const settingAlert = (message ,type ) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null); // Reset the alert to hide it
      }, 2000);
  }
  const toggleMode = ()=>{
    
    if(mode === 'light'){
      setMode('dark')
     
      document.body.style.backgroundColor = "#3c4146"
      document.body.style.color = "white"
      settingAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      settingAlert("Light mode has been enabled" , "success")
    }
  }

  return (
    <>
    
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container">
      <TextForm settingAlert={settingAlert} heading="Enter your text to analyse below" mode={mode}/>
      
      </div>
      {/* <div className="container my-3">
        <About/>
      </div> */}
    </>
  );
}

export default App;
