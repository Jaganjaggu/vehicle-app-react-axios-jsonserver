import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <section id='footer'>
                <div className='footer-section'>
                    <div className='footer-heading'>ROAD</div>
                    <div className='footer-lists'>
                        <ul className='footer-links'>
                            <li><a href="#intro">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#works">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-icon-section'>
                        <a href="www.facebook.com/" target='_blank'><div className='footer-icon'><i className=" footer-icon-color fa-brands fa-facebook"></i></div></a>
                        <a href="https://www.instagram.com/" target='_blank'><div className='footer-icon'><i className="footer-icon-color fa-brands fa-instagram"></i></div></a>
                        <a href="https://www.twitter.com/" target='_blank'><div className='footer-icon'><i className="fa-brands fa-twitter footer-icon-color"></i></div></a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer