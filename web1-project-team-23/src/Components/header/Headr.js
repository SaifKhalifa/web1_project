import React from 'react';
import './header.css'
function Header() {
    const headerStyle = {
        backgroundImage: 'url("/image.jpg")', // Assuming image.jpg is directly in the public directory
        backgroundSize: 'cover',
        color: '#ffffff',
        textAlign: 'center',
        padding: '5px 0',
        height: '320px',
       
    };

    return (


        <header style={headerStyle}>
<div className="p-4 p-sm-5 position-relative">
      <div className="d-flex align-items-center mb-3">
                <div className="avatar avatar-xxs me-2">
                    <img className="avatar-img rounded-circle" src="/franc.jpg" alt />
                </div>
                <h6 className="mb-0"> <a className="text-white" href="#!"> Frances Guerrero </a> </h6>
                <span className="ms-1 ms-sm-3 small text-white"> 156.9K views</span>
            </div>
            <div className="container">
            <div className="d-flex justify-content-between pt-2 pb-3">
               <h1 class="text-white">How does the stock market work?</h1>
                </div>
                <div className="d-flex justify-content-between pt-1 pb-2">
                <p class="text-white">Suspicion neglected he resolving agreement perceived at an. </p>
                </div>
                <div className="d-flex justify-content-between pt-1 pb-1">
                <a class="btn btn-primary stretched-link" href=" "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-play" viewBox="0 0 16 16">
  <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg> Watch now</a>
                 </div>
            </div>
         </div>
        </header>
    )
}

export default Header;
