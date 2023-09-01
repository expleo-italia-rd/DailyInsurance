import './Style/App.css'
import { Route, Routes,  } from 'react-router-dom'
import Login from './Pages/Login'
import HomeMap from './Componets/HomeMap'
import DefaultNavbar from './Componets/DefaultNavbar'
import Footer from './Componets/Footer'
export function App() {
  return (
    <>
      <DefaultNavbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/map" element={<HomeMap/>} />
      </Routes>
      <Footer/>
    </>
  )
}
