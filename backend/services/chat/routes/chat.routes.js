import express from 'express';
import { createConversation, getConversations, saveMessage, getMessages, updateConversation } from '../controllers/chat.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Chat route is working!');
});
router.post("/create-conversation", createConversation);
router.get("/get-conversations", getConversations);
router.post("/save-messages", saveMessage);
router.get("/messages/:conversationId", getMessages);
router.put("/update-conversations", updateConversation);

export default router;