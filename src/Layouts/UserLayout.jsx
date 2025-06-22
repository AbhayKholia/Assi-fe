import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import  {Outlet, useNavigate} from 'react-router-dom'

const UserLayout = () => {
    const user = useSelector((state) => state.Auth.user)
    const navigate = useNavigate()
    console.log(user)

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[user])
  return (
    <div>
   <Outlet/>   
    </div>
  )
}

export default UserLayout
