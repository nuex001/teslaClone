import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import Cancel from "../assets/cancel.svg"
function Nav() {
    const menu = useRef();
    const toggleMenu = (e) => {
        e.preventDefault();
        menu.current.classList.toggle("active")
    }
    return (
        <>
            <nav>
                <Link to="/"> <img src="/images/logo.svg" alt="" /></Link>
                <ul>
                    <li>
                        <Link>Model S</Link>
                    </li>
                    <li>
                        <Link>Model 3</Link>
                    </li>
                    <li>
                        <Link>Model X</Link>
                    </li>
                    <li>
                        <Link>Model Y</Link>
                    </li>
                    <li>
                        <Link>Solar Roof</Link>
                    </li>
                    <li>
                        <Link>Solar Panels</Link>
                    </li>
                    <li>
                        <Link>Powerwall</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link>Shop</Link>
                    </li>
                    <li>
                        <Link>Account</Link>
                    </li>
                    <li>
                        <Link>Menu</Link>
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
                            <Link to="#"
                                onClick={toggleMenu}
                            >Model S</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Model 3</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Model X</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Model Y</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Solar Roof</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Solar Panels</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Powerwall</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Existing Inventory</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Used Inventory</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Trade-In</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Shop</Link>
                        </li>
                        <li>
                            <Link to="#"
                                onClick={toggleMenu}
                            >Account</Link>
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