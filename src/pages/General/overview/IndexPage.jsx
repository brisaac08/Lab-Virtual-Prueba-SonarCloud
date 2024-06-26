import { useState, useEffect } from 'react'
import './IndexPage.css'
import { Header } from '../../../components/overview/Header'
import { Footer } from '../../../components/overview/Footer'
import { HomeSlider } from '../../../components/overview/HomeSlider'
import { Selectors } from '../../../components/overview/Selectors'
import { InformationImage } from '../../../components/overview/InformationImage'
import { CookiesPopUp } from '../../General/cookies/CookiesPopUp'
import { Preloader } from '../../General/preloader/Preloader'

export function IndexPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className='body-index'>
          <CookiesPopUp />
          <Header />

          <section>
            <main>
              <HomeSlider />
              <Selectors />
              <InformationImage />
            </main>
          </section>

          <Footer />
        </div>
      )}
    </div>
  )
}
