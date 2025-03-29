import './App.css'
import Carts from './components/Carts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import WhyUs from './components/whyUs'

function App() {

  return (
    <>
    <div className="bgColor h-screen">

      <Hero />
      <Carts />
      <WhyUs />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
}

export default App
