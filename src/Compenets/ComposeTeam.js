import React,{useState} from 'react';
import { NavLink } from "react-router-dom"
import InputField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FirstQuter from './FirstQuter';

const ComposeTeam =()=>{

    const [userInput, setuserInput]= useState({
      firstname:"",
      lastname:"",
      height:"",
      position:""
    })
      const [record, setRecord] = useState([]);
       const [show,setShow] = useState(false)


    const handleInput =(e)=>{

        const {name,value} = e.target;
        console.log("userdata",userInput)
          setuserInput  ({...userInput, [name]: value})
    }

    // localStorage.setItem("record", JSON.stringify(record))
    // const result = localStorage.getItem('recouserInputrd')
    // console.log(result)

    let obj=JSON.stringify(record);
    localStorage.setItem('record',obj);
    localStorage.getItem(JSON.parse(obj))


     const handleSubmit =(e)=>{
         e.preventDefault();
          if(userInput.firstname ==='' ||  userInput.lastname ==='' ||  userInput.height==='' ||  userInput.position==='' ) return

             record.push(userInput);
             console.log(record,"recordssssssssssssss")
            setuserInput({firstname:"", lastname:"", height:"",position:""});
      
     }

     const Click =()=>{
         setShow(pre=>!pre);
      }
    
   return(
       <>
       {!show ?  
       <div>
       <h1>vikas kumar</h1>
      <form noValidate autoComplete="off" onSubmit ={handleSubmit}>
         <InputField name="firstname"  value={userInput.firstname}  onChange={handleInput} />
         <br></br>
         <InputField name="lastname"   value={userInput.lastname}  onChange={handleInput}  />
         <br></br>
         <InputField type="number"  value={userInput.height}  name="height" onChange={handleInput} />
         <br></br>

         <Select onChange={handleInput}  value={userInput.position}  name="position">
          <MenuItem value="point guard(PG)">point guard(PG)</MenuItem>
          <MenuItem value="the shooting guard (SG)">the shooting guard (SG)</MenuItem>
          <MenuItem value="the small forward(SF)">the small forward(SF)</MenuItem>
          <MenuItem value="the power forward(PF)">the power forward(PF)</MenuItem>
          <MenuItem value="the center(C)">the center(C)</MenuItem>
        </Select>
         <Button type="submit" variant="contained" color="primary" onClick={Click}>      
        Save
      </Button>
    
    
  
    </form>

       </div>:<FirstQuter userInput={userInput} setuserInput={setuserInput}  record={record} setRecord={setRecord}/>
       }
       </>
   )

}

 export default ComposeTeam;