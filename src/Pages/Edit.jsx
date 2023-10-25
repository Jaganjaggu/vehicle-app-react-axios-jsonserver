import React, { useEffect, useState } from 'react'
import sellimg from '../assets/landingimg.png'
import './Sell.css'
import { updateABike, getABike } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Edit() {
    const navigate = useNavigate();
    const [navigatepage,setnavigatepage] = useState(false)
    // const [fetchABike, setFetchABike] = useState()
    const { id } = useParams();
    const [fetchABike, setFetchABike] = useState({
        id: id,
        sellerName: '',
        sellerPhone: '',
        brand: '',
        model: '',
        color: '',
        imagelink: '',
        price: ''
    });

    const [updateBikeData, setUpdateBikeData] = useState({
        id: id,
        sellerName: '',
        sellerPhone: '',
        brand: '',
        model: '',
        color: '',
        imagelink: '',
        price: ''
    });


    const handleSubmit = async (e) => {

        const { sellerName, sellerPhone, brand, model, color, imagelink, price } = fetchABike;
        e.preventDefault()
        if (sellerName && sellerPhone && brand && model && color && imagelink && price) {
            await updateABike(id, fetchABike);  
            navigate('/view ')
        } else {
            alert("Please fill all the fields");
        }
        
    }

    const handleChange = (e, targetState) => {
        const { name, value } = e.target;
        targetState((prevState) => ({ ...prevState, [name]: value }));
    };

    const getABikeToEdit = async (id) => {
        const response = await getABike(id)
        setFetchABike(response.data)
        setUpdateBikeData(response.data)
    }

    useEffect(() => {
        getABikeToEdit(id)
    }, [id])



    console.log(fetchABike, "li");

    return (
        <>
            <div className='sell-container'>
                <div className='sell-section'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}> <img className='sell-logo' src={sellimg} alt="" /></div>

                        <div className='form-sections'> <label>Seller Information</label></div>
                        <div className='sell-form'>
                            <input
                                type="text"
                                name="sellerName"
                                value={fetchABike.sellerName}
                                onChange={(e) => handleChange(e, setFetchABike)}
                                placeholder="Full Name"
                            />
                            <input
                                type="text"
                                name="sellerPhone"
                                value={fetchABike.sellerPhone}
                                onChange={(event) => handleChange(event, setFetchABike)}
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className='form-sections'>
                            <label>Bike Details</label>
                        </div>

                        <div className='sell-form'>
                            <input
                                type="text"
                                name="brand"
                                value={fetchABike.brand}
                                onChange={(event) => handleChange(event, setFetchABike)}
                                placeholder="Brand/Make"
                            />
                            <input
                                type="text"
                                name="model"
                                value={fetchABike.model}
                                onChange={(event) => handleChange(event, setFetchABike)}
                                placeholder="Model"
                            />
                            <input
                                type="text"
                                name="color"
                                value={fetchABike.color}
                                onChange={(event) => handleChange(event, setFetchABike)}
                                placeholder="Color"
                            />
                            <input
                                type="text"
                                name="imagelink"
                                value={fetchABike.imagelink}
                                onChange={(event) => handleChange(event, setFetchABike)}
                                placeholder="Image link"
                            />
                            <input
                                type="text"
                                name="price"
                                value={fetchABike.price}
                                onChange={(event) => handleChange(event, setFetchABike)}
                                placeholder="Price"
                            />
                        </div>

                        <div> <button className='submit-btn' type='submit'>Save</button> </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit;