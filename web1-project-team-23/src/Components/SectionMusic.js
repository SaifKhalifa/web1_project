import MusicCard from "./Music" 

function Music_section () {
    
return (
    <>
    <div className="section-title"> Music </div>
    
    <div className="section">
        
   <MusicCard time="12:12" title="Palestine my land song" views="8.3m views"  src="https://www.youtube.com/embed/3UbjgjfYC-I?si=eKZWi_W-cnz3rqlz"/>
   <MusicCard  time="06:47" title="Relax music for study" views="164.9k views"   src="https://www.youtube.com/embed/0ga7AQKhWvo?si=bB8zek4rrV6mqa4U"   />
   <MusicCard  time="10:23" title="The Best music of 2023 " views="745.3k views"  src="https://www.youtube.com/embed/KLuTLF3x9sA?si=snI8E-CysImZFeoX" />
   <MusicCard  time="07:10" title="this is video name " views="567.3k views"  src="https://www.youtube-nocookie.com/embed/15awIPVB5gI?si=zAVGoZWmYmAKQO0Qcontrols=0"/>
   <MusicCard  time="06:30" title="We will return to Palestine " views="12.3m views"  src="https://www.youtube.com/embed/Buf2ksKl358?si=kzVCLDeC1MZSvEBX" />
    </div>
    
    </>
); 
}
export default Music_section;
