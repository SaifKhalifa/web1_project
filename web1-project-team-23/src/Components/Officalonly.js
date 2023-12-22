import "./Mmusic.css" 
const OfficalNoTrue = (props) => {

    return (
        <div className="lcard">
            <div className="card" style={ {width: '24rem'} }     >
                
          <iframe  src={props.src} className="card-img-top" alt="...">
              </iframe>
        
    <div className="card-body">
    <a href="#" className="card-title">{props.title}</a>
  
        <div className="icon">
         <a href="#">     
            <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center" /></a>
            <a href="#" className="video-channel-name">{props.name}</a>
             
        </div>
      <p className="card-view">{props.views}</p>    
    </div>
  
        </div>
        </div>
 
   
  );
}

export default OfficalNoTrue;

