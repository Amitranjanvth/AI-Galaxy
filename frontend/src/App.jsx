import React from 'react'
import { auth, googleprovider } from '../utils/firebase.js'
import { signInWithPopup } from 'firebase/auth'

export const App = () => {

 const googlelogin = async() =>{
   const data = await signInWithPopup(auth, googleprovider)
   console.log(data);
 }


  return (
    <div className="bg-gray-100 text-xl font-bold text-center h-screen flex items-center justify-center"> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={googlelogin}>
            Continue with google
        </button>
    </div>
  )
}

export default App