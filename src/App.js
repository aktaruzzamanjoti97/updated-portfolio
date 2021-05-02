import "./App.css";
import MyCarousal from "./components/MyCarousal/MyCarousal";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
import AboutMe from "./pages/AboutMe/AboutMe";  
import Skills from "./pages/Skills/Skills";

const App = () => {
  return (
    <div  className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/background/1.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <AboutMe />
            </Fade>
          </Container>
          </div>
        </Parallax>
      </div>
      <Skills />
    </div>
  );
};

export default App;
