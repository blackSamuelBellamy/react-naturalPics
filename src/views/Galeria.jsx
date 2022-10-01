import { useContext } from "react"
import { DataContext } from "../hooks/DataContext"
import '../componetsCSS/gallery.css'
import Heart from "../components/Heart"

const Galeria = () => {

    const { fotos, setFav, fav, setButterfly } = useContext(DataContext)
    const sizing = (index) => {
        if (index % 5 === 0) return 'photo alto'
        if (index % 3 === 0) return 'photo ancho'
        if(index) return 'photo'
    }

     const favorites = e => {

        setButterfly(false)
        let ruta
        let imagen
        const click = e.target.parentNode.tagName
        let path = e.target.parentNode.childNodes[0] 

        if(click === 'DIV') { 
            imagen = e.target.parentNode.childNodes[1]   
            
            path.firstChild.firstChild.setAttribute('fill', 'red')
            

        } else if(click === 'svg'){
            imagen = e.target.parentNode.parentNode.parentNode.childNodes[1]
            path.setAttribute('fill', 'red') 
        } 

        ruta = imagen.getAttribute('src') 
        setFav([...fav, ruta])
        
    }

    return (
        <div className="gallery">
            {
                fotos.map((pic, index) => (
                    <div key={pic.id} className={sizing(index)}
                    onClick= {favorites}>                
                        <div className="heart"> 
                        <Heart />
                        </div> 
                        <img src={pic.src} alt={pic.alt} />
                        <p>{pic.alt}</p>
            
                    </div>))
            } 
        </div>
    )

}

export default Galeria
