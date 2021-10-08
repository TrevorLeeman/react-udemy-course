import {useState} from 'react'
import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props){
    const [filterYear, setFilterYear] = useState('2020');

    const saveFilterHandler = (selectedFilter) => {
        setFilterYear(selectedFilter);
    }

    const filteredList = props.items.filter(expense => expense.date.getFullYear().toString() === filterYear);

    return(
        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onFilterChange={saveFilterHandler} />
            <ExpensesChart expenses={filteredList} />
            <ExpensesList items={filteredList} />
        </Card>
    )
}

export default Expenses