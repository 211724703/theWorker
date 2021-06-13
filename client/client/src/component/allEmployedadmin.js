import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getAllEmployed ,getEmployedById,setNewEmployed} from './service'
import { addEmployedToState ,NewEmployedToState} from './reduce/action'

export default function EmployAdmin(props){
    
    const { dispatch } = props;
    const [list,setList]=useState([]);
    const[fName,setFname]=useState("");
    const[lName,setLname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    useEffect(async()=>{
        try{
            const personal = await getEmployedById();//הבאנו את האזור האישי 
            console.log(personal);
            dispatch(addEmployedToState(personal))
            const rawData=await getAllEmployed();//רשימת עובדים 
            const data = await rawData.json()
            if (data){
                    setList(data)
                    console.log(data)
            }  
       }catch(err)  { 
           console.log( err) ;
          
           }
    },[])

   
    const newEmploy = async (e) => {
       
        const data1 = await setNewEmployed({fName:fName, lName: lName, email: email,password:password })  
        console.log(data1);
        if (data1) {  
           dispatch(NewEmployedToState({question: data1.myTask.question, answer: data1.myTask.answer}))
        }
       
   }



        return(

           <div> 
            
               new Employ:
                <input type="text"  onChange={event => setFname(event.target.value)} />
               <input type="text"  onChange={event => setLname(event.target.value)} />
               <input type="text"  onChange={event => setEmail(event.target.value)} />
               <input type="text"  onChange={event => setPassword(event.target.value)} />
                
                 <button onClick={newEmploy}> submit</button>


               <h1>List Employs </h1>
               {list?.map(item=> 
               <p>the Employs: {item.fName} {item.lName} {item.status} </p> )}

             

            

               </div>

        )
           
        
    
}
