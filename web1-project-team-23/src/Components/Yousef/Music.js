import "./Mmusic.css";

const MusicCard = (props) => {
    return (        
      <div className="card" style={ {width: '16.1rem'} }>
        <div className="video"  data-duration={props.time} >
          <div className="like"></div>
          <iframe  src={props.src} className="card-img-top" alt="...">
          </iframe>
        </div>
        <div className="card-body">
          <h5 href="#" className="card-title">{props.title}</h5>
            
          <p className="card-views">{props.views}</p>
        </div>
      </div>
  );
}

export default MusicCard;



