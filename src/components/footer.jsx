import github from "../image/github.png";
import icone from "../image/icone.png";
import box from "../image/box.png";
import linkind from "../image/linkind.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="div-footer">
          <div className="box-footer">
            <h1 className="title-footer">Contact</h1>
            <p className="footer-text">
              J'aimerai connaitre votre projet et savoir comment je pourrais
              vous aider.je pourrais vous aider. Remplissez le formulaire et je
              vous répondrai dès que possible dans les plus brefs délais
            </p>
          </div>

          <div className="form">
            <form>
              <label for="name" />
              <input type="text" placeholder="NAME" />
              <label for="email" />
              <input type="text" placeholder="EMAIL" />
              <textarea name="message" rows="5" cols="33" />
            </form>
            <button className="button-projet-footer">ENVOYER</button>
          </div>
        </div>

        <img className="cercle" src="src/image/cercle.png" />

        <hr className="trait-footer" />
      </div>
      <div className="section-footer-header">
        <div>
          <h5 className="text-footer-header"> François Truchon</h5>
        </div>
        <div className="icone-header">
          <img src={github} alt="" />
          <img src={icone} alt="" />
          <img src={box} alt="" />
          <img src={linkind} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
