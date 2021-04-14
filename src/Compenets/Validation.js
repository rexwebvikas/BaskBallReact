export default function Validation(props){
    console.log(props,"Validation Datas")
    let errors ={};
    if(!props.data.fname){
        errors.fname="Name is Required."
    }
    if(!props.data.lname){
        errors.lname="LastName is Required."
    }
    if(!props.data.height){
        errors.height="Enter the height"
    }
    if(!props.data.position){

        errors.position ="Enetr the Player Position"
    }
    return errors;
}
// function ValidateInfo2(props){
//     let errors = {};
//    for(let j=0; j<=props.data.length; j++){
//         for (let i=1; i<=props.data.length; i++){
//             if(props.data[j].Name == props.data[i].Name){
//                 errors.fname = props.data[j].fname;
//             }
//             else errors.fname="name are matched pLase select anthor name";
//         }
//     }
// return errors;
    
// }
// export {ValidateInfo2};

//  function ValidationFirstQuter(props){
//     let errors= {};
//     for (let i = 0 ; i<= props.data.length; i++){

//         for(let j=0; j<=props.data.length; j++){

//             if(props.data[i].fname == props.data.fname && props.data[i].position == props.data.position){
//                 errors.fname = props.data[i].fname;
//                 errors.position = props.data[i].position 


//             }
//             else errors.fname="";
            
//         }
//     }
// }
// export {ValidationFirstQuter};
