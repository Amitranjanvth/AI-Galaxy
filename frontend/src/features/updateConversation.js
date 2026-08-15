import api from "../../utils/axios"

export const updateConversation = async(payload) =>{
    try{
        const {data} = await axios.post("/api/chat/update-conversation", payload)
        return data; 
    }catch(err){
        console.log(err)
        return [];
    }
}