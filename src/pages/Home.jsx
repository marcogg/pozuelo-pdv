import { Link } from "react-router-dom"
import { useState } from "react"
import initiativesList from '../assets/db.json'
import ProjectCard from "../components/ProjectCard/ProjectCard"

const Home = () => {

  const PuntoPozuelo = initiativesList[0].PuntoPozuelo
  const [budgetAmount, setbudgetAmount] = useState(74500)
  const [investedAmount, setinvestedAmount] = useState(0)

  return (
    <>
      {/* Begin: Navigation */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/#'}><img src='./../pozueloPropelland.svg' width={230} className="mx-5" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
      {/* End: Navigation */}
      {/* Begin Header */}
      <section className="header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <h1 className="text-center">Controla el presupuesto </h1>
              <h4 className="text-center poppins-light">de las iniciativas Pozuelo en Punto de Venta</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <img src="../pozuelo-presupuesto.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section >
      {/* End> Header */}
      {/* Begin Counter */}
      <section className="summary mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 box">
              <h3 className="text-center poppins-light">Presupuesto Disponible: <span className="poppins-bold">{`$${budgetAmount}`}</span></h3>
              <h4 className="text-center poppins-light">Presupuesto Invertido: <span className="poppins-bold">{`$${investedAmount}`}</span></h4>
            </div>
          </div>
        </div>
      </section>
      {/* End: Counter */}
      {/* Begin: Projects */}
      <section>
        {/* Punto Pozuelo */}
        <div className="container">
          <div className="row">
            <h3 className="text-center mt-5 poppins-bold">Punto Pozuelo</h3>
          </div>
          <div className="row">
            {
              PuntoPozuelo.forEach(initiative => {
                <ProjectCard key={initiative.id} channel={initiative.channel} country={initiative.countries} price={initiative.budget} />
                console.log('OK')
              })
            }
          </div>
        </div>
      </section>
      {/* End: Projects */}
    </>
  )
}

export default Home