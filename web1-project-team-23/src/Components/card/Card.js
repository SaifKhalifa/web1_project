import React from "react";
import VideoCard from "./VideoVard.js";

const Card = () => {

  const videos = [
    { link:"https://www.youtube.com/embed/AYbJsZMdzRs",title: "Should you become a web designer in 2022?",photo :"./franc.jpg",name : "Frances Guerrero",views: "156.9K" },
    {link:"https://www.youtube.com/embed/CgEZNJSeofs", title: "Learn web development as an absolute beginner",photo:"./lori.jpg" ,name:"Lori Ferguson", views: "458.4K" },
    {  link:"https://www.youtube.com/embed/_uQrJ0TkZlc",title: "Python tutorial - Python for beginners ", photo :"./louis.jpg", name : "Louis Crawford",views: "235.4K" },
    {  link:"https://www.youtube.com/embed/Tuw8hxrFBH8",title: "One of the greatest speeches ever ",  photo :"./larry.jpg",name : "Larry Lawson",views: "891.7K" },
    { link:"https://www.youtube.com/embed/i5OZQQWj5-I", title: " A trading platform - an easy start in trading ", photo :"./joan.jpg", name : "Joan Wallace",views: "891.7K" },
    {  link:"https://www.youtube.com/embed/gAv8OLZ3MMw",title: "  8 shocking bitcoin crypto predictions  ",  photo :"./carolyn.jpg",name : "Carolyn Ortiz",views: "891.7K" },

  ];

  return (
    <>
 
<div className="d-flex justify-content-between pt-5 pb-3">
  <h5>Traiding</h5>   
  <a class="btn btn-sm btn-primary" href="#!"style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>View more video</a>
</div>

<div className="section">
      <div className="row">
        {videos.map((video, index) => (
       
          <div key={index} className="col-lg-2 col-md-2 col-sm-2 mb-4 P d-flex ">
            <VideoCard {...video} />
          </div>
          
        ))}
      </div>
  </div>
      </>
  );
};

export default Card;
