import "./App.css";
import Grid from "./components/grid";
import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";
import Footer from "./components/footer";
import Effet from "./components/Effet";
import { useState } from "react";

const projets = [
  {
    imageUrl: "https://i.imgur.com/ik2MfjF.jpg",
    title: "AIRBNB-CLONE-2023",
    framework: ["TAILWIND", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "https://i.imgur.com/3yNJlm4.png",
    title: "PORTFOLIO",
    framework: ["TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "https://i.imgur.com/Mcw9dld.png",
    title: "POMODORO APP",
    framework: ["TAILWIND", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "https://i.imgur.com/hAIVk0B.png",
    title: "EDITEUR MARKDOWN",
    framework: ["SCSS", "TYPESCRIPT", "REACT"],
  },
  {
    imageUrl: "https://i.imgur.com/t8Q7eSY.png",
    title: "REST COUNTRIES API",
    framework: ["CSS", "TYPESCRIPT", "VUE"],
  },
  {
    imageUrl: "https://i.imgur.com/hyoS7fZ.png",
    title: "APPLICATION DE CALCULATRICE",
    framework: ["CSS", "TYPESCRIPT", "VUE"],
  },
  {
    imageUrl: "https://i.imgur.com/5tw58tT.png",
    title: "DRUM MACHINE",
    framework: ["STYLED COMPONENTS", "TYPESCRIPT", "VUE"],
  },
  {
    imageUrl: "https://i.imgur.com/CN0CfWn.png",
    title: "SITE DE TOURISME DANS L'ESPACE",
    framework: ["HTML", "CSS", "TYPESCRIPT"],
  },
  {
    imageUrl: "https://i.imgur.com/WjHGcmh.png",
    title: "RANDOM QUOTE APP",
    framework: ["CSS", "REACT", "API"],
  },
];

function App() {
  const [search, setSearch] = useState("");
  const processedProjects =
    search === ""
      ? projets
      : projets.filter((projet) => {
          return projet.framework.includes(search.toUpperCase());
        });

  return (
    <>
      <Effet />
      <Hero />
      <Main />
      <div className="projet-button">
        <div>
          <h1 className="text-projet">Projets</h1>
        </div>
        <div className="box-button">
          <input
            className="text-input"
            type="text"
            onChange={(e) => setSearch(() => e.target.value)}
            id="taskInput"
            placeholder="CHOIX DU FRAMEWORK"
          />
        </div>
      </div>
      <div className="grid-card">
        {processedProjects.map((projet, index) => {
          return (
            <Grid
              key={index}
              title={projet.title}
              imageUrl={projet.imageUrl}
              framework={projet.framework}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
