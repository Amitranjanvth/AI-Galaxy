import React from 'react'
import { MessagesSquare, PanelLeftIcon, PenBoxIcon, Plus, User } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createConversation } from '../features/createConversation'
import { getConversation } from '../features/getConversation'
import { setConversations, addConversation, setSelectedConversation} from '../redux/conversationSlice'
import { useSelector } from 'react-redux'



const Sidebar = () => {

    const [collapsed, setcollapsed] = useState(false);
    const [imageError, setImageError] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const getConv = async () => {
            const data = await getConversation();
            dispatch(setConversations(data));
        }
        getConv();
    }, [dispatch]);

    const handleCreateConversation = async () => {
        const data = await createConversation();
        dispatch(addConversation(data));
    }

    const { conversations, selectedConversation } = useSelector(state => state.conversation);
    const { userData } = useSelector(state => state.user);

    return (
        <div className='fixed lg:static inset-0 left-0 z-50 w-[270px] h-screen shrink-0 bg-[#0d0f14] border-r border-white/[0.08]'>
            <div className=' flex flex-col h-full'>
                <div className='flex items-center gap-2.5 px-4 py-4 border-b border-white/8'>
                    <div onClick={() => setcollapsed(true)} className='lg:flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover: text-slate-200 hover: bg-white/[0.05] transition-colors duration-200 cursor-pointer'>
                        <PanelLeftIcon />
                    </div>
                    <span className='text-[16px] font-semibold text-slate-100 tracking-tight flex-1'>Cortex AI</span>
                    <span className='text-[10px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 tracking-wide rounded-full  '>free</span>
                    <button onClick={handleCreateConversation} className='flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.05] transition-colors duration-150 bg-transparent border-none cursor-pointer'><PenBoxIcon size={14} /></button>
                </div>

                <div className='px-4 py-4 pb-1'>
                    <button onClick={handleCreateConversation} className='w-full flex items-center justify-center text-sm text-white font-medium gap-2 bg-linear-to-br from-indigo-500 to-violet-700 rounded-xl py-[10px] border-none cursor-pointer hover: opacity-90 transition:opacity duration-150' ><Plus size={14} /> New Chat </button>
                </div>

                {conversations.length == 0 ?
                    <div className='px-5 pt-4 pb-1.5 text-[10.5px] font-semibold uppercase tracking-widest text-slate-600'>
                        No Recent Conversations
                    </div> :
                    <div className='px-5 pt-4 pb-1.5 text-[10.5px] font-semibold uppercase tracking-widest text-slate-600'>
                        Recent Conversations
                    </div>
                }

                <div className='flex-1 overflow-y-auto px-2.5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                    {conversations.map((conv, id) => {
                        const isActive = selectedConversation?._id === conv?._id;
                        return (
                            <div onClick={() => dispatch(setSelectedConversation(conv))} className={`flex items-center gap-2.5 cursor-pointer mb-0.5 px-3 py-2.5 rounded-[10px] border transition-colors duration-150 ${isActive ? "bg-indigo-500/10 border-indigo-500/20" : "bg-transparent border-transparent"}`} >
                                <div className={`flex items-center justify-center w-7 h-7 rounded-lg text-slate-500 ${isActive ? "text-indigo-400 bg-indigo-500/10" : "hover:text-slate-200 hover:bg-white/[0.05]"} transition-colors duration-150`}>
                                    <MessagesSquare size={13} />
                                </div>
                                <span>{conv.title || "New Conversation"}</span>
                            </div>
                        )
                    })}
                </div>

                <div className='mx-2.5 h-px bg-white/[0.06]'/>
                    <div className='px-3.5 py-3.5 '>
                        {userData ? (

                        <div className='flex items-center gap-2.5 cursor-pointer px-3 py-2.5 rounded-xl border transition-colors duration-150 hover:bg-white/[0.05] hover:border-white/[0.08]'> 
                         <div className='relative shrink-0'>
                            {(userData?.avatar || !imageError) ? 
                            <img className='w-9 h-9 rounded-[10px] object-cover border-2 border-indigo-500/25'
                             src={userData.avatar} alt="Avatar" onError={() => setImageError(true)} />
                             : 
                             <div className='w-9 h-9 rounded-[10px] bg-indigo-500/25 flex items-center justify-center border-2 border-indigo-500/25'>
                             <User/>
                             </div>
                             }
                            </div>

                        </div> )
                        : 
                        <button> 
                            Login
                        </button>
                        }
                    </div>

                 </div>
   

        </div>

    )
}

export default Sidebar