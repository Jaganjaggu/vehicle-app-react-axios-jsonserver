import React from 'react'
import sellimg from '../assets/landingimg.png'
import './Sell.css'
import { useState } from 'react'
import { uploadBike } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Sell({bikeInfo,setBikeInfo}) {
    const navigate = useNavigate();

    console.log(bikeInfo);

    const handleSubmit = async (e) => {
        const {sellerName,sellerPhone,brand,model,color,imagelink,price} = bikeInfo
        e.preventDefault()
        if(sellerName && sellerPhone && brand && model && color && imagelink && price ){
            const response = await uploadBike(bikeInfo)
            navigate('/view ')

        }else{
            alert("Please fill all the fields")
            console.log(sellerName,sellerPhone,brand,model,color,imagelink,price);
        }
    }


    const handleChange = (e, targetState) => {
        const { name, value } = e.target;
        targetState((prevState) => ({ ...prevState, [name]: value }));
    };

    

    return (
        <>
            <div className='sell-container'>
                <div className='sell-section'>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}> <img className='sell-logo' src={sellimg} alt="" /></div>

                        <div className='form-sections'> <label>Seller Information</label></div>
                        <div className='sell-form'>
                            <input
                                type="text"
                                name="sellerName"
                                value={setBikeInfo.sellerName}
                                onChange={(e) => handleChange(e, setBikeInfo)}
                                placeholder="Full Name"
                            />
                            <input
                                type="text"
                                name="sellerPhone"
                                value={setBikeInfo.sellerPhone}
                                onChange={(event) => handleChange(event, setBikeInfo  )}
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className='form-sections'>
                        <label>Bike Details</label></div>
                        <div className='sell-form'>
                            <input
                                type="text"
                                name="brand"
                                value={bikeInfo.brand}
                                onChange={(event) => handleChange(event, setBikeInfo)}
                                placeholder="Brand/Make"
                            />
                            <input
                                type="text"
                                name="model"
                                value={bikeInfo.model}
                                onChange={(event) => handleChange(event, setBikeInfo)}
                                placeholder="Model"
                            />
                            <input
                                type="text"
                                name="color"
                                value={bikeInfo.color}
                                onChange={(event) => handleChange(event, setBikeInfo)}
                                placeholder="Color"
                            />
                            <input
                                type="text"
                                name="imagelink"
                                value={bikeInfo.imagelink}
                                onChange={(event) => handleChange(event, setBikeInfo)}
                                placeholder="Image link"
                            />
                             <input
                                type="text"
                                name="price"
                                value={bikeInfo.price}
                                onChange={(event) => handleChange(event, setBikeInfo)}
                                placeholder="Price"
                            />
                            

                        </div>
                        <div ><button className='submit-btn' type='submit'>Save</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sell;