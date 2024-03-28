/* eslint-disable react/prop-types */
import { useInitiativeContext } from '../../context/InitiativesContext'

const ProjectCard = ({ channel = '', countries = '', price = '0' }) => {

  const context = useInitiativeContext()

  return (
    <>

      <div className="card projectCard" style={{ width: '18rem' }}>
        <img src="../../placeholder.svg" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{`${channel}`.toUpperCase()}</h5>
          <p className="card-text">{`Costo unitario: $${price}`}</p>
          {
            countries.map((country, index) => (
              <img key={index} src={`${country.flag}`} className='img-fluid flag-icon my-3' />
            ))
          }
          <div className='row justify-content-between align-items-center my-3'>
            <button className="btn btn-remove">-1</button>
            <p className="quantity">{context.eachCardAmount}</p>
            <button className="btn btn-add">+1</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProjectCard