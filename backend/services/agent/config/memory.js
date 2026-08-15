import redis from '../../../shared/redis/redis.js'
import {getMessages} from '../utils/getMessages.js'

export const getMemory = async (conversationId) => {
    const key = `messages-${conversationId}`
    const cached = await redis.get(key)
    if (cached) {
        return JSON.parse(cached)
    }
    const messages = await getMessages(conversationId)
    await redis.set(key, JSON.stringify(messages), "EX", 60 * 60 * 24) // Cache for 24 hours
    return messages
}

export const addMessage = async(conversationId, role,content) => {
    const key = `messages-${conversationId}`
    const rawMessgages = await redis.get(key)
    let messages= rawMessgages ? JSON.parse(rawMessgages) : []
    messages.push({role, content})
    if(messages.length > 20){
        messages.shift() // Remove the oldest message if there are more than 20
    }
    await redis.set(key, JSON.stringify(messages), "EX", 60 * 60 * 24) // Cache for 24 hours
}