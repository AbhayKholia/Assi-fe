// 📁 components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Fab, Tooltip } from "@mui/material";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Tooltip title="Go Back" arrow>
      <Fab
        color="primary"
        onClick={() => navigate(-1)}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1000,
        }}
      >
        Back
      </Fab>
    </Tooltip>
  );
};

export default BackButton;
