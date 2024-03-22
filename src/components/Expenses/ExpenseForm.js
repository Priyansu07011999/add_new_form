import './ExpenseForm.css'
import React from 'react';


const ExpenseForm = () => {

    const anythingChanger = (e) => {
        console.log(e.target.value)
    }

    return(
        <form>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={anythingChanger}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={anythingChanger}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={anythingChanger}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}   

export default ExpenseForm;