import "./VideoCard.css";
import React from 'react';

const VideoCard = () => {
  return (
    <div className="col-md-8 col-lg-9 vstack gap-4">
      <div className="card">
        <div className="card-body">
          <iframe
            className="rounded w-100"
            height="450"
            src="https://www.youtube.com/embed/n_Cn8eFo7u8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
          <div className="d-flex my-3">
            <div>
              <h1 className="h4"> What's it like to work at Google? </h1>
              <div className="d-flex">
                <div className="avatar avatar-xxs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src="https://yt3.ggpht.com/ytc/AIf8zZSyX1SK7mK3yTq6z8O_5juKW03gDJWXewOckJDIX9g=s48-c-k-c0x00ffffff-no-rj"
                  />
                </div>
                <div className="aContiner">
                <div className="Comment">Frances Guerrero<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#4bd37b"/><path fill="#fff" d="M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z"/></svg></div>
                  </div>
              </div>
            </div>
            </div>
            <div className="bg-white">
                    <div className="Like"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2"/></svg>Liked (23K)</div>
                    <div className="Comment"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 640 512"><path fill="currentColor" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5.4-.9.7-1.1.8l-.2.2C1 327.2-1.4 334.4.8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352m240-176c0 112.3-99.1 196.9-216.5 207c24.3 74.4 104.9 129 200.5 129c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1.6 10.3.6 15.5z"/></svg>Comments (10K)</div>
                    <div className="View"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4" fill="currentColor"/><path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5"/></svg>458M Views</div>
                    <div className="Share"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M11 6.914V2.586L6.293 7.293l-3.774 3.774l3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1c0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914"/></svg>Share (3K)</div>
                </div>
          </div>
          </div>
          </div>)}

export default VideoCard;