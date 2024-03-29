import { useState } from 'react'
import { useInitiativeContext } from '../../context/InitiativesContext'

const CounterCard = () => {

    const context = useInitiativeContext()

    let [value, setValue] = useState(0)

    const add = () => {
        let more = context.SelectedElements
        context.setSelectedElements(more += 1)
        setValue(value += 1)
    }

    const remove = () => {
        let less = context.setSelectedElements
        less >= 1 ? context.setSelectedElements(less -= 1) : context.setSelectedElements(less = 0)
        setValue(value >= 1 ? value -= 1 : value = 0)
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