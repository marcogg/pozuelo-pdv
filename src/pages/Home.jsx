import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { useInitiativeContext } from '../context/InitiativesContext'
import InitiativeList from '../components/InitiativeList/InitiativeList'

const Home = () => {

  const context = useInitiativeContext()


  return (
    <>
      {/* Begin: Navigation */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-bottom align-items-center">
        <div className="container">
          <Link className="navbar-brand" to={'/'}><img src='./../pozueloPropelland.svg' width={230} className="mx-5 logo" /></Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          {/* Budget summary fixed */}
          <p className="text-center poppins-light budget available">💰 Disponible: <span className="poppins-bold">{`$${context.budgetAmount}`}</span></p>
          <p className="text-center poppins-light budget invested">💸 Invertido: <span className="poppins-bold">{`$${context.investedAmount}`}</span></p>
        </div>
      </nav>
      {/* End: Navigation */}
      {/* Begin Header */}
      <section className="header">
        <div className="container">
          <div className="row justify-content-center mt-5 align-items-center">
            <div className="col-12 col-md-8 col-lg-8">
              <h1 className="text-center">Controla el presupuesto </h1>
              <h4 className="text-center poppins-light">de las iniciativas Pozuelo en Punto de Venta</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-4">
              <img src="../pozuelo-presupuesto.png" className="img-fluid mt-5" />
            </div>
          </div>
        </div>
      </section>
      {/* End> Header */}
      {/* Begin Counter */}
      <section className="summary mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-11 box pt-4">
              <h3 className="text-center poppins-light">Presupuesto Disponible: <span className="poppins-bold">{`$${context.budgetAmount}`}</span></h3>
              <h4 className="text-center poppins-light text-red">Presupuesto Invertido: <span className="poppins-bold">{`$${context.investedAmount}`}</span></h4>
              {/* Initiative list */}
              <InitiativeList />
            </div>
          </div>
        </div>
      </section>
      {/* End: Counter */}
      {/* Begin: Projects */}
      <section>
        {/* Punto Pozuelo */}
        <div className="container my-3 py-5">
          <div className="row">
            <h2 className="text-center mt-5 poppins-bold title initiative">Punto Pozuelo</h2>
          </div>
          <div className="row justify-content-evenly">
            {
              context.PuntoPozuelo.map((initiative, index) => (
                <ProjectCard key={index} id={initiative.id} initiative={initiative.initiative} channel={initiative.channel} flag={initiative.flag} budget={initiative.budget} render={initiative.render} amount={initiative.amount} name={initiative.name} />
              )
              )
            }
          </div>
        </div>
        {/* Descubre Mundo Pozuelo */}
        <div className='container-full bg-grey pb-5'>
          <div className="container my-3 py-5">
            <div className="row">
              <h2 className="text-center mt-5 poppins-bold title initiative">Descubre Mundo Pozuelo</h2>
            </div>
            <div className="row justify-content-evenly">
              {
                context.DescubreMundoPozuelo.map((initiative, index) => (
                  <ProjectCard key={index} id={initiative.id} initiative={initiative.initiative} channel={initiative.channel} flag={initiative.flag} budget={initiative.budget} render={initiative.render} amount={initiative.amount} name={initiative.name} />
                )
                )
              }
            </div>
          </div>
        </div>
        {/* Pozuelo Sens */}
        <div className="container my-3 py-5">
          <div className="row">
            <h2 className="text-center mt-5 poppins-bold title initiative">Pozuelo Sens</h2>
          </div>
          <div className="row justify-content-evenly">
            {
              context.PozueloSens.map((initiative, index) => (
                <ProjectCard key={index} id={initiative.id} initiative={initiative.initiative} channel={initiative.channel} flag={initiative.flag} budget={initiative.budget} render={initiative.render} amount={initiative.amount} name={initiative.name} />
              )
              )
            }
          </div>
        </div>
        {/* Promotores Pozuelo */}
        <div className='container-full bg-grey pb-5'>
          <div className="container my-3 py-5">
            <div className="row">
              <h2 className="text-center mt-5 poppins-bold title initiative">Promotores Pozuelo</h2>
            </div>
            <div className="row justify-content-evenly">
              {
                context.PromotoresPozuelo.map((initiative, index) => (
                  <ProjectCard key={index} id={initiative.id} initiative={initiative.initiative} channel={initiative.channel} flag={initiative.flag} budget={initiative.budget} render={initiative.render} amount={initiative.amount} name={initiative.name} />
                )
                )
              }
            </div>
          </div>
        </div>
        {/* Pozuelo Lab*/}
        <div className="container my-3 py-5 mb-5">
          <div className="row">
            <h2 className="text-center mt-5 poppins-bold title initiative">Pozuelo Lab</h2>
          </div>
          <div className="row justify-content-evenly">
            {
              context.PozueloLab.map((initiative, index) => (
                <ProjectCard key={index} id={initiative.id} initiative={initiative.initiative} channel={initiative.channel} flag={initiative.flag} budget={initiative.budget} render={initiative.render} amount={initiative.amount} name={initiative.name} />
              )
              )
            }
          </div>
        </div>
        {/* End: Projects */}
      </section>
    </>
  )
}

export default Home