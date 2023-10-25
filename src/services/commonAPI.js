import axios from "axios";

export const commonAPI = async (httpMethod,url,reqBody)=>{
    // httpMethod - eg: get,put,post
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig)
    .then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
        
}