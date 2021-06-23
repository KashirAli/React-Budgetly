import React from 'react'
import Styles from './Input.css'
const Input = (props)=>{
    let InputElement = null;
    switch(props.Inputtype){
       case 'text':
       return  InputElement = (<input className='desc' type='text' placeholder= "Add Description" value={props.value} onChange={props.changed}/>)
       
        case 'switch':
        return InputElement = (
            <select id="select" name="select" className='switch'  onChange={props.changed}>
            <option>none</option>
            <option value="income">+</option>
            <option value="expense">-</option>
            
          </select>
        );
       
        case 'number':
            return InputElement = (<input className='value' type='number' placeholder= "Value" value={props.value} onChange={props.changed}/>)
       
        case 'icon':
            return InputElement = (<div> <i  className="fa fa-check-circle fa-2x icon" aria-hidden="true" onClick={props.clicked}></i></div>)
               
        default:
              return  InputElement = (<input type='text' placeholder= "Add Description" value={props.value} onChange={props.changed}/>)
             
   }

    return(
        {InputElement}
    );

}
export default Input;