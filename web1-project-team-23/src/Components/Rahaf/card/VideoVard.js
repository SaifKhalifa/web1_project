import React from "react";
import "./VideoVard.css"
const VideoCard = ({ time,link,title,photo,name , views }) => {
  return (
    <>
    <div className="card1" >
    <div className="video" data-duration={time}>
    <div className="like"></div>
    <iframe src={link} title="YouTube video" allowfullscreen=""style={{ width: "125px", height: "140px" }}></iframe>  
    </div>
    <div className="d-flex align-items-center">
        <h5 className="card-title">{title} </h5>
          </div>
          <div className="row">
            <div className="Col">
    <p className="card-text" >
        <div className="d-flex  mt-0 mb-5">
  <div className="avatar avatar-sm "style={{ width: "20px", height: "20px",marginRight : "0.50rem"}}>
    <img className="avatar-img rounded-circle1" src={photo} alt />
  </div>
  <div className="d-flex flex-column">
    <h6 className=" mb-0 small font-weight-bold"> <a href="#!"className="text-muted" style={{ fontSize: "8px" }}> {name} <i className="bi bi-patch-check-fill text-success small" /> </a> </h6>
    <span className="ms-1 small text-muted "style={{ fontSize: "7px"}}> {views}</span>
</div>
</div>
      </p>
      </div>
        </div>
        </div>
      
    </>
    
  );
};

export default VideoCard;
