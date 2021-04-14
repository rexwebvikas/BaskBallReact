import React from 'react';
import ComposeTeam from './Compenets/ComposeTeam'
import { useState } from 'react';
import FirstQuter from './Compenets/FirstQuter';
import FinalData from './Compenets/FinalData';

function App() {
  // const initalValues = {fname:"",lname:"",height:"",position:""}
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [show,setShow] =useState(0)
  const [data,setData] = useState({})
  const [Playerdata, setPlayerdata] = useState([])
  const style={
  };
  const style1={}

  return (
    <>
         <div className="App">
        <h1 style={{backgroundColor:"black", color:"white"}}>BasketBall Manager</h1>
          <navbar id ="navbar">
            <div className="d1">Compose Team</div>
            <div className="d1">First Quarter</div>
         </navbar>
      </div>  
      {show ==0 &&((style.background="rgb(69,69,226"), <ComposeTeam setShow={setShow} Playerdata={Playerdata} setPlayerdata={setPlayerdata} data={data} setData={setData}/>)}
      {show ==1 &&((style1.background="rgb(69,69,226"), <FirstQuter setShow={setShow} Playerdata={Playerdata} setPlayerdata={setPlayerdata} data={data} setData={setData}/>)}
       {show ==2 && <FinalData/>}
    
    
    </>   
    
  );
}

export default App;