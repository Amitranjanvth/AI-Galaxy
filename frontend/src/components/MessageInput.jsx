import React, { useState } from 'react'
import { Paperclip, Mic, Send } from 'lucide-react'
import { useSelector } from 'react-redux'


export const MessageInput = () => {
  const [value, setValue] = useState('')
  const { selectedConversation } = useSelector(state => state.conversation);
  const { messages } = useSelector(state => state.messages);
  const dispatch = useDispatch();
  const handleSendMessage = async () => {

    const conv = await createConversation()
    dispatch(setSelectedConversation(conv))
    dispatch(addConversation(conv))
    conversation = conv


    const payload = {
      prompt: value.trim(),
      conversationId: selectedConversation?.id
    }
    dispatch(addMessage({ role: 'user', content: value.trim() }))
    const { data } = await sendMessage(payload)
    dispatch(addMessage({ role: 'Assistant', content: data }))
    console.log(data)
  }
}


return (
  <div className='w-full overflow-hidden px-3 md:px-5 py-4 border-t border-slate-600 bg-[#0d0f14] '>
    <div className='flex flex-col gap-2 bg-white/[0.04] border border-white/[0.07] rounded-2xl px-4 pt-3.5 pb-3'>
      <textarea
        placeholder='Ask Anything...'
        className='w-full bg-transparent outline-none resize-none text-[14px] text-slate-200 placeholder:text-slate-600 leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden disabled:opacity-50'
        rows={3}
        value={value.trim()}
        onChange={(e) => setValue(e.target.value)}

      />
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <button className='flex items-center justify-center w-8 h-8 rounded-lg text-slate-600 hover:text-slate-400 bg-white/[0.05] border border-transparent transition-colors duration-150 cursor-pointer '><Paperclip size={14} /></button>
          <button className='flex items-center justify-center w-8 h-8 rounded-lg text-slate-600 hover:text-slate-400 bg-white/[0.05] border border-transparent transition-colors duration-150 cursor-pointer '><Mic size={14} /></button>
        </div>
        <button className='flex items-center justify-center w-8 h-8 rounded-lg text-white hover:opacity-90 border-none transition-colors duration-150 cursor-pointer bg-linear-gradient-to-r from-[#ff6a00] to-[#ee0979]'
          onClick={handleSendMessage}
          disabled={!value}>
          <Send size={16} />
        </button>
      </div>
    </div>



  </div>

)
}
