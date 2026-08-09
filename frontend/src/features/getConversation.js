export const getConversation = async () => {
    try {
        const { data } = await api.get("/api/chat/get-conversations")
        return data
        console.log(data);
    }
    catch (error) {
        console.log(error);
        return [];
    }
}