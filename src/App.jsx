import React, { useEffect } from 'react'
import Home from'../../netflix-clone1/src/pages/Home/Home'
import{Routes,Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login/login'
import Player from './pages/player/player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  const navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out")
        navigate('/login');
      }

    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark' />
<Routes>

<Route path='/'element={<Home/>}/>
<Route path='/login'element={<Login/>}/>
<Route path='/player/:id'element={<Player/>}/>
</Routes>
    </div>
  )
}

export default App
