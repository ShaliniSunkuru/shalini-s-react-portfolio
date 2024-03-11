import {Link, NavLink} from 'react-router-dom';

function Header(){
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">
                    Shalini Sunkuru
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link' 
                             } 
                        >
                        About
                        </NavLink>
                        </li>
                        
                        <li className='nav-item'>
                        <NavLink 
                            to="/projects" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link' 
                             } 
                        >
                        Projects
                        </NavLink>
                        </li>

                        <li className='nav-item'>
                        <NavLink 
                            to="/resume" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link' 
                             } 
                        >
                        Resume
                        </NavLink>
                        </li>

                        <li className='nav-item'>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link' 
                             } 
                        >
                        Contact
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;