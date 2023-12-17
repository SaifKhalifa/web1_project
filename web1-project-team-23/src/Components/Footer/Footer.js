import "./FooterStyle.css";
import AppStoreLogo from "./appstore_logo.png";
import playStoreLogo from "./playstore_logo.png"
const Footer = () => {
    return (
        <div className="pageFooter">
            <footer className="py-3 my-0 ms-4">
                    <ul className="nav justify-content-left pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Support</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Docs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Privacy & terms</a></li>                        
                        <li className="text-end me-4">
                            <img src={AppStoreLogo} alt="app store download" className="store-logo"></img>
                            <img src={playStoreLogo} alt="app store download" className="ms-3 store-logo"></img>
                        </li>
                        <li className="text-body-secondary">
                            Ⓒ2023 Webestica All rights reserved Supposing so be resolving breakfast am or perfectly.
                            Is drew am hill from me.
                            <br></br> 
                            Valley by oh twenty direct me so.
                            Departure defective arranging rapturous did believe him all had supported.
                        </li>
                    </ul>                    
            </footer>
        </div>
    );
   };
   
   export default Footer;