
// import React,{useState,useEffect} from 'react';
// import Button from '@material-ui/core/Button';

// const FirstQuter=(props)=>{
//     const [page,setPage]= useState([]);
//     // const [show,setShow] =useState(false);
//     const [page2,setPage2] = useState([])
//     const [name, setName] = useState();
//     const [name2, setName2] = useState(null);
//      const [name3,setName3] =useState(' ')
//      const [name4,setName4] = useState('')
//      const [position,setPosition] =useState(null);
//      const [position1,setPosition1] = useState('')
//      const [position2,setPosition2] = useState('')

    
//  useEffect(()=>{
//    setPage(props.Playerdata)
//    console.log("setData---",props.Playerdata)
//    setPage2(props.Playerdata,"vikasss Data")
//  },[])

//  const  InputEvent =(e)=>{
//   setName(e.target.value)

//   console.log('event---', name)


// //   props.setData({fname:"",lname:"",height:"",position:""});
//   console.log(props.Playerdata, props.Playerdata.fname,"Empty Data")

// //   if(props.Playerdata[0].fname + props.Playerdata[0].lname ===props.Playerdata[0].lname){
// //       setShow(true)
// //   }
// //   else{
// //       setShow(false)
// //   }

//  }

//  const  InputEvent1 =(e)=>{

//    setPosition(e.target.value)

//  }
//  const InputEvent2 =(e)=>{

//     // const name1 = e.target.value
//     setName2(e.target.value)
//     // console.log("eventsssss---",name1)
//     // props.setPage2({...props.Playerdata, [name] : value})

//     // console.log("name: ", name, props.Playerdata[0].name1)
//     // if(name === props.Playerdata[0].name1){
//     //     console.log("*******")
//     //     setShow(true)
//     // }
//     // else{
//     //     setShow(false)
//     // }

//  }

//  const InputEvent3 =(e)=>{

//     setPosition1(e.target.value)
//  }

//  const InputEvent4 =(e)=>{


//     setName3(e.target.value)

//  }
// //  const InputEvent5 =(e)=>{

// //     setPosition2(e.target.value)
// //   }

// //   const InputEvent6 =(e)=>{

// //     setName4(e.target.value)
// //   }
// //  const InputEvent2 =(e)=>{
// //      setName3(e.target.value)
// //  }

//     console.log("eventsssss-111--",name)
//     console.log("eventsssss-222--",name2)
//      console.log("eventsssssssssssssssss-3",name3)

//     const backClick =()=>{
//         props.setShow(0);
//     }

//     const SaveData =()=>{

//         props.setShow(2);
//         // if(name== "" && name2=="" && position =="" && position1 =="")return

//         // setPage(props.Playerdata)
//         // setPage2(props.Playerdata,"vikasss Data")
 
//     }

    


//      return(
//          <>
//              <div>
//                  <form>
//                  <div>
//                          <select type='text' name='fname' onChange={InputEvent} placeholder='Select Player'>
//                         <option>Select Player</option>
//                              {page.map((val) => { return (<option>{val.fname} {val.lname}</option>) })}
//                          </select>
//                          </div>
//                          {name === name2 && <label style={{color:"red"}}>This User already Exits</label>}
//                          <div>
//                          <select type='text' name='position' onChange={InputEvent1} placeholder='Select Position'>
//                          <option>Select Position</option>
//                          {page.map((val) => { return (<option>{val.position}</option>) })}
//                          </select> 
//                      </div>
//                      {position === position1 && <label style={{color:"red"}}>This positiion already Exits</label>}
                  

//                      <div>
                     
//                          <select type='text' name='fname' onChange={InputEvent2} placeholder='Select Player'>
//                         <option>Select Player</option>
//                              {page.map((val) => { return (<option>{val.fname} {val.lname} </option>) })}
//                          </select>
//                          </div>
//                          {name === name2  && <label style={{color:"red"}}>This User already Exits</label>}
//                          <div>
//                          <select type='text' onChange={InputEvent3} name='position' placeholder='Select Position'>
//                          <option>Select Position</option>
//                          {page.map((val) => { return (<option>{val.position}</option>) })}
//                          </select> 
                         
//                      </div>
//                      {position === position1  && <label style={{color:"red"}}>This Position  already Exits</label>}
//                       <div>
//                          <select type='text' name='fname' onChange={InputEvent4} placeholder='Select Player'>
//                         <option>Select Player</option>
//                              {page.map((val) => { return (<option>{val.fname} {val.lname} </option>) })}
//                          </select>
//                          </div>
//                          {/* {(name === name3 || name === name3 || name2 === name3 || name== name2 || name=== name4) && <label style={{color:"red"}}>This User already Exits</label>} */}
                         
                         
//                          {name === name3 && <label style={{color:"red"}}>This User already Exits</label>}
//                          {name2 === name3 && <label style={{color:"red"}}>This User already Exits</label>}
//                           {/* <div>
//                          <select type='text' name='position' onChange={InputEvent5}  placeholder='Select Position'>
//                          <option>Select Position</option>
//                          {page.map((val) => { return (<option>{val.position}</option>) })}
//                          </select> 
                        
//                      </div>  */}
//                      {/* <div>
//                          <select type='text' name='fname' onChange={InputEvent6} placeholder='Select Player'>
//                         <option>Select Player</option>
//                              {page.map((val) => { return (<option>{val.fname} {val.lname} </option>) })}
//                          </select>
//                          </div>
//                           {name == name4 || name2 == name4  && <label style={{color:"red"}}>This User already Exits</label>}  */}
//                           {/* <div>
//                          <select type='text' name='position' placeholder='Select Position'>
//                          <option>Select Position</option>
//                          {page.map((val) => { return (<option>{val.position}</option>) })}
//                          </select> 
                        
//                      </div>    */}
         
//                  </form>
 
                 
//                  <Button variant="contained" color="secondary" type="submit" onClick={()=>backClick()}>
//                      Back
//                     </Button>

//                  <Button variant="contained" color="primary" type="submit" onClick={()=>SaveData()}>
//                      Save
//                     </Button>
//              </div>
//          </>
//      )    

// }

// export default FirstQuter;





//////////////////////////////////////////////////////////////////////////////////////////////





import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';


const FirstQuter=(props)=>{
    const [page,setPage]= useState([]);
    // const [show,setShow] =useState(false);
    const [page1,setPage1] = useState([])
    const [name,setName] = useState(null)
    const [name1,setName1] = useState('')
    const [name2,setName2] = useState(' ')
    const [name3,setName3] = useState('  ')
    const [name4,setName4] = useState('    ')
    const [position,setPosition] = useState(null)
    const [position1,setPosition1] = useState('')
    const [position2,setPosition2] = useState(' ')
    const [position3, setPosition3] = useState('  ')
    const [position4, setPosition4] = useState('   ')

    
 useEffect(()=>{
   setPage(props.Playerdata)
   console.log("setData",props.Playerdata)
   setPage1(props.Playerdata,"vikasss Data")
 },[])

 const  InputEvent =(e)=>{
//   const name = e.target.value
  setName(e.target.value)
  console.log("event---",name)
  

  


  props.setData({fname:"",lname:"",height:"",position:""});
  console.log(props.Playerdata,"Empty Data")


 }
 const InputEvent1 =(e)=>{

    setPosition(e.target.value)
 }

 const InputEvent2 =(e)=>{
     setName1(e.target.value)
 }
const InputEvent3 =(e)=>{
    setPosition1(e.target.value)
}

 const InputEvent4 =(e)=>{

    setName2(e.target.value)
 }
 const InputEvent5 =(e)=>{
      setPosition2(e.target.value)
 }
 const InputEvent6 =(e)=>{

    setName3(e.target.value)
 }
 const InputEvent7=(e)=>{

    setPosition3(e.target.value)
 }

 const InputEvent8 =(e)=>{

    setName4(e.target.value)

 }

 const InputEvent9 =(e)=>{
     setPosition4(e.target.value)
 }
 const backClick =()=>{
     props.setShow(0)
 }
 const SaveData =()=>{

    props.setShow(2)
 }

//  const finalData = localStorage.setItem("names",JSON.stringify(props.allData))
console.log("event---1",name)
console.log("event---2",name1)
     return(
         <>
             <div>
                 <form>
                 <div>
                         <select type='text' name='fname' onChange={InputEvent} placeholder='Select Player'>
                        <option>Select Player</option>
                             {page.map((val) => { return (<option>{val.fname} </option>) })} 
                         </select>
                         </div>
                         {name==name1 && <label style={{color:"red"}}>This User already Exits</label>}
                         <div>
                         
                         <select type='text' name='position' onChange ={InputEvent1} placeholder='Select Position'>
                         <option>Select Position</option>
                         {page.map((val) => { return (<option>{val.position}</option>) })}
                         </select> 
                     </div>
                     {position== position1 && <label style={{color:"red"}}> This position already Exits</label>}

                     <div>
                         <select type='text' name='fname' onChange={InputEvent2} placeholder='Select Player'>
                        <option>Select Player</option>
                             {page.map((val) => { return (<option>{val.fname} </option>) })}
                         </select>
                         </div>
                         {name == name1 && <label style={{color:"red"}}>This User already Exits</label>}
                         <div>
                         <select type='text' name='position' onChange={InputEvent3} placeholder='Select Position'>
                         <option>Select Position</option>
                         {page.map((val) => { return (<option>{val.position}</option>) })}
                         </select> 
                     </div>
                       {position== position1 && <label style={{color:"red"}}> This Position already Exits</label>}
                     <div>
                         <select type='text' name='fname' onChange={InputEvent4} placeholder='Select Player'>
                        <option>Select Player</option>
                             {page.map((val) => { return (<option>{val.fname} </option>) })}
                         </select>
                         </div>
                        {name == name2 && <label style={{color:"red"}}>This User already Exits</label>}
                        {name1 == name2 && <label style={{color:"red"}}>This User already Exits</label>}
                        
                         <div>
                         <select type='text' name='position' onChange={InputEvent5} placeholder='Select Position'>
                         <option>Select Position</option>
                         {page.map((val) => { return (<option>{val.position}</option>) })}
                         </select> 
                     </div>

                     {position == position2 && <label style={{color:"red"}}>This Position already Exits</label>}
                     {position1 == position2 && <label style={{color:"red"}}>This Position already Exits</label>}
                     <div>
                         <select type='text' name='fname' onChange={InputEvent6} placeholder='Select Player'>
                        <option>Select Player</option>
                             {page.map((val) => { return (<option>{val.fname} </option>) })}
                         </select>
                         </div>
                        {name == name3 && <label style={{color:"red"}}>This User already Exits</label>}
                        {name1 == name3 && <label style={{color:"red"}}>This User already Exits</label>}
                        {name2 == name3 && <label style={{color:"red"}}>This User already Exits</label>}
                        
                         <div>
                         <select type='text' name='position' onChange={InputEvent7} placeholder='Select Position'>
                         <option>Select Position</option>
                         {page.map((val) => { return (<option>{val.position}</option>) })}
                         </select> 
                     </div>
                     {position == position3 && <label style={{color:"red"}}>This Position already Exits</label>}
                     {position1 == position3 && <label style={{color:"red"}}>This Position already Exits</label>}
                     {position2 == position3 && <label style={{color:"red"}}>This Position already Exits</label>}
                     <div>
                         <select type='text' name='fname' onChange={InputEvent8} placeholder='Select Player'>
                        <option>Select Player</option>
                             {page.map((val) => { return (<option>{val.fname} </option>) })}
                         </select>
                         </div>
                        {name == name4 && <label style={{color:"red"}}>This User already Exits</label>}
                        {name1 == name4 && <label style={{color:"red"}}>This User already Exits</label>}
                        {name2 == name4 && <label style={{color:"red"}}>This User already Exits</label>}
                        {name3 == name4 && <label style={{color:"red"}}>This User already Exits</label>}
                         <div>
                         <select type='text' name='position' onChange={InputEvent9} placeholder='Select Position'>
                         <option>Select Position</option>
                         {page.map((val) => { return (<option>{val.position}</option>) })}
                         </select> 
                     </div>
                     {position == position4 && <label style={{color:"red"}}>This Position already Exits</label>}
                     {position1 == position4 && <label style={{color:"red"}}>This Position already Exits</label>}
                     {position2 == position4 && <label style={{color:"red"}}>This Position already Exits</label>}
                     {position3 == position4 && <label style={{color:"red"}}>This Position already Exits</label>}
                 </form>

                 <Button variant="contained" color="secondary" type="submit" onClick={()=>backClick()}>
                     Back
                    </Button>

                 <Button variant="contained" color="primary" type="submit" onClick={()=> SaveData()}>
                     Save
                    </Button>
             </div>
         </>
     )    

}

export default FirstQuter;
