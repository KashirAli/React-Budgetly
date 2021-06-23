import React,{Component} from 'react'

import BudgetShowcase from '../../Components/BudgetShowcase/BudgetShowcase'
import Form from '../../Components/Form/Form'
import Income from '../Income/Income'
import Expense from '../Expense/Expense'

import './AllHandler.css'

class AllHandler extends Component{
    state={
        income:[],
        expense:[],
        remaining:0,
        totalincome:0,
        totalexpense:0
       
    }
    formSubmitHandler=(data)=>{
        console.log("data:",data)  
        if(data.switch === 'income'){
            let newIncome = [...this.state.income];
                newIncome.push(data);
             
          return this.setState({income:newIncome,FormSubmit:true})
        } 
        if(data.switch === 'expense') {
            let newExpense = [...this.state.expense];
                newExpense.push(data);
            return this.setState({expense:newExpense,FormSubmit:true})
        } 
        
    }
    removeHandler=(key,type)=>{
        if(type==='income'){
            let newArr = this.state.income.filter((curr,i)=>{
                return key!==i;
            })
            this.setState({income:newArr})
                       
        }
        if(type==='expense'){
            let newArr = this.state.expense.filter((curr,i)=>{
                return key!==i;
            })
            this.setState({expense:newArr})
                       
        }
    }

    remainHandler=(income,expense)=>{
        let remaining = income-expense;
        this.setState({totalincome:income,totalexpense:expense,remaining:remaining})
    }
    
    componentDidUpdate( prevProps,prevState){
        if(this.state.income!==prevState.income ||this.state.expense!==prevState.expense){
            let sumExpense = 0;
                    let sumIncome = 0;
                   
                    this.state.expense.map((curr,i)=>{
                     sumExpense = sumExpense+parseInt(curr.number)
                 })
                 this.state.income.map((curr,i)=>{
                     sumIncome = sumIncome+parseInt(curr.number)
             })
             this.remainHandler(sumIncome,sumExpense);
        }
        console.log('this state:',this.state,"prev state:",prevState.income)     
        
    }

    render(){
    
        return(
            <div className="headContainer">
                <section>
                <BudgetShowcase income={this.state.totalincome} expense={this.state.totalexpense} remaining={this.state.remaining}/>
                </section>
                
                <section>
               <Form  submitted={this.formSubmitHandler} />
                </section>

                <div className="grid">
                    <div>
                       <Income income={this.state.income} removed={(key)=>this.removeHandler(key,'income')}/>
                    </div>
                    <div>
                      <Expense expense={this.state.expense} removed={(key)=>this.removeHandler(key,'expense')}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default AllHandler;
