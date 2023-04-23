import React, { useContext } from 'react';
// import {useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let { budget } = useContext(AppContext);
    // const [num, setBudget] = useState('');

    const { expenses } = useContext(AppContext);
    

    const handleBudgetChange = event => {
        const limit = 20000;
        const budget_value = event.target.value.slice(0, limit);
        console.log(budget_value);

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(budget_value > limit) {
            alert("The value cannot exceed the limit  £"+limit);
            // budget(budget_value);
            // console.log(budget_value)
            return;
        };
        if (budget_value < totalExpenses){
            alert("You cannot reduce the budget value lower than spending £" + totalExpenses);
        }

      };

    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" id="num" name="num" value={budget} onChange={handleBudgetChange} />
        </div>
    );
};
export default Budget;
