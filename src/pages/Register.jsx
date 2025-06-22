// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'; // ✅ THIS IS REQUIRED
// import { post } from "../services/ApiEndpoint";

// const Register = () => {
//     const [name , setName] = useState('')
//         const [email , setEmail] = useState('')
//     const [password , setPassword] = useState('')

// const handleSubmit = async (e) =>{
//     e.preventDefault();
//     try{
//       const request = await post("/api/auth/register",{name,email,password})
//       const response = request.data
//       console.log(response)
//     }catch(error){
//       console.log(error)
//     }
// }

//   return (
//     <div className=' register-container'>
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="username">Name</label>
//             <input type="text" id="name" name="" onChange={(e)=> setName(e.target.value)} />
//         </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="" onChange={(e)=> setEmail(e.target.value)}/>
//         </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" name="" onChange={(e)=> setPassword(e.target.value)}/>
//         </div>
//       <button type="submit">Register</button>
//         <p className="register-link">
                
//                  Already have an account  <Link to={"/login"}> Login Here</Link>
//               </p>
//               </form>
//     </div>

//   )
// }

// export default Register


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/ApiEndpoint";
import  { toast } from 'react-hot-toast';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post("/api/auth/register", {
        name,
        email,
        password,
      });
      const response = request.data;
      if(request.status == 200){
       toast.success(response.message)
       navigate('/login')
      }
      console.log("Register Success:", response);
    } catch (error) {
      console.error("Register Error:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ mt: 2, py: 1 }}
          >
            Register
          </Button>

          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  Login Here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
