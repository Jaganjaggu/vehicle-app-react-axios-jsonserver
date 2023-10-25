import React, { useEffect, useState } from 'react'
import bikeimg from '../assets/landingimg.png'
import './View.css'
import { deleteABike, getAllBike } from '../services/allAPI'
import { Link } from 'react-router-dom'

function View() {
    const [deleteStatus, setDeleteStatus] = useState(false)
    const [allBike, setAllBike] = useState([])
    const getAllUploadedVehicle = async () => {
        const response = await getAllBike()
        setAllBike(response.data)
    }
    useEffect(() => {
        getAllUploadedVehicle()
        setDeleteStatus(false)
    }, [deleteStatus])
    const removeABike = async (id) => {
        await deleteABike(id)
        setDeleteStatus(true)
    }
    return (
        <>
            <div className='view-container'>
                <div className='view-bikes'>View Bikes</div>
                <div className='view-section'>
                    {allBike?.length > 0 ?
                        allBike?.map(item => (
                            <div className='card'>
                                <div className="bike-card">
                                    <img src={item.imagelink} alt="ImageLink" />
                                    <div>
                                        <h3 >{item.brand}</h3>
                                        <p>{item.model}</p>
                                        <p>{item.color}</p>
                                        <p style={{color:"Red", fontWeight:"600", fontSize:"20px"}}><span style={{marginRight:"5px",fontSize:"25px"}}>₹</span>{item.price}</p>
                                        <div className="button-container">
                                            <button onClick={() => removeABike(item.id)} className="cart-button">Delete</button>
                                            <Link to={`/edit/${item.id}`}><button className="buy-button">Edit</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <p className='nothintoshow'>Nothing to show</p>
                    }

                </div>
            </div>
        </>
    )
}

export default View