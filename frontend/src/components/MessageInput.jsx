import React from 'react'
import {Paperclip, Mic} from 'lucide-react'

export const MessageInput = () => {
  return (
    <div className='w-full overflow-hidden px-3 md:px-5 py-4 border-t border-slate-600 bg-[#0d0f14] '>
    <div className='flex flex-col gap-2 bg-white/[0.04] border border-white/[0.07] rounded-2xl px-4 pt-3.5 pb-3'>
      <textarea 
        placeholder='Ask Anything...'
        className='w-full bg-transparent outline-none resize-none text-[14px] text-slate-200 placeholder:text-slate-600 leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden disabled:opacity-50'
        rows={3}       
      />
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'>
            <button><Paperclip size={14}/></button>
            <button> <Mic size={14} /> </button>
        </div>

      </div>
    </div>

    
    
    </div>
    
  )
}
