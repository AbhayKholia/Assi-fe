import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { post } from '../services/ApiEndpoint';
import BackButton from './BackButton';

const Expenses = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState([
    { label: 'Rent', amount: '' },
    { label: 'Loan EMI 1', amount: '' },
    { label: 'Loan EMI 2', amount: '' },
    { label: 'Loan EMI 3', amount: '' },
    { label: 'Living expenses 1', amount: '' },
    { label: 'Living expenses 2', amount: '' },
    { label: 'Living expenses 3', amount: '' },
    { label: 'Desire expenses 1', amount: '' },
    { label: 'Desire expenses 2', amount: '' },
    { label: 'Desire expenses 3', amount: '' },
  ]);

  const [yearlyExpenses, setYearlyExpenses] = useState(['', '', '', '', '']);
  const [result, setResult] = useState(null);

  const handleMonthlyChange = (index, value) => {
    const updated = [...monthlyExpenses];
    updated[index].amount = value;
    setMonthlyExpenses(updated);
  };

  const handleYearlyChange = (index, value) => {
    const updated = [...yearlyExpenses];
    updated[index] = value;
    setYearlyExpenses(updated);
  };

  const handleSubmit = async () => {
    try {
      const response = await post('/api/expense/calculate-expense', {
        monthlyExpenses,
        yearlyExpenses,
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error submitting expenses:', error);
    }
  };

  const handleClear = () => {
    setMonthlyExpenses(monthlyExpenses.map(e => ({ ...e, amount: '' })));
    setYearlyExpenses(['', '', '', '', '']);
    setResult(null);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2 }}>
      <BackButton />
      <Typography variant="h4" gutterBottom>
        Expenses Form
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Monthly Expenses</Typography>
      <Grid container spacing={2}>
        {monthlyExpenses.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              label={item.label}
              type="number"
              fullWidth
              value={item.amount}
              onChange={(e) => handleMonthlyChange(index, e.target.value)}
              placeholder={`Enter ${item.label}`}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ mt: 3 }}>Yearly Expenses</Typography>
      <Grid container spacing={2}>
        {yearlyExpenses.map((val, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              label={`Yearly Expense ${index + 1}`}
              type="number"
              fullWidth
              value={val}
              onChange={(e) => handleYearlyChange(index, e.target.value)}
              placeholder={`Enter Yearly Expense ${index + 1}`}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>
          Clear
        </Button>
      </Box>

      {result && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Calculation Results</Typography>
          <Typography>Total Monthly Expenses: ₹{result.totalMonthlyExpenses}</Typography>
          <Typography>Total Yearly Expenses: ₹{result.totalYearlyExpenses}</Typography>
          <Typography>Total Combined Yearly Expenses: ₹{result.totalCombinedYearlyExpenses}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Expenses;
