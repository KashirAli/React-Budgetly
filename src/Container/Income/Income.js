import React,{Component} from 'react';
import Card from '../../Components/Card/Card';
import './Income.css';
class Income extends Component{

    render(){

        return(
            <div >
                <p className="text-imp">Income</p>
                {this.props.income.map((curr,i)=>{
                    console.log(curr)
                    return (<Card key={i} text={curr.text} number={curr.number} clicked={()=>this.props.removed(i)} />)
                })
                    
                }
            </div>
        )
    }
}
export default Income;