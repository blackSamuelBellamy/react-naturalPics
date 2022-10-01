import { useContext } from "react"
import { DataContext } from "../hooks/DataContext"
import '../componetsCSS/favoritos.css'

const Favoritos = () => {

    const { fav, setFav, butterfly, setButterfly } = useContext(DataContext)
    const favoritesArr = new Set(fav)
    const refresh = () => {
        setFav([])
        setButterfly(true)
    }
    
    return (
        <div className="favoritos">

            {butterfly && <div className="animations">
                <h2> Aun no has marcados tus paisajes favoritos en la galería</h2>
            </div> }

            {!butterfly && <button className="vaciar"
            onClick={refresh}>Escoger nuevos Paisajes</button>}

            { [...favoritesArr].map(pic =>
                <img src={pic} key={pic} alt='favorite' className="favoriteImg" />)} 
        </div>
    )
}

export default Favoritos
