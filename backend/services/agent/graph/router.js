import { getModel } from "../config/llmModels.js";

export const router = async (state) => {
    const llm = getModel("router");

    const prompt = `
You are an AI router. Your job is to classify the user's request and route it to exactly ONE appropriate agent.

Available agents:

1. chat
   - General conversation
   - General questions
   - Explanations
   - Learning and conceptual discussions
   - Advice that does not require web search

2. search
   - Web search
   - Latest/current information
   - News
   - Research
   - Current prices, weather, events, sports, or other time-sensitive information
   - Questions that require information from the internet

3. coding
   - Programming questions
   - Code generation
   - Debugging
   - Error fixing
   - Refactoring
   - Software architecture
   - API design
   - Technical implementation questions
   - Code review

4. pdf
   - Creating a PDF
   - Editing or modifying a PDF
   - Extracting or analyzing information from a PDF
   - Converting content into a PDF
   - Requests specifically related to PDF documents

5. image
   - Creating/generating an image
   - Editing an image
   - Image generation prompts
   - Image transformation
   - Drawing diagrams, illustrations, posters, logos, or visual artwork

6. ppt
   - Creating a PowerPoint presentation
   - Editing a presentation
   - Generating slides
   - Designing presentation content
   - Requests specifically related to PPT/PPTX presentations

Routing rules:

- Choose exactly ONE agent.
- If the request involves writing or generating code, choose "coding".
- If the request requires current or internet-based information, choose "search".
- If the user asks to generate, edit, or analyze an image, choose "image".
- If the user asks to create or modify a PDF, choose "pdf".
- If the user asks to create or modify a PowerPoint/presentation/slides, choose "ppt".
- Otherwise, choose "chat".
- When multiple agents seem applicable, choose the agent responsible for the user's PRIMARY task.
- If you are uncertain, choose "chat".

IMPORTANT:
Return ONLY the agent name.
Do not return explanations, punctuation, JSON, markdown, or extra text.

Valid outputs:
chat
search
coding
pdf
image
ppt

User Query:
${state.prompt}
`;

    const response = await llm.invoke(prompt);
    return {
        ...state,
        agent: response.content
            .trim()
            .toLowerCase()
    };
};