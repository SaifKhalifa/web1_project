
import "./Cardd.css"
const Card = (props) => {

return (

<div className="video-container" >
  
<a href="#" className="thumbnail" data-duration={props.time}>
  <div>
    
    <iframe 
     src="https://www.youtube.com/embed/3ck_FU5YkqE?si=0C2nxDdbGspXEXq7" width="100%" height="100%"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        </div>
        </a>
<section className="video-bottom-section">
  
  <a href="#">
    <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
  </a>
  <div className="video-details">
    <a href="#" className="video-title">{props.title}</a>
    <a href="#" className="video-channel-name">{props.name}</a>
    <div className="video-metadata">
      <span>{props.views} </span>
      
      
    </div>
  </div>
</section>
</div>
);

}
export default Card 