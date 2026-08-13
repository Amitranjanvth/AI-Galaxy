import React from 'react'
import { auth, googleprovider } from '../../utils/firebase.js'
import { signInWithPopup } from 'firebase/auth'
import api from '../../utils/axios.js'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from '../components/Sidebar.jsx'
import ChatArea from '../components/ChatArea.jsx'
import Artifact from '../components/Artifact.jsx'
import { setUserdata } from '../redux/userslice.js'



export const Home = () => {

  const { userData } = useSelector((state) => state.user)
  console.log("User data from Redux store:", userData);
  const dispatch = useDispatch();

  const handlelogin = async (token) => {
    try {
      const { data } = await api.post("/api/auth/login", { token })
      console.log(data);
      dispatch(setUserdata(data))
    } catch (err) {
      console.error("Error during login:", err);
    }
  }

  const googlelogin = async () => {
    const data = await signInWithPopup(auth, googleprovider)
    const token = await data.user.getIdToken()
    console.log(token);
    await handlelogin(token)
    console.log(data);
  }


  return (
    <>
      {!userData ? (
       <div className="bg-gray-100 text-xl font-bold text-center h-screen flex items-center justify-center"> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={googlelogin}>
            Continue with google
        </button>
    </div>
    ) :
    (
      <div className="flex w-full h-screen overflow-hidden">
  <Sidebar />

  <main className="flex-1 min-w-0 h-full">
    <ChatArea />
  </main>

  <aside className="w-[400px] shrink-0 h-full">
    <Artifact />
  </aside>
</div>

    )}

      {/* {!userData &&
        <div className="bg-gray-100 text-xl font-bold text-center h-screen flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={googlelogin}>
            Continue with google
          </button>
        </div>} */}

    </>
  )

}

export default Home