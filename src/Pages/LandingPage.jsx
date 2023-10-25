import React from 'react'
import landingimg from '../assets/landingimg.png'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            <div className='landing-container'>
                <div className='landing-section'>
                    <div className='landing-left'>
                        <h1>Find Your</h1>
                        <h1>Bike</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum dolores ducimus exercitationem iure porro. Id quia tempore facilis expedita quas</p>
                        <div className='landing-right'>
                            <Link to={'/view'}><button className='filled-button'>Buy</button></Link>
                            <Link to={'/sell'}> <button className='not-filled-button'>Sell</button></Link>
                        </div>
                    </div>
                    <div>
                        <img className='landing-img' src={landingimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage