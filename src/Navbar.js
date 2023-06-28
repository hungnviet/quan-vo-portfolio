import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
    const path = useLocation();
    console.log(path);
    return (
        <nav className="navbar" >
            <div className="links">
                <Link to="Homepage" ><span style={{ color: path.pathname === '/Homepage' ? '#8B4513' : '' }}>HOME</span></Link>
                <Link to="Project"><span style={{ color: path.pathname === '/Project' ? '#8B4513' : '' }}>PROJECTS</span></Link>
                <Link to="Experience"><span style={{ color: path.pathname === '/Experience' ? '#8B4513' : '' }}>EXPERIENCE</span></Link>
            </div>
        </nav>
    );
}

export default Navbar;