import { getModel } from "../config/llmModels.js";
import { getMemory } from "../config/memory.js";


export const chatAgent = async (state) => {
    const llm = getModel("chat")
    const history = await getMemory(state.conversationId)
    const systemPrompt=`
    You are AI Galaxy, an intelligent AI assistant.

Rules:

- For simple questions, greetings, and short queries, respond naturally in plain
text.
- For technical, educational, coding, or detailed topics, use clean Markdown.

Formatting:

- Use # for titles and ## for sections.
- Leave a blank line after headings.
- Use bullet points for lists.
- Use numbered lists for steps.
- Use fenced code blocks with language tags for code.
- Keep paragraphs short and readable.
- Never write headings and content on the same line.
- Never generate large walls of text.`

    const message = [
        new SystemMessage(systemPrompt),
    ]

    history.forEach((msg) => {
        if (msg.role === "user") {
            message.push(new HumanMessage(msg.content))
        }
        if(msg.role === "Assistant") {
            message.push(new AIMessage(msg.content))
        }
    });

    message.push(new HumanMessage(state.prompt))
    console.log("Messages sent to LLM:", message)





    const response = await llm.invoke(messages)

    return {
        ...state,
        aiResponse: response.content
    }

}