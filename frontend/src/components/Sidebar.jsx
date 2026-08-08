import React from 'react'
import { PanelLeftIcon, PenBoxIcon, Plus } from 'lucide-react'
import { useState } from 'react'

const Sidebar = () => {

    const [collapsed, setcollapsed] = useState(false);
    return (
        <div className='fixed lg:static inset-0 left-0 z-50 w-[270px] h-screen shrink-0 bg-[#0d0f14] border-r border-white/[0.08]'>
            <div className=' flex flex-col h-full'>
                <div className='flex items-center gap-2.5 px-4 py-4 border-b border-white/[0.08]'>
                    <div onClick={() => setcollapsed(!collapsed)} className='lg:flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover: text-slate-200 hover: bg-white/[0.05] transition-colors duration-200 cursor-pointer'>
                        <PanelLeftIcon />
                    </div>
                    <span className='text-[16px] font-semibold text-slate-100 tracking-tight flex-1'>Cortex AI</span>
                    <span className='text-[10px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 tracking-wide rounded-full  '>free</span>
                    <button className='flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.05] transition-colors duration-150 bg-transparent border-none cursor-pointer'><PenBoxIcon size={14} /></button>
                </div>
            </div>
            <div className='px-4 py-4 pb-1'>
                <button className='w-full'><Plus size={14} /> </button>
            </div>
        </div>
    )
}

export default Sidebar