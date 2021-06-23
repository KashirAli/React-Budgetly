import React, { Component } from 'react'
import Input from '../../UI/Input/Input'
import Styles from './Form.module.css'
class Form  extends Component{
        state={
            switch:'',
            text:'',
            number:''
        }
        onChangeValue=(event,type)=>{
            let newState = {
                ...this.state
            }
           let currElement = newState[type];
           currElement = event.target.value;
           newState[type] = currElement;
           this.setState({...newState})
            
        }
     
render(){
    console.log(this.state)
    return(
        <div className={Styles.container}>
           <div className={Styles.center}>
              <Input value={this.state.switch.value} Inputtype='switch' changed={(event)=>this.onChangeValue(event,'switch')} />
              <Input value={this.state.text.value} Inputtype='text' changed={(event)=>this.onChangeValue(event,'text')}/>
              <Input value={this.state.number.value} Inputtype='number' changed={(event)=>this.onChangeValue(event,'number')}/>
             <Input  Inputtype="icon"    clicked={()=>this.props.submitted(this.state)}  />
    
           </div>
           
        </div>
       
        )
    }
}

    
export default Form;