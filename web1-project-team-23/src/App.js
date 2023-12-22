import './App.css';
import Card from './Components/card/Card';
import Header from './Components/header/Headr'
import Footer from './Components/Footer/Footer';
import NavBar from "./Components/NavBar/NavBar";
import NewComment from './Components/Main Video Card/NewComment';
import VideoCard from './Components/Main Video Card/VideoCard';
import VideoTest from "./Components/Main Video Card/VideoTest";
import Offical_section from './Components/Yousef/SectionOffical';
import Music_section from './Components/Yousef/SectionMusic';
function App() {
  return (
    <>
      <NavBar/>
      
      {/* <VideoCard/> */}

      <VideoTest/>
      <NewComment/>
      
      {/* <Header/>
      <Card/> */}

      {/*Yousef*/}
      {/* <Offical_section />
      <Music_section/> */}
      {/*Yousef*/}
      
      {/*Saif*/}
      <Footer/>
    </>
    
  );
}

export default App;
