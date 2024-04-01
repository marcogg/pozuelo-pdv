/* eslint-disable react/prop-types */

import CounterCard from '../CounterCard/CounterCard'

const ProjectCard = ({ id, name, channel = '', flag = '', budget = 0, amount = 0, render = '' }, { ...props }) => {

  return (
    <>

      <div className="card projectCard text-grey" style={{ width: '18rem' }}>
        <img src={`${render}`} className="card-img-top render" />
        <div className="card-body">
          <h5 className="card-title poppins-regular">{`${channel}`.toUpperCase()}</h5>
          <p className="card-text poppins-medium">{`Costo unitario: $${budget}`}</p>
          <div className='d-flex align-items-center'>
            {
              <img key={id} src={`${flag}`} className='img-fluid flag-icon my-3' />
            }
            {
              <h6 className='poppins-light'>{`${name}`}</h6>
            }
          </div>
          {/* Counter */}
          <CounterCard key={props.id} id={id} channel={channel} amount={amount} budget={budget} country={name} flag={flag} />
        </div>
      </div>

    </>
  )
}

export default ProjectCard