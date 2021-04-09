import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const FirstQuter =(props,{record})=>{
    console.log("userInput  dataaaaaaaa",record);
    console.log("userinput",props.userInput.firstname);
    // console.log("setAllDataaaaaaaaaaaaaaaaa",props.record)

    return(
        <>
      
       {}
        <div>
            <h1>hello vikasss</h1>
            <form noValidate autoComplete="off">
                <TextField value={props.userInput.firstname}/><TextField value={props.userInput.lastname} /> <Select name="position">
                <MenuItem value="point guard(PG)">{props.userInput.position}</MenuItem>
               </Select>
      <br></br>
                
    
     
    </form>

     {/* <Select name="position">
          <MenuItem value="point guard(PG)">{props.userInput.firstname}</MenuItem>
        </Select> */}
        </div>
    
        </>
    )
}

export default FirstQuter;