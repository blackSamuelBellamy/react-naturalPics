import '../componetsCSS/home.css'
import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import Cloud1 from '../images/cloud1.png'
import Cloud2 from '../images/cloud2.png'
import Cloud3 from '../images/cloud3.png'
import Cloud4 from '../images/cloud4.png'
import Cloud5 from '../images/cloud5.png'

const Home = () => {

    const { notFound } = useContext(DataContext)
    return (
    
            <div className="banner">
                <div className= {!notFound && "clouds"}>
                    <img src={Cloud1} alt="cloud" tyle={{ '--1': 1 }} />
                    <img src={Cloud2} alt="cloud" style={{ '--i': 2 }} />
                    <img src={Cloud3} alt="cloud" style={{ '--i': 3 }} />
                    <img src={Cloud4} alt="cloud" style={{ '--i': 4 }} />
                    <img src={Cloud5} alt="cloud" style={{ '--i': 5 }} />
                    <img src={Cloud1} alt="cloud" style={{ '--i': 10 }} />
                    <img src={Cloud2} alt="cloud" style={{ '--i': 9 }} />
                    <img src={Cloud3} alt="cloud" style={{ '--i': 8 }} />
                    <img src={Cloud4} alt="cloud" style={{ '--i': 7 }} />
                    <img src={Cloud5} alt="cloud" style={{ '--i': 6 }} />
                </div>
                <h1>Natural pics</h1>
            </div>
    
    )
}

export default Home