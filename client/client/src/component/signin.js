import React, { Component } from "react";
import { useState } from "react/cjs/react.development";
import { Link } from 'react-router-dom';

import { checkPermission } from './service'

export default function SignIn() {

const[user,setUser]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const onlogin = async () => {
    try {

        await checkPermission({ email:email,password:password });
        if( checkPermission){
            try{
                const isMan=  await getIsManager(email,password);
                if(isMan)
                setUser("manager");
                else
                setUser("user");
                }
                catch(err){
                  setUser("no user");
                }
          
              }
              if (user == 'manager') {
               
                <Link  to="/allEmployedadmin"></Link>
              }
              if (user == 'user')
              
              <Link  to="/allEmployed"></Link>
           

        // window.location.href = '/questionList';///////////////////////
    } catch (error) {
        alert("is not valid password")
    }
}

const getIsManager=(email,password)=>{

    if(email=="admin@workers.com" && password=="admin2765"){//בדיקה האם הוא המנהל 
        return true;      
   } else{
       return false
   }       
}  


        return(
            <div>
                <h1>login</h1>
                Enter Email :
                <br></br><input type="text" onChange={e=>setEmail(e.target.value) }></input>
                <br></br>
                Enter Password:
                <br></br><input type="text" onChange={e=>setPassword(e.target.value)}></input>
                <br></br><br></br>
                <button onClick={onlogin}>login</button>
               
               
            </div>
        )
    



}
