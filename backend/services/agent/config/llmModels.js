import { ChatGroq } from "@langchain/groq"


const groq = new ChatGroq({
    model: "openai/gpt-oss-120b"
})



export const getModel = async (agent) => {
    switch (agent) {
        case "chat":
            return groq;
        case "search":
            return groq;
        case "coding":
            return groq;
        case "pdf":
            return groq;
        case "image":
            return groq;
        case "ppt":
            return groq;
        default:
            return groq;
    }
}