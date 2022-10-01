import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import  { useContext } from 'react'
import { DataContext } from './hooks/DataContext'
import NotFound from './views/NotFound'


const App = () => {

  const { notFound } = useContext(DataContext)
  return (
    <div className="container">
      <Navbar />
      {notFound && <NotFound />}
      <Outlet />
    </div>
  )
}

export default App;
