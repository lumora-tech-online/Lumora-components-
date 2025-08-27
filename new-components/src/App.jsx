import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import LoginForm from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import ResetPassword from './components/ResetPassword'
import Hero from './components/Container'
import Success from './components/Alerts/Success'
import Error from './components/Alerts/Error'
import Info from './components/Alerts/Info'
import Warning from './components/Alerts/Warning'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      {/* <ProfileMenu /> */}
      <Success />
      <Error />
      <Info />
      <Warning />
      {/* <Signup />
      <ResetPassword/>
      <LoginForm /> */}
      <Footer />
    </>
  )
}

export default App
