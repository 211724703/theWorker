import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'


function mapStateToProps(state) {
    return {
        employs: state.employs,
    };
}

export default connect(mapStateToProps)( function PrivateArea(props){
    
    const {employs } = props;
   
   
        return(
           <div>
               <h1>private Area </h1>
               
               <p>the Employs: {employs.fName} {employs.lName} <br></br>{employs.email}<br></br>{employs.password}<br></br>{employs.status} </p> 

  
             

              
               </div>

        )
           
        
    
})
