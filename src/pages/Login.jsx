// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { post } from "../services/ApiEndpoint";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log(email);
//     console.log(password);
//     try {
//         const request = await post('/api/auth/login',{email ,password})
//         const response = request.data.message
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="Email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name=""
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="Password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name=""
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit"> Login</button>
//         <p className="register-link">
//           {" "}
//           Not Register ? <Link to={"/register"}> Register Here</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/ApiEndpoint";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SetUser } from "../redux/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { email, password });

    try {
      const request = await post("/api/auth/login", { email, password });
      const response = request.data;
      if (request.status == 200) {
        if(response.user.role == 'admin'){
          navigate('/admin')
        }else if(response.user.role == 'user'){
        navigate('/')
        }

        toast.success(response.message || "Login successful");
        dispatch(SetUser(response.user));
      }
      console.log("Login Success:", response);

      // optionally set token or redirect
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("Login Failed:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
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
            Login
          </Button>

          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="body2">
                Not Registered?{" "}
                <Link
                  to="/Register"
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  Register Here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
