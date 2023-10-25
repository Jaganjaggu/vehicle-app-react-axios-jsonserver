import React, { useRef } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header({ theme, setTheme }) {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <>
            <div className='nav-bar' >
                <div>
                   <Link to={'/'}> <i class="fa-solid fa-motorcycle fa-beat fa-2x" style={{ color: '#ffffff' }}></i></Link>
                </div>
                <div className='links ' ref={navRef}>

                    <ul className='nav-links'>
                        <li><Link to={'/'}><a>Home</a></Link></li>
                       <li><Link to={'/sell'}> <a>Sell</a></Link></li>
                     <li>  <Link to={'/view'}> <a>Products</a></Link></li>
                       {/* <li> <Link to={''}><a>Projects</a></Link></li> */}
                    </ul>
                    <a href=""><button className='contact-btn' style={{ fontSize: '14px' }}>Contact</button></a>

                    <div className=' nav-close-btn' >
                        <i onClick={showNavbar} style={{ border: 'none', margin: '20px', color: '#fff' }} class="fa-2x fa-solid fa-xmark" ></i>
                    </div>

                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="nav-btn">  <i onClick={showNavbar} style={{ border: 'none', margin: '20px', color: '#fff' }} class="fa-1x fa-solid fa-bars"></i></div>
                </div>
            </div>
        </>
    )
}

export default Header
