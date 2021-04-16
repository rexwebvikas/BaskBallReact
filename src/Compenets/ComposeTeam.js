// import React,{useState} from 'react';
// import Button from '@material-ui/core/Button';
// import {Formik,ErrorMessage} from "formik";
// import * as Yup from "yup";



// const ComposeTeam = (props) =>{

//     console.log(props,"vaikkkkkkkkkkkkkkkkkkk")

//     const handleChange = (e) =>{
//         const {value, name} = e.target;
//         props.setData({...props.data, [name] : value})
//         console.log("Data",props.data)
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//        props.Playerdata.push(props.data)
         
//        props.setData({fname:"",lname:"",height:"",position:""});
//         console.log("form submitted",props.Playerdata)


       
//     if(props.Playerdata.fname ==='' || props.Playerdata.lname ==='' || props.Playerdata.height==='' ||  props.Playerdata.position==='' ) return
        
//     }
//     const nextPage =()=>{
      

//        props.setShow(1);
   
//     }

//      <Formik
//        initialValues={props.Playerdata}
//        onSubmit={(values,{setSubmitting})=>{
        
//        }}

//        validationSchema={Yup.object().shape({

//          fname: Yup.string()
//          .max(8,"Please no more than 8 characters")
//          .required("First Name is required"),
//          lname:Yup.string()
//          .max(8,"Please enter no more than 8 characters"),

//          height: Yup.number()
//          .required("Please Enter the number"),
//          position: Yup.string()
//          .required("Please Select the Position")


        

//        })}
//      >
//      {/* {props =>{

//        const {
//          values,
//          touched,
//          errors,
//          isSubmitting,
//          handleChange,
//          handleBlur,
//          handleSubmit
//        } = props; 
//      }}
//       */}
  

//     //  </Formik>
//      console.log(props,"propsData")
   

//     return(
//         <>
//             <div className="form">
//                 <form onSubmit={handleSubmit}>
//                     <label for="fname">First Name</label><br></br>
//                     <input type ="text" name="fname" placeholder="First Name" value={props.data.fname} onChange={handleChange}/><br></br>
//                     {/* <ErrorMessage
//                             name="fname"
//                             component="span"
//                             className="error"
//                           /> */}
//                     <label for="lname">Last Name</label><br></br>
//                     <input type ="text" name="lname" placeholder="Last Name" value={props.data.lname} onChange={handleChange} /><br></br>
//                     <label for="height">Height</label><br></br>
//                     <input  type ="number" pattern="[0-9]" inputmode="numeric" name="height" placeholder="height" value={props.data.height} onChange={handleChange}/><br></br>
//                     <label for="position">Position</label><br></br>
//                     <select  type ="text" name="position" placeholder="Position" onChange={handleChange}>
//                     <option value ="">Select-Position</option>
//                         <option value="Point Guard">Point Guard(PG)</option>
//                         <option value="Shooting Guard">Shooting Guard(SG)</option>
//                         <option value="Small Forward">Small Forward(SF)</option>
//                         <option value="Power Forward">Power Forward(PF)</option>
//                         <option value="Center">Center(C)</option>
//                     </select><br></br>
//                     <Button type="submit" variant="contained" color="primary">Save</Button>
//                     <Button type="button" variant="contained" color="secondary" onClick={()=>nextPage()}>Next</Button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default ComposeTeam;


import React,{useState} from 'react';
import Validation from './Validation';
import Button from '@material-ui/core/Button';


const ComposeTeam = (props) =>{
    console.log(props,"vikass ka data")
  
    const [errors,setErrors] = useState({});
    console.log(props,"vaikkkkkkkkkkkkkkkkkkk")
     const[show,setShow]=useState(false);
     const[show1,setShow1]= useState(false);
     const[show2,setShow2] = useState(false);
     const [show3,setShow3] =useState(false);
     const [show4,setShow4] = useState(false)
     
    const handleChange = (e) =>{
        const {value, name} = e.target;
        props.setData({...props.data, [name] : value})
        console.log("Data",props.data)
          //setErrors(Validation(props))
        // if(e.target.name=== "fname" && e.target.value =="")
        // {
        //     setShow(true)
        // }

        // console.log(props.data.fname==="");
        if(props.data.fname==="")
        {
            setShow(true)
        }
        else{
            setShow(false)
        }
        if(props.data.lname===""){
            setShow1(true)
        }
        else{
            setShow1(false)
        }
        if(props.data.height===""){
            setShow2(true)
        }
        else{
            setShow2(false)
        }
        if(props.data.position===""){
            setShow3(true)
        }
        else{
            setShow3(false)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    
           setErrors(Validation(props))
         
       props.setData({fname:"",lname:"",height:"",position:""});
        console.log("form submitted",props.Playerdata)

        if(props.data.fname !=="" && props.data.lname !=="" &&  props.data.height !=="" && props.data.position !==""){
            props.Playerdata.push(props.data)
        }

      
        
        
    }


    const SaveClick =()=>{
        

      
             if(props.data.fname ==="" && props.data.lname==="" && props.data.height==="" && props.data.position===""){

                setShow4(true)
             }
             else{
                 setShow4(false)
             }
         

        

    }

    const NextButton =()=>{
     
     props.setShow(1)
     
        // props.data.fname && props.data.lname && props.data.height && props.data.position && props.setShow(1);
    }
    return(
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type ="text"
                     name="fname"
                      placeholder="First Name" 
                      value={props.data.fname}
                       onChange={handleChange}/>
                       <br></br>
                        {show &&<label style={{color:"red"}}>This field is required</label>} 
                       <br></br>
                      {errors.fname && <p style={{color:"red"}} className="error">{errors.fname}</p>} 
                    <input type ="text"
                     name="lname"
                      placeholder="Last Name"
                       value={props.data.lname}
                       onChange={handleChange} />
                       <br></br>
                       {show1 &&<label style={{color:"red"}}>This field is required</label>} 
                       <br></br>
                        {errors.lname && <p style={{color:"red"}} className="error">{errors.lname}</p>} 

                    <input type ="text"
                     name="height"
                      placeholder="height" 
                      maxLength={9}
                      pattern="[+-]?\d+(?:[.,]\d+)?"
                      value={props.data.height} 
                      onChange={handleChange}/>
                      <br></br>
                       {show2 &&<label style={{color:"red"}}>This field is required</label>} 
                      <br></br>
                       {errors.height && <p style={{color:"red"}} className="error">{errors.height}</p>} 

                    <select type ="text"
                     name="position" 
                     placeholder="Position" 
                     onChange={handleChange}>
                      
                        <option  value="Select-Position">-Select-Position-</option>
                        <option value="Point Guard">Point Guard(PG)</option>
                        <option value="Shooting Guard">Shooting Guard(SG)</option>
                        <option value="Small Forward">Small Forward(SF)</option>
                        <option value="Power Forward">Power Forward(PF)</option>
                        <option value="Center">Center(C)</option>
                    </select>
                    <br></br>
                     {show3 &&<label style={{color:"red"}}>This field is required</label>} 
                   
                    {errors.position && <p style={{color:"red"}} className="error">{errors.position}</p>} 
                    {/* <button type="submit" className= "button" onClick={(e)=>SaveClick(e)}>Save</button> */}
                    {/* <Button type="submit" color="primary"  size="medium" className="button" onClick={(e)=>SaveClick(e)} >
                       Save
                    </Button> */}

                    <Button variant="contained" color="primary" type="submit" onClick={(e)=>SaveClick(e)}>
                     Save
                    </Button>
                    <Button variant="contained" ml= {2} color="secondary" type="button" onClick={()=>NextButton()}>NEXT</Button>
                    {/* <button type="button" className="button1" onClick={()=>props.setShow(1)}>Next</button> */}
                </form>
            </div>
        </>
    )
}

export default ComposeTeam;
