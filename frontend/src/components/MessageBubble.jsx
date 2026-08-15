import React from 'react'
import {Markdown} from 'react-markdown'

export const MessageBubble = (role, content) => {

  const isUser = role === 'user';
  return (
    <div classNmae={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[80%] px-4 py-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
      <Markdown className='text-[14px] leading-relaxed' content={content} />
    </div>
    </div>
  )
}
