import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div className="container-full container-vh">
        <div className="row justify-content-center align-items-center">
          <div className='col-8 col-md-8 col-lg-8 text-center'>
            <img className="img-fluid" src={'../../error.png'} />
            <h2>Oops! El servidor lo hizo de nuevo</h2>
            <p>Intenta <Link>regresar al inicio</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage