import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Header from './Components/Rahaf/header/Headr';
import RahafCard from './Components/Rahaf/card/Card';
import OfficialSection from "./Components/Yousef/SectionOffical";
import MusicSection from "./Components/Yousef/SectionMusic";
import MainVideo from "./Components/MainVideoCard/MainVideo";

function App() {
  return (
    <>
      <NavBar />
    {/* -------------------- Rahaf --------------------*/}
      <Header/>
      <RahafCard/>

    {/* -------------------- Yousef -------------------- */}
      <OfficialSection/>
      <MusicSection/>

    {/* -------------------- Mahmoud -------------------- */}
      <div className='row justify-content-center align-items-center'>
          <div className='video-box mt-4 mx-5 w-75 col-md-6'>
              <MainVideo/>          
          </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
