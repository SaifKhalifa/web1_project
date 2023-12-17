import LogoButton from './Logo';
import SearchButton from "./SearchButton";
import SettingsButton from "./SettingsButton";
import NotificationButton from "./NotificationButton";
import Profile from './Profile';
import "./NavBarStyle.css";
const NavBar = () =>
{
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "white"}}>
            
            <div className="container-fluid">
                <LogoButton/>
                
                <div className="input-group flex-nowrap w-25 ms-2">
                    <SearchButton/>
                    <input className="form-control me-2 searchBar" type="search" placeholder="Search..." aria-label="Search"/>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item fw-bold">
                            <a className="nav-link active" aria-current="page" href="#">Overview</a>
                        </li>
                        <li className="nav-item fw-bold">
                            <a className="nav-link" href="#">Subscriptions</a>
                        </li>
                        <li className="nav-item fw-bold">
                            <a className="nav-link" href="#">Streams</a>
                        </li>
                        <li className="nav-item fw-bold">
                            <a className="nav-link" href="#">Library</a>
                        </li>                                                    
                    </ul>
                    <div className='ms-auto'>
                        <SettingsButton/>
                        <NotificationButton/>
                        
                    </div>
                    <Profile/>
                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;