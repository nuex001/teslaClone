import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import Cancel from "../../assets/cancel.svg"
import world from "../../assets/world.svg"
function Nav() {
    const menu = useRef();
    const toggleMenu = (e) => {
        e.preventDefault();
        menu.current.classList.toggle("active")
    }
    return (
        <>
            <nav>
                <Link to="/" className='logo'> <img src="/images/logo.svg" alt="" /><span>|careers</span></Link> 
                <ul>
                    <li>
                        <Link>Explore Jobs</Link>
                    </li>
                    <li>
                        <Link>Manufacturing</Link>
                    </li>
                    <li>
                        <Link>Ai</Link>
                    </li>
                    <li>
                        <Link>Internships</Link>
                    </li>
                    <li>
                        <Link>Veterans</Link>
                    </li>
                    <li>
                        <Link>About Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Profile</Link>
                    </li>
                    <li className="world">
                        <Link>
                        <img src={world}/>
                        Us</Link>
                    </li>
                </ul>
                <li className='menu' onClick={toggleMenu}>
                    <Link>Menu</Link>
                </li>
            </nav>
            <div className="menu-overlay" ref={menu}>
                <img src={Cancel} alt="cancel" className="cancel" onClick={toggleMenu} />
                <div className="mobileNav">
                    {/* <img src={Cancel} alt="cancel" className="cancel" /> */}
                  <ul>
                    <li>
                        <Link>Explore Jobs</Link>
                    </li>
                    <li>
                        <Link>Manufacturing</Link>
                    </li>
                    <li>
                        <Link>Ai</Link>
                    </li>
                    <li>
                        <Link>Internships</Link>
                    </li>
                    <li>
                        <Link>Veterans</Link>
                    </li>
                    <li>
                        <Link>About Us</Link>
                    </li>
                </ul>
                    <ul>
                    <li>
                        <Link>Profile</Link>
                    </li>
                    <li className="world">
                        <Link>
                        <img src={world}/>
                        Us</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav
/**
 *     --tds-modal-backdrop--opacity: 0.3;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
 */