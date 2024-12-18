// View.js
import "./Mmusic.css";
import OfficialCard from "./OfficalCard";
import { useState } from 'react';

const View = () => {
  const [showComponents, setShowComponents] = useState(false);

  const handleButtonClick = () => {
    setShowComponents(!showComponents);
  };

  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="btn btn-primary me-md-2"
          type="button"
          onClick={handleButtonClick}
        >
          View More Videos
        </button>
      </div>

      {showComponents && (
        
        <div className="container">
          {
            <div className="card">
            <OfficialCard title="new video 1" name="Lori ferguson" views="143.5k views" src="https://www.youtube.com/embed/_g4BiBcYdZQ?si=fGuQowZF4gj7yx3l"/>
            
          </div>
          }
          
          
        </div>
      )}
    </div>
  );
};

export default View;
