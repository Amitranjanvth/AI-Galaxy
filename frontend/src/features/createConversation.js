export const createConversation = async (conversationData) => {
    try{
        const {data} = await api.get("/api/chat/create-conversation", conversationData)
        return data
        console.log(data);
    }
    catch(error){
        console.log(error);
        return [];
    }
}