import { createContext, useContext, useState } from 'react';
import initiativesList from '../assets/db.json'

const InitiativeContext = createContext()

// eslint-disable-next-line react/prop-types
function InitiativesProvider({ ...props }) {
    const [budgetAmount, setBudgetAmount] = useState(74500)
    const [investedAmount, setInvestedAmount] = useState(0)

    const [idNumber, setIdNumber] = useState()
    const [amount, setAmount] = useState(0)


    const [selectedElements, setSelectedElements] = useState([])
    const [amountSelectedElements, setAmountSelectedElements] = useState(0)

    const PuntoPozuelo = initiativesList[0].PuntoPozuelo
    const DescubreMundoPozuelo = initiativesList[1].DescubreMundoPozuelo
    const PozueloSens = initiativesList[2].PozueloSens
    const PromotoresPozuelo = initiativesList[3].PromotoresPozuelo
    const PozueloLab = initiativesList[4].PozueloLab

    const values = {
        budgetAmount,
        setBudgetAmount,
        investedAmount,
        setInvestedAmount,
        selectedElements,
        setSelectedElements,
        amountSelectedElements,
        setAmountSelectedElements,

        idNumber,
        setIdNumber,
        amount,
        setAmount,

        PuntoPozuelo,
        DescubreMundoPozuelo,
        PozueloSens,
        PromotoresPozuelo,
        PozueloLab
    }

    return (
        <InitiativeContext.Provider value={values} {...props} />
    )

}

// Using Context
const useInitiativeContext = () => {
    const context = useContext(InitiativeContext)
    return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { InitiativesProvider, useInitiativeContext }