import React from 'react'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import  getMessages  from '../features/getMessages.js';
import { setMessages } from '../redux/messageSlice.js';
import {Navbar }from './Navbar.jsx';
import {MessageList} from './MessageList.jsx';
import {MessageInput} from './MessageInput.jsx';

const ChatArea = () => {

const {selectedConversation } = useSelector(state => state.conversation);
 const dispatch = useDispatch();
 useEffect(() => {
    const getMsg = async ()=>{
        if(selectedConversation){
            const {data} = await getMessages(selectedConversation?._id);
            dispatch(setMessages(data));
        }
    }
    getMsg();
 }, [selectedConversation, dispatch]);

  return (
    <div className="flex-1 flex flex-col bg-[#0d0f14] h-screen">
      <Navbar />
      <MessageList />
      <MessageInput />
    </div>
  )
}

export default ChatArea