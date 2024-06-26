import '../styles/overview/Header.css'
import logolabs from '../../assets/logowithoutbackground.png'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <div>
      <section>
        <header className='header-index'>
          <img src={logolabs} className='logo-overview' />
          <h2 className='ludebra-title'>LUDEBRA LABS</h2>
          <button className='boton' onClick={() => navigate('login')}>
            Iniciar Sesion
          </button>
        </header>
      </section>
    </div>
  )
}
