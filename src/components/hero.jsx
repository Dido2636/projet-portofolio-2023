import toureiffel from '../image/toureiffel.png'
import traithero from '../image/traithero.png'


function Hero() {
    return (
        <div className='container'>
        <div className="hero-container" > 
            <div className="hero-text"> 
            <h1>Enchanter de vous rencontrer</h1>
            <h1>Je suis <span className='underline-hero'>François Truchon</span></h1>
            </div>

            <div>
            <img className="tour-eiffel" src={toureiffel} />
            </div>

            <div className="small-text">
            <h6>Basé à Paris je suis un développeur Fullstack passionné par les applications web & l'accesibilité</h6>
            </div>
        </div>
           

            <div>
            <img className='trait-hero' src={traithero} />
            </div>
            
           


        </div>


    )
}

export default Hero;