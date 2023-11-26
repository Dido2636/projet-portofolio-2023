
import "./App.css";
import Grid from "./components/grid";
import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";
import Footer from "./components/footer";
import Footerheader from "./components/footerheader";


const projets = [
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/a2z2k-mkd3a.jpg",
    title: "AIRBNB-CLONE-2023",
    framework: "TAILWIND TYPESCRIPT REACT",
    
  },
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/aai6z-x7f39.jpg",
    title: "PORTFOLIO",
    framework: "TYPESCRIPT REACT",
    
  },
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/asown-n4fky.jpg",
    title: "POMODORO APP",
    framework: "TAILWIND TYPESCRIPT REACT",
    
  }, 
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/a5b4w-bu6jb.jpg",
    title: "EDITEUR MARKDOWN",
    framework: "SCSS TYPESCRIPT REACT",
    
  },
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/ayns1-liesn.jpg",
    title: "REST COUNTRIES API",
    framework: "CSS TYPESCRIPT VUE",
    
  },
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/at4cm-s0hyo.jpg",
    title: "APPLICATION DE CALCULATRICE",
    framework: "CSS TYPESCRIPT VUE",
    
  },
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/a5ven-ufboi.jpg",
    title: "DRUM MACHINE",
    framework: "STYLED COMPONENTS TYPESCRIPT VUE",
    
  },
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/aa542-iosbg.jpg",
    title: "SITE DE TOURISME DANS L'ESPACE",
    framework: "HTML CSS TYPESCRIPT",
    
  },
  {
    
    imageUrl: "https://s4.aconvert.com/convert/p3r68-cdx67/alarg-6jj0y.jpg",
    title: "RANDOM QUOTE APP",
    framework: "CSS REACT API",
    
  },
]

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Main/>
      <div className="grid-card">
      {projets.map((projet,index) => {
        return (
        <Grid key={index} 
        title={projet.title} 
        imageUrl={projet.imageUrl} 
        framework={projet.framework} 
        />
        )
      } ) }
      </div>
      <Footer/>
      <Footerheader/>
      













    </>
  );
}

export default App;
