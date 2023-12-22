import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Headr'
import Footer from './Components/Footer/Footer';
import NavBar from "./Components/NavBar/NavBar";
import NewComment from './Components/Main Video Card/NewComment';
import VideoCard from './Components/Main Video Card/VideoCard';
import VideoTest from "./Components/Main Video Card/VideoTest";
import Offical_section from './Components/SectionOffical';
import Music_section from './components/SectionMusic';
function App() {
  return (
    <>
      <NavBar />
      
     {/*  <VideoCard/> */}
      <VideoTest/>
      <NewComment/>
      
      <Header/>
      <Card/>
      <Offical_section />
      <Music_section/>
      <Footer/>
    </>
    
  );
}

export default App;
