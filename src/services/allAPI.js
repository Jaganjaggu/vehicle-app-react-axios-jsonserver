import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



// Upload Bike details
export const uploadBike = async (body) =>{
 return await commonAPI("POST",`${serverURL}/vehicle`,body)
}

export const getAllBike = async () =>{
    return await commonAPI("GET",`${serverURL}/vehicle`,"")
}

export const deleteABike = async (id) =>{
    return await commonAPI("DELETE",`${serverURL}/vehicle/${id}`,{})
}

export const updateABike = async (id,body) => {
    return await commonAPI("PUT",`${serverURL}/vehicle/${id}`,body)
}

export const getABike = async (id) =>{
    return await commonAPI("GET",`${serverURL}/vehicle/${id}`,"")
}