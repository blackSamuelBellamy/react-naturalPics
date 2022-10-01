import { Link } from 'react-router-dom'
import '../componetsCSS/notFound.css'
import  { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'

const NotFound = () => {

    const { setNotFound } = useContext(DataContext)


    return (
        <div className='notFound'>
          <Link to={'/Home'}><button
          onClick={() => setNotFound(false)}>Regresar</button></Link>  
        </div>
    )
}

export default NotFound
