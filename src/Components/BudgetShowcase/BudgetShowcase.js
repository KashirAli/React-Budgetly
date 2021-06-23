import { buildQueries } from '@testing-library/dom';
import React from 'react'
import Styles from './BudgetShowcase.module.css'
const BudgetShowcase = (props)=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = new Date().getMonth();
    return(
    <div className={Styles.showcase}>
        <div className={Styles.coloroverlay}></div>
        <div className={Styles.container}>
        <h1 className={Styles.text}>    
            {`Available Budget in ${monthNames[month]} ${new Date().getFullYear()}`} 
        </h1>
        <h1 className={Styles.value}>    
            {props.remaining} 
        </h1>
        <div className={Styles.Data}>
            <p>Income</p>
            <p>+{props.income}</p>
        </div>
        <div className={Styles.DataExpense}>
            <p>Expense</p>
            <p>-{props.expense}</p>
        </div>
        </div>
       
    </div>
    )
}
export default BudgetShowcase;