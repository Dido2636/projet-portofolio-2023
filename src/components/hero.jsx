import toureiffel from "../image/toureiffel.png";
import github from "../image/github.png";
import icone from "../image/icone.png";
import box from "../image/box.png";
import linkind from "../image/linkind.png";

function Hero() {
  return (
    <>
      <div className="section-header">
        <div>
          <h5 className="text-header"> François Truchon</h5>
        </div>
        <div className="icone-header">
          <img src={github} alt="" />
          <img src={icone} alt="" />
          <img src={box} alt="" />
          <img src={linkind} alt="" />
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <h1>Enchanté de vous rencontrer</h1>
          <h1>
            Je suis <span className="underline-hero">François Truchon</span>
          </h1>
        </div>

        <div>
          <img className="tour-eiffel" src={toureiffel} />
        </div>

        <div className="box-small-text">
          <h6 className="small-text">
            Basé à Paris je suis un développeur Fullstack passionné par les
            applications web & l'accesibilité
          </h6>
        </div>

        <button className="button-projet">CONTACTEZ-MOI</button>
      </div>
    </>
  );
}

export default Hero;
