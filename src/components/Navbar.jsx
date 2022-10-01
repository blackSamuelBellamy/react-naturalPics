import '../componetsCSS/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to='/Home'><li>Home</li></Link>
                <Link to='/Galeria'><li>Galería</li></Link>
                <Link to='/Favoritos'><li>Favoritos</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
