import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Header from './Components/Rahaf/header/Headr';
import RahafCard from './Components/Rahaf/card/Card';
function App() {
  return (
    <>
      <NavBar />
    {/* -------------------- Rahaf --------------------*/}
      <Header/>
      <RahafCard/>
    {/* --------------------Yousef-------------------- */}

      <Footer />
    </>
  );
}

export default App;
