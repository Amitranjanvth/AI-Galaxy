import { getModel } from "../config/llmModels.js";


export const chatAgent = async (state) => {
    const llm = getModel("chat")
    const systemPrompt = "You are a helpful and knowledgeable AI assistant. You can answer questions, provide explanations, and engage in general conversation. Your responses should be clear, concise, and informative. If you don't know the answer to a question, it's okay to admit it."
    const response = await llm.invoke([
        {
            role: "system",
            "content": systemPrompt
        },
        {
            role: "user",
            "content": state.prompt
        }
    ])

    return {
        ...state,
        aiResponse: response.content
    }

}