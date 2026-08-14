import React from 'react'
import { MessageSquare } from 'lucide-react'
import { useSelector } from 'react-redux'



export const Navbar = () => {

 const {selectedConversation } = useSelector(state => state.conversation);
  const {messages } = useSelector(state => state.message);


  return (
    <div className="h-14 flex items-center gap-2.5 px-5 border-b border-white/[0.06] bg-[#0d0f14]">
        <div className='flex items-center justify-center w-8 h-8 rounded-lg bg-[#1c1e23] border-indigo-500/20' >
            <MessageSquare size={16} className="text-indigo-500" />
        </div>
        <div className='text-sm font-semibold text-white tracking-tight'>
            {selectedConversation?.title || 'New Conversation'}
        </div>
        <div className='text-xs text-white/50 tracking-tight px-0.5 py-0.5 rouded-full border-slate-800 border'>
            {messages?.length} messages
        </div>
    </div>
  )
}
