import { useState } from 'react'

const ProjectCard = (channel, countries, price) => {

  const [budgetAmount, setBudgetAmount] = useState(0)

  const add = (cost) => {
    let initialPrice = 0
    let adding = initialPrice += cost
    setBudgetAmount(adding)
  }

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src="../../placeholder.svg" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{`${channel}`}</h5>
          {
            countries.forEach(country => {
              <img src={`${country.flag}`} className='img-fluid' width={100} />
            })
          }
          <p className="card-text">{`${price}`}.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
          <button className="add" onClick={add(price)}>+</button>
          <p>{`$${price}`}</p>
        </div>
      </div>

    </>
  )
}

export default ProjectCard