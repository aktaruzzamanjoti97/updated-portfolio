import "./App.css";
import MyCarousal from "./components/MyCarousal/MyCarousal";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import TitleMessage from "./components/TitleMessage/TitleMessage";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
    </div>
  );
};

export default App;
