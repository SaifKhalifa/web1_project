

import OfficalTrue from "./OfficalCard";
import OfficalNoTrue from "./Officalonly";
import View from "./viewVideos";


function Offical_section () {
    
    return (
        <>
        <div className="section-title"> Offical Trailer </div>
        <View />
        <div className="section">
            
            <OfficalNoTrue  title="New Movies for 2024"    name="Yousef Shabib"   views="250.4k views"   src="https://www.youtube.com/embed/tbuZXvNrXYM?si=PQjNLAReCThpL7m7"  />
            <OfficalTrue title="Create app mobile by AI" name="Lori ferguson"   views="143.5k views"  src="https://www.youtube.com/embed/_g4BiBcYdZQ?si=fGuQowZF4gj7yx3l"/>
            <OfficalNoTrue  title="learn react in 5 minuties"  name="Louis Crawford" views="951.2k views"   src="https://www.youtube.com/embed/LbsMZdr2wqg?si=4KzYgJZIPBTKCoHo" />
        </div>
        </>
); 
}
export default Offical_section; 
