// import 

import React, { useEffect, useState } from "react";
import { get, del } from "../services/ApiEndpoint";
import {
  Button,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import toast from "react-hot-toast";

const Admin = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users from backend
  const fetchUsers = async () => {
    try {
      const res = await get("/api/admin/getUser");
      setUsers(res.data.users);
    } catch (error) {
      toast.error("Failed to load users");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Delete
  const handleDelete = async (userId, role) => {
    if (role === "admin") {
      toast.error("You cannot delete admin users.");
      return;
    }

    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      const res = await del(`/api/admin/delet/${userId}`);
      toast.success(res.data.message || "User deleted successfully");
      fetchUsers(); // refresh table
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to delete user";
      toast.error(msg);
      console.error(err);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        👥 Manage Users
      </Typography>

      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name || "N/A"}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(user._id, user.role)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>No users found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Admin;
