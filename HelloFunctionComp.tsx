import React from 'react';
import Employee from './EmployeeFunctionComp';

export  default function HelloFunction(props){
  console.log("HelloFunction props:"+ props);
  let {firstName, lastName} = props
   return(
      <div>
        <Employee {...props}/>
        
      </div>
    )
}
