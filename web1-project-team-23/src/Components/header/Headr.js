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
                <a class="btn btn-primary stretched-link" href=" "> <i class="bi bi-file-earmark-play pe-1"></i>Watch now</a>
                 </div>
            </div>
         </div>
        </header>
    )
}

export default Header;
