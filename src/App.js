import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Fragment } from 'react'
export default function App() {
  return (
    <Fragment>    
      <Navbar/>
      <Home/>
    </Fragment>
  )
}