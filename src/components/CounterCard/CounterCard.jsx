/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useInitiativeContext } from '../../context/InitiativesContext'

// eslint-disable-next-line react/prop-types
const CounterCard = ({ ...props }) => {

    const context = useInitiativeContext()
    let investedAmount = context.investedAmount
    // let selectedElements = context.selectedElements

    let [value, setValue] = useState(0)

    useEffect(() => {
        context.setBudgetAmount(74500 - investedAmount)
    }, [investedAmount])

    // ADD LOGIC 
    const add = () => {

        // Reduce from available money
        context.setInvestedAmount(context.investedAmount + props.budget)

        // Value for each card
        setValue(value += 1)

        // Updating checkout list ADDING
        context.setSelectedElements(prevList => {
            let found = false;
            const newList = prevList.map(item => {
                if (item.id === props.id) {
                    found = true;
                    return {
                        ...item,
                        amount: item.amount + 1
                    };
                } else {
                    return item;
                }
            });

            if (!found) {
                newList.push({
                    id: props.id,
                    channel: props.channel,
                    name: props.country,
                    flag: props.flag,
                    budget: props.budget,
                    amount: props.amount + 1
                });
            }

            console.log(newList);
            return newList;
        });
        // console.log(context.selectedElements)


    }

    // MINUS LOGIC
    const remove = () => {
        // let less = context.selectedElements
        // less >= 1 ? context.setSelectedElements(less -= 1) : context.setSelectedElements(less = 0)

        context.setInvestedAmount(investedAmount >= props.budget && value >= 1 ? context.investedAmount - props.budget : investedAmount)

        // Value for each card
        setValue(value >= 1 ? value -= 1 : value = 0)

        // Updating checkout list FOR MINUS
        context.setSelectedElements(prevList => {
            let found = false;
            const newList = prevList.map(item => {
                if (item.id === props.id) {
                    found = true;
                    return {
                        ...item,
                        amount: item.amount >= 1 ? item.amount - 1 : 0
                    };
                } else {
                    return item;
                }
            });

            if (!found) {
                console.log('Selecciona al menos un elemento para eliminarlo')
            }

            console.log(newList);
            return newList;
        });
    }


    return (
        <>
            <div className='row justify-content-between align-items-center my-3'>
                <button className="btn btn-remove" onClick={() => remove()}>-1</button>
                <p className="quantity">{value}</p>
                <button className="btn btn-add" onClick={add}>+1</button>
            </div>
        </>
    )
}

export default CounterCard