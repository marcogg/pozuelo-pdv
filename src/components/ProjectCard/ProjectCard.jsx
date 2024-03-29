/* eslint-disable react/prop-types */

import CounterCard from '../CounterCard/CounterCard'

const ProjectCard = ({ channel = '', countries = '', price = '0' }) => {

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
          {/* Counter */}
          <CounterCard />
        </div>
      </div>

    </>
  )
}

export default ProjectCard