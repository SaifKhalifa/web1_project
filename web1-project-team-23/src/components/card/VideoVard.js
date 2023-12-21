import React from "react";
import "./VideoVard.css"
const VideoCard = ({ link,title,photo,name , views }) => {
  return (
    <>
    <div className="card" >
    <iframe src={link} title="YouTube video" allowfullscreen=""></iframe> 
    <br />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <br />
        <div className="d-flex mt-3">
  <div className="avatar avatar-xxs me-2">
    <img className="avatar-img rounded-circle" src={photo} alt />
  </div>
  <div>
    <h6 className="mb-0 lh-1"> <a href="#!"> {name} <i className="bi bi-patch-check-fill text-success small" /> </a> </h6>
    <span className="ms-auto small"> {views}</span>
  </div>
</div>
      </p>
        
      </div>
=
    </>
    
  );
};

export default VideoCard;
