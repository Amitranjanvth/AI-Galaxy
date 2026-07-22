import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';


export const createConversation = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        console.log("User ID:", userId);
        const conversation = await Conversation.create({ userId: userId });
        res.status(201).json(conversation);
    }
    catch (error) {
        console.error("Error creating conversation:", error);
        res.status(500).json({ error: "Failed to create conversation" });
    }
}

export const getConversations = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        console.log("User ID:", userId);
        const conversations = await Conversation.find({
            userId: userId
        }).sort({ updatedAt: -1 });
        res.status(200).json(conversations);
    } catch (error) {
        console.error("Error fetching conversations:", error);
        res.status(500).json({ error: "Failed to fetch conversations" });
    }
}

export const saveMessage = async (req, res) => {
    try {
        const { conversationId, role, content } = req.body;
        const message = await Message.create({ conversationId, role, content });
        res.status(201).json(message);
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ error: "Failed to save message" });
    }
}

export const getMessages = async (req, res) => {
    try {

        const messages = await Message.find({
            conversationId: req.params.conversationId
        }).sort({
            createdAt: -1
        });
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: "Failed to fetch messages" });
    }
}

export const updateConversation = async (req, res) => {
    try {
        const { id, title } = req.body;
        const updatedConversation = await Conversation.findByIdAndUpdate(
            id,
            { title })
        return res.status(200).json(updatedConversation);
    } catch (error) {
        console.error("Error updating conversation:", error);
        res.status(500).json({ error: "Failed to update conversation" });
    }
}


