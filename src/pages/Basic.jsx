import React, { useState } from 'react';
import { post } from '../services/ApiEndpoint';
import { toast } from 'react-hot-toast';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const Basic = () => {
  const [formData, setFormData] = useState({
    currentAge: '',
    retirementAge: '',
    lifeExpectancy: '',
    inflation: '6',
    capitalGainTax: '20',
    incomeTax: '30',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setFormData({
      currentAge: '',
      retirementAge: '',
      lifeExpectancy: '',
      inflation: '6',
      capitalGainTax: '20',
      incomeTax: '30',
    });
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await post('/api/finance/basic', formData);
      setResult(res.data.futureValue);
      toast.success('Calculation successful');
    } catch (err) {
      toast.error('Error while submitting');
      console.error(err);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          🧮 Basic Financial Assumptions
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Current Age"
                name="currentAge"
                type="number"
                value={formData.currentAge}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Retirement Age"
                name="retirementAge"
                type="number"
                value={formData.retirementAge}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Life Expectancy"
                name="lifeExpectancy"
                type="number"
                value={formData.lifeExpectancy}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Inflation (%)"
                name="inflation"
                type="number"
                value={formData.inflation}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Capital Gain Tax (%)"
                name="capitalGainTax"
                type="number"
                value={formData.capitalGainTax}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Income Tax (%)"
                name="incomeTax"
                type="number"
                value={formData.incomeTax}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" type="submit">
              Calculate
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClear}>
              Clear
            </Button>
          </Box>
        </Box>

        {result && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">📊 Future Value (adjusted for inflation):</Typography>
            <Typography variant="h5" fontWeight="bold" color="green">
              ₹ {result.toLocaleString()}
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Basic;
