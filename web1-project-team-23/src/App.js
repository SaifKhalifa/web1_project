import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Headr'
import Footer from './Components/Footer/Footer';
import NavBar from "./Components/NavBar/NavBar";
import NewComment from './Components/Main Video Card/NewComment';
import VideoCard from './Components/Main Video Card/VideoCard';
import VideoTest from "./Components/Main Video Card/VideoTest";
function App() {
  return (
    <>
      <NavBar />
      
     {/*  <VideoCard/> */}
      <VideoTest/>
      <NewComment/>
      
      <Header/>
      <Card/>

      <Footer/>
    </>
    
  );
}

export default App;
