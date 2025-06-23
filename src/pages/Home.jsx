// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { post } from '../services/ApiEndpoint'
// import { Navigate, useNavigate } from 'react-router-dom'
// import { Logout } from '../redux/AuthSlice'

// const Home = () => {
//       const user = useSelector((state) => state.Auth.user)
//       const navigate = useNavigate()
//       const dispatch = useDispatch()

//   console.log(user)

//   const handleLogout = async () => {
//     try {
//       const request = await post('/api/auth/logout')
//       const response = request.data
//       if(request.status == 200){
//         dispatch(Logout())
//         navigate('/login')
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const goToAdmin = () => {

//     navigate('/admin')
//   }

//   return (
//     <div className='home-container'>
//       <div className='user-card'>
//         <h2>Wellcome{user && user.name} </h2>
//         <button  className='logout' onClick={handleLogout}>Logout</button>
//       {   user && user.role == 'admin' ?    <button  className='admin' onClick={goToAdmin}>Go To Admin</button> : ''}
//       </div>
//     </div>
//   )
// }

// export default Home



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { post } from '../services/ApiEndpoint';
// import { useNavigate } from 'react-router-dom';
// import { Logout } from '../redux/AuthSlice';

// const Home = () => {
//   const user = useSelector((state) => state.Auth.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // const handleLogout = async () => {
//   //   try {
//   //     const response = await post('/api/auth/logout');
//   //     if (response.status === 200) {
//   //       dispatch(Logout());
//   //       navigate('/login');
//   //     }
//   //   } catch (error) {
//   //     console.error('Logout Error:', error);
//   //   }
//   // };

//   const handleLogout = async () => {
//   console.log(" Logout clicked");
  
//   try {
//     const { status, data } = await post('/api/auth/logout');
//     console.log(" Logout response:", data);

//     if (status === 200) {
//       dispatch(Logout());        
//       navigate('/login');        
//     }
//   } catch (error) {
//     console.error(" Logout error:", error.message || error);
//   }
// };



//   const goToAdmin = () => {
//     navigate('/admin');
//   };

//   return (
//     <div className='home-container'>
//       <div className='user-card'>
//         <h2>Welcome {user?.name}</h2>

//         <button className='logout' onClick={handleLogout}>
//           Logout
//         </button>

//         {user?.role === 'admin' && (
//           <button className='admin' onClick={goToAdmin}>
//             Go To Admin
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { post } from '../services/ApiEndpoint';
import { Logout } from '../redux/AuthSlice';
import Admin from './Admin';
import Basic from './Basic';

const Home = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const { status } = await post('/api/auth/logout');
      if (status === 200) {
        dispatch(Logout());
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout error:', error.message || error);
    }
  };

  const goToAdmin = () => {
    navigate('/admin');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/basic">Basic</Button>
            <Button color="inherit" component={Link} to="/income">Income</Button>
            <Button color="inherit" component={Link} to="/expenses">Expenses</Button>
            <Button color="inherit" component={Link} to="/investment">Investment</Button>
            <Button color="inherit" component={Link} to="/financial-planning">Financial Planning</Button>
            <Button color="inherit" component={Link} to="/investment-matrix">Investment Matrix</Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1">Welcome {user?.name}</Typography>
            <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
            {user?.role === 'admin' && (
              <Button variant="contained" color="secondary" onClick={goToAdmin}>Go To Admin</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        <Typography variant="h4">Dashboard</Typography>
        <Typography variant="body1" mt={2}>
      <Basic/>
        </Typography>
      </Box>
    </>
  );
};

export default Home;
