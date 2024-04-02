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
                                <table className="table">
                                    {
                                        selectedElements.length <= 0 ? '' :
                                            (<thead>
                                                <tr>
                                                    <th scope="col">Iniciativa</th>
                                                    <th scope="col">Canal</th>
                                                    <th scope="col">País</th>
                                                    <th scope="col">Precio</th>
                                                    <th scope="col">Cantidad</th>
                                                </tr>
                                            </thead>
                                            )
                                    }
                                    <tbody>
                                        {
                                            context.selectedElements.map(selectedInitiative => {
                                                if (selectedInitiative.amount > 0) {
                                                    return (
                                                        <tr key={selectedInitiative.id}>
                                                            <th scope="row">{selectedInitiative.initiative}</th>
                                                            <td>{selectedInitiative.channel}</td>
                                                            <td>{`${selectedInitiative.name}`}</td>
                                                            <td>{`$${selectedInitiative.budget}`}</td>
                                                            <td>{`X${selectedInitiative.amount}`}</td>
                                                        </tr>
                                                    );
                                                }
                                                return null; // Devuelve null si no quieres renderizar nada
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InitiativeList