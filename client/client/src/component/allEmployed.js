import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getAllEmployed ,getEmployedById} from './service'
import { addEmployedToState } from './reduce/action'

export default function Employ(props){
    
    const { dispatch } = props;
    const [list,setList]=useState([]);
    

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


   
 

   
        return(
           <div>
               <h1>List Employs </h1>
               {list?.map(item=> 
               <p>the Employs: {item.fName} {item.lName} {item.status} </p> )}

             

            
               </div>

        )
           
        
    
}
