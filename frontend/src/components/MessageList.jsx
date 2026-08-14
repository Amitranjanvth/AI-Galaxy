import React from 'react'
import {useSelector} from 'react-redux'
import { MessageBubble } from './MessageBubble';

export const MessageList = () => {
  const {selectedConversation } = useSelector(state => state.conversation);
  const {messages } = useSelector(state => state.message);
  return (

    <div className="flex-1 overflow-y-auto p-6 space-y-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {messages.length == 0 || !selectedConversation ?(
        <div className='h-full flex flex-col items-center justify-center gap-4 text-center'>
          <div className='flex flex-col gap-1.5'>
            <h1 className='text-lg font-semibold text-white tracking-tight'>AI Galaxy</h1>
            <p className='text-sm text-gray-400'>Start a conversation by selecting a chat or creating a new one.</p>
            <p className='text-xs text-gray-500'>Ask anything! code Ideas! gat Explanation</p>
          </div>
          <div className='flex flex-wrap justify-center gap-2 mt-1'>
            {["write a youtube clone", "Explain js", "build a navbar"].map((a)=>(
              <button className='text-[12px text-slate-400 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-lg cursor-pointer hover:border-amber-100 hover:text-slate-200 transition-colors duration-200' >
                {a}

              </button>
            ))}
            </div>
        </div>
      ):(
        <div>
           {messages.map((msg,i) =>(
            <div>
              <MessageBubble role={msg?.role} content={msg?.content}/>
            </div>
           ))}
          </div>
      )}
    </div>
  )
}
