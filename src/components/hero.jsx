import toureiffel from '../image/toureiffel.png'
import traithero from '../image/traithero.png'


function Hero() {
    return (
        
        <div className="hero-container" > 
            <div className="hero-text"> 
            <h1>Enchantez de vous rencontrer</h1>
            <h1>Je suis <span className='underline-hero'>François Truchon</span></h1>
            </div>

            <div>
            <img className="tour-eiffel" src={toureiffel} />
            </div>

            <div className="box-small-text">
            <h6 className='small-text'>Basé à Paris je suis un développeur Fullstack passionné par les applications web & l'accesibilité</h6>
            </div>

          
           <button className="button-projet">CONTACTEZ-MOI</button>
          
        </div>
           

            
            
           


      


    )
}

export default Hero;