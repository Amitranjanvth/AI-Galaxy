import axios from "axios";
import { graph } from "../graph/state.js";


export const agent = async(req, res) =>{
    try{
        const {prompt, conversationId} = req.body;

        await addMessage(conversationId, "user", prompt)

        await axios.post(`${process.env.CHAT_SERVICE}/save-message`, { 
            conversationId, role: "user", content: prompt
        });

        const result = await graph.invoke({
            prompt,
            conversationId  
        })
        const response = result.aiResponse

        await addMessage(conversationId, "Assistant", response)
        await axios.post(`${process.env.CHAT_SERVICE}/save-message`, { 
            conversationId, role: "Assistant", content: response
        });
        return res.status(200).json({ response });

    } catch (error) {
        res.status(500).json({ error: "Failed to save message" });
    }
}