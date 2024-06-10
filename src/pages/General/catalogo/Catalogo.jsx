import './Catalogo.css'
import DielectricoMiniatura from '../../../assets/Dielectrico-miniatura.png'
import CapacitanciaMiniatura from '../../../assets/Capacitancia-miniatura.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Preloader } from '../preloader/Preloader'

export function Catalogo() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    window.open('https://calculadoradecapacitancia.netlify.app/index.html')
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className='body-catalogo'>
          <h1 className='body-catalogo-title'>Catalogo de Simuladores</h1>
          <div className='catalogo-container'>
            <div className='catalogo-item'>
              <img
                src={CapacitanciaMiniatura}
                alt='Capacitancia'
                className='catalogo-image'
                onClick={handleButtonClick}
              />
              <h1 className='catalogo-title' onClick={handleButtonClick}>
                Capacitancia
              </h1>
            </div>
            <div className='catalogo-item'>
              <img
                src={DielectricoMiniatura}
                alt='Dielectrico'
                className='catalogo-image'
                onClick={() => navigate('/dielectric')}
              />
              <h1 className='catalogo-title' onClick={() => navigate('/dielectric')}>
                Dielectrico
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
