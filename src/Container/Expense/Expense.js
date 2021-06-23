import React,{Component} from 'react';
import Card from '../../Components/Card/Card'
import  style from './Expense.module.css'
class Expense extends Component{

    render(){

        return(
            <>
            <p className={style.text}>Expenses</p>
            {this.props.expense.map((curr,i)=>{
                    console.log(curr.text,curr.number)
                    return (<Card key={i} text={curr.text} number={curr.number} clicked={()=>this.props.removed(i)} />)
                })
                    
                }
            </>
        )
    }
}
export default Expense;