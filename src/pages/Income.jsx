import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Box,
  Divider,
} from "@mui/material";
import { post } from "../services/ApiEndpoint";
import toast from "react-hot-toast";

const Income = () => {
  const [salary, setSalary] = useState("");
  const [monthlyIncomes, setMonthlyIncomes] = useState(["", "", "", "", ""]);
  const [yearlyIncomes, setYearlyIncomes] = useState(["", "", "", "", ""]);
  const [calculated, setCalculated] = useState(null);

  const handleMonthlyChange = (index, value) => {
    const updated = [...monthlyIncomes];
    updated[index] = value;
    setMonthlyIncomes(updated);
  };

  const handleYearlyChange = (index, value) => {
    const updated = [...yearlyIncomes];
    updated[index] = value;
    setYearlyIncomes(updated);
  };

  const handleSubmit = async () => {
    try {
      const monthly = monthlyIncomes.map(Number);
      const yearly = yearlyIncomes.map(Number);

      const response = await post("/api/income/calculate-income", {
        salary: Number(salary),
        monthlyIncomes: monthly,
        yearlyIncomes: yearly,
      });

      if (response.status === 200) {
        toast.success("Income data submitted successfully!");
        setCalculated(response.data.result);
      }
    } catch (err) {
      toast.error("Submission failed");
      console.error(err);
    }
  };

  const handleClear = () => {
    setSalary("");
    setMonthlyIncomes(["", "", "", "", ""]);
    setYearlyIncomes(["", "", "", "", ""]);
    setCalculated(null);
  };

  return (
    <Paper elevation={4} sx={{ padding: 4, maxWidth: 800, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Income Information
      </Typography>

      <TextField
        label="Salary"
        type="number"
        fullWidth
        margin="normal"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Enter your monthly salary"
      />

      <Box mt={3}>
        <Typography variant="subtitle1">Monthly Incomes</Typography>
        <Grid container spacing={2}>
          {monthlyIncomes.map((value, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <TextField
                label={`Income ${i + 1}`}
                type="number"
                fullWidth
                value={value}
                placeholder={`Enter Income ${i + 1}`}
                onChange={(e) => handleMonthlyChange(i, e.target.value)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={3}>
        <Typography variant="subtitle1">Yearly Incomes</Typography>
        <Grid container spacing={2}>
          {yearlyIncomes.map((value, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <TextField
                label={`Income ${i + 1}`}
                type="number"
                fullWidth
                value={value}
                placeholder={`Enter Yearly Income ${i + 1}`}
                onChange={(e) => handleYearlyChange(i, e.target.value)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" color="error" onClick={handleClear}>
          Clear
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {calculated && (
        <>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h6">Calculated Summary</Typography>
          <Box mt={2}>
            <Typography>
              <strong>Total Monthly Income:</strong> ₹{calculated.totalMonthlyIncome}
            </Typography>
            <Typography>
              <strong>Total Yearly Income:</strong> ₹{calculated.totalYearlyIncome}
            </Typography>
            <Typography>
              <strong>Total Combined Yearly Income:</strong> ₹{calculated.totalCombinedYearlyIncome}
            </Typography>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default Income;
