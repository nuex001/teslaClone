import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
function SideBar({ setCurrentSec }) {
    const ref = useRef()
    const navigateTo = (e) => {
        e.preventDefault();
        const no = e.target.getAttribute("data-index");
        setCurrentSec(parseInt(no))
    }
    const toggleSubMenu = (e) => {
        e.preventDefault();
        ref.current.classList.toggle("active")
    }
    window.addEventListener("scroll", () => {
        const topel = ref.current.offsetTop;
        if (window.pageYOffset > topel) {
            ref.current.classList.add("sticky")
        }else{
            ref.current.classList.remove("sticky")
        }
    })

    return (

        <div ref={ref} className="sideBarSec">
            <div className="subMenu" onClick={toggleSubMenu}>
                <h4>Article Menu</h4>
                <BsChevronDown className='icon' />
            </div>
            <ul className="sidebar">
                <form action="">
                    <button><AiOutlineSearch className='serach' /></button>
                    <input type="text" placeholder='Search' />
                </form>
                <h2>In This Article</h2>
                <li>
                    <Link to="#order"
                        onClick={navigateTo}
                        data-index={1}
                    >
                        Place an Order
                    </Link>
                </li>
                <li>
                    <Link to="#refer"
                        onClick={navigateTo}
                        data-index={2}
                    >
                        Refer a Friend
                    </Link>
                </li>
                <li>
                    <Link to="#earn"
                        onClick={navigateTo}
                        data-index={3}
                    >
                        Earn Loyalty Credits
                    </Link>
                </li>
                <li>
                    <Link to="#redeem"
                        onClick={navigateTo}
                        data-index={4}
                    >
                        Redeem Credits for Awards
                    </Link>
                </li>
                <li>
                    <Link to="#explore"
                        onClick={navigateTo}
                        data-index={5}
                    >
                        Explore Your Loot Box
                    </Link>
                </li>
                <li>
                    <Link to="#terms"
                        onClick={navigateTo}
                        data-index={6}
                    >
                        Terms and Conditions
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar

