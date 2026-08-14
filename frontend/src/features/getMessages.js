import React from 'react';
import api from '../../utils/axios.js'


async function getMessages(conversationId) {
  try {
    const response = await fetch(`/api/chat/messages/${conversationId}`);
    return response;
  }catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
}

export default getMessages;