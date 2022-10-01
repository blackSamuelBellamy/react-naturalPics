import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()


export const States = ({ children }) => {

    const [fotos, setFotos] = useState([])
    const [fav, setFav] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [butterfly, setButterfly] = useState(true)

    const takingPhotos = async () => {

       try {

        const endPoint = '/fotos.json'
        const res = await fetch(endPoint)
        const data = await res.json()

        const newArr = data.photos.map(item => ({
            id: item.id,
            alt: item.alt,
            like: item.liked,
            src: item.src.original
        }))

        setFotos(newArr)
       } catch  {
            setNotFound(true)
       }
    }

    useEffect(() => {
        takingPhotos()
    },[])

    const favorites = { fav, setFav, fotos, notFound, setNotFound,
    setButterfly, butterfly }
    
    return (
        <DataContext.Provider value={favorites}>
            {children}
        </DataContext.Provider>
    )
}