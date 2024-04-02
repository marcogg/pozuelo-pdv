import { useEffect, useState } from 'react'
import { useInitiativeContext } from '../../context/InitiativesContext'

const InitiativeList = () => {

    const context = useInitiativeContext()
    let selectedElements = context.selectedElements

    const [list, setList] = useState()


    useEffect(() => {
        setList(selectedElements)
    }, [list, selectedElements])

    return (
        <>
            <section className='initiativeList'>
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='initiative'>
                                {
                                    context.selectedElements.map(selectedInitiative => {
                                        if (selectedInitiative.amount > 0) {
                                            return (
                                                <div key={selectedInitiative.id} className='d-flex w-100 justify-content-between'>
                                                    <p className='channel'>{selectedInitiative.channel}</p>
                                                    <p className='name'>{`País: ${selectedInitiative.name}`}</p>
                                                    <p className='budget'>{`$${selectedInitiative.budget}`}</p>
                                                    <p className='amount'>{`X${selectedInitiative.amount}`}</p>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InitiativeList