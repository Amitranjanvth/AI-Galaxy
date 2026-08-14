import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userslice';
import conversationReducer from './conversationSlice';
import messageReducer from './messageSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    conversation: conversationReducer,
    message: messageReducer
  },
});