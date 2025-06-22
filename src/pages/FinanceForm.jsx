// import React, { useState } from 'react';
// import { post } from '../services/ApiEndpoint';
// import toast from 'react-hot-toast';

// const FinanceForm = () => {
//   const [form, setForm] = useState({
//     currentAge: '',
//     retirementAge: '',
//     lifeExpectancy: '',
//     monthlyIncomes: ['', '', '', '', ''],
//     monthlyExpenses: ['', '', '', '', ''],
//     investmentAmount: '',
//     safeAssetProportion: 0,
//     stockAssetProportion: 100,
//     currentSavings: '',
//     currentMonthlyInvestment: '',
//     stepUpRate: 5
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleArrayChange = (e, index, type) => {
//     const value = e.target.value;
//     const updated = [...form[type]];
//     updated[index] = value;
//     setForm({ ...form, [type]: updated });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await post('/api/finance/calculate', form);
//       toast.success('Calculation Successful');
//       console.log(data);
//     } catch (error) {
//       toast.error('Calculation Failed');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Financial Planning</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="currentAge" type="number" placeholder="Current Age" onChange={handleChange} />
//         <input name="retirementAge" type="number" placeholder="Retirement Age" onChange={handleChange} />
//         <input name="lifeExpectancy" type="number" placeholder="Life Expectancy" onChange={handleChange} />

//         <h4>Monthly Incomes</h4>
//         {form.monthlyIncomes.map((val, i) => (
//           <input
//             key={i}
//             type="number"
//             placeholder={`Income ${i + 1}`}
//             onChange={(e) => handleArrayChange(e, i, 'monthlyIncomes')}
//           />
//         ))}

//         <h4>Monthly Expenses</h4>
//         {form.monthlyExpenses.map((val, i) => (
//           <input
//             key={i}
//             type="number"
//             placeholder={`Expense ${i + 1}`}
//             onChange={(e) => handleArrayChange(e, i, 'monthlyExpenses')}
//           />
//         ))}

//         <input name="investmentAmount" type="number" placeholder="Total Monthly Investment" onChange={handleChange} />
//         <input name="safeAssetProportion" type="number" placeholder="Safe Asset %" onChange={handleChange} />
//         <input name="stockAssetProportion" type="number" placeholder="Stock Asset %" onChange={handleChange} />
//         <input name="currentSavings" type="number" placeholder="Current Savings" onChange={handleChange} />
//         <input name="currentMonthlyInvestment" type="number" placeholder="Monthly Investment" onChange={handleChange} />
//         <input name="stepUpRate" type="number" placeholder="Step-up Rate (%)" onChange={handleChange} />

//         <button type="submit">Calculate</button>
//       </form>
//     </div>
//   );
// };

// export default FinanceForm;




// import React, { useState } from 'react';
// import { post } from '../services/ApiEndpoint';
// import toast from 'react-hot-toast';

// const FinanceForm = () => {
//   const [formData, setFormData] = useState({
//     monthlyIncomes: [0, 0, 0, 0, 0],
//     monthlyExpenses: [0, 0, 0, 0, 0, 0, 0, 0],
//     investmentAmount: 0,
//     safeAssetProportion: 0,
//     stockAssetProportion: 100,
//     currentAge: 25,
//     retirementAge: 60,
//     lifeExpectancy: 80,
//     currentSavings: 100000,
//     currentMonthlyInvestment: 10000,
//     stepUpRate: 5,
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: Number(value) });
//   };

//   const handleArrayChange = (e, index, field) => {
//     const newArray = [...formData[field]];
//     newArray[index] = Number(e.target.value);
//     setFormData({ ...formData, [field]: newArray });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await post('/api/finance/calculate', formData);
//       setResult(response.data.result);
//       toast.success('Calculated successfully');
//     } catch (error) {
//       toast.error('Error during calculation');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Financial Calculator</h2>
//       <form onSubmit={handleSubmit}>
//         <h3>Monthly Incomes</h3>
//         {formData.monthlyIncomes.map((val, idx) => (
//           <input
//             key={idx}
//             type="number"
//             value={val}
//             onChange={(e) => handleArrayChange(e, idx, 'monthlyIncomes')}
//             placeholder={`Income ${idx + 1}`}
//           />
//         ))}

//         <h3>Monthly Expenses</h3>
//         {formData.monthlyExpenses.map((val, idx) => (
//           <input
//             key={idx}
//             type="number"
//             value={val}
//             onChange={(e) => handleArrayChange(e, idx, 'monthlyExpenses')}
//             placeholder={`Expense ${idx + 1}`}
//           />
//         ))}

//         <h3>Investment Details</h3>
//         <input
//           type="number"
//           name="investmentAmount"
//           value={formData.investmentAmount}
//           onChange={handleChange}
//           placeholder="Monthly Investment"
//         />
//         <input
//           type="number"
//           name="safeAssetProportion"
//           value={formData.safeAssetProportion}
//           onChange={handleChange}
//           placeholder="Safe Asset %"
//         />
//         <input
//           type="number"
//           name="stockAssetProportion"
//           value={formData.stockAssetProportion}
//           onChange={handleChange}
//           placeholder="Stock Asset %"
//         />

//         <h3>Planning</h3>
//         <input
//           type="number"
//           name="currentAge"
//           value={formData.currentAge}
//           onChange={handleChange}
//           placeholder="Current Age"
//         />
//         <input
//           type="number"
//           name="retirementAge"
//           value={formData.retirementAge}
//           onChange={handleChange}
//           placeholder="Retirement Age"
//         />
//         <input
//           type="number"
//           name="lifeExpectancy"
//           value={formData.lifeExpectancy}
//           onChange={handleChange}
//           placeholder="Life Expectancy"
//         />
//         <input
//           type="number"
//           name="currentSavings"
//           value={formData.currentSavings}
//           onChange={handleChange}
//           placeholder="Current Savings"
//         />
//         <input
//           type="number"
//           name="currentMonthlyInvestment"
//           value={formData.currentMonthlyInvestment}
//           onChange={handleChange}
//           placeholder="Current Monthly Investment"
//         />
//         <input
//           type="number"
//           name="stepUpRate"
//           value={formData.stepUpRate}
//           onChange={handleChange}
//           placeholder="Step-Up Rate %"
//         />

//         <button type="submit">Calculate</button>
//       </form>

//       {result && (
//         <div className="result">
//           <h3>Blended Return: {result.blendedReturn}%</h3>
//           <h3>Yearly Income: ₹{result.yearlyIncome}</h3>
//           <h3>Yearly Expense: ₹{result.yearlyExpense}</h3>

//           <h4>Financial Plan</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Age</th>
//                 <th>Start Saving</th>
//                 <th>Planned Expense</th>
//                 <th>Saving</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {result.financialPlan.map((row, i) => (
//                 <tr key={i}>
//                   <td>{row.age}</td>
//                   <td>{row.startingSaving}</td>
//                   <td>{row.plannedExpenses}</td>
//                   <td>{row.endingSaving}</td>
//                   <td>{row.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FinanceForm;

// 📄 Filename: src/pages/FinanceForm.jsx

import React, { useState } from 'react';
import { post } from '../services/ApiEndpoint';
import { toast } from 'react-hot-toast';

const FinanceForm = () => {
  const [formData, setFormData] = useState({
    currentAge: '',
    retirementAge: '',
    lifeExpectancy: '',
    inflation: '6',
    capitalGainTax: '20',
    incomeTax: '30'
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClear = () => {
    setFormData({
      currentAge: '',
      retirementAge: '',
      lifeExpectancy: '',
      inflation: '6',
      capitalGainTax: '20',
      incomeTax: '30'
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
      console.log(err);
    }
  };

  return (
    <div className="finance-form-container">
      <h2>🧮 Basic Financial Assumptions</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="currentAge" placeholder="Current Age" value={formData.currentAge} onChange={handleChange} required />
        <input type="number" name="retirementAge" placeholder="Retirement Age" value={formData.retirementAge} onChange={handleChange} required />
        <input type="number" name="lifeExpectancy" placeholder="Wish to live till (Age)" value={formData.lifeExpectancy} onChange={handleChange} required />
        <input type="number" name="inflation" placeholder="Inflation (%)" value={formData.inflation} onChange={handleChange} required />
        <input type="number" name="capitalGainTax" placeholder="Capital Gain Tax (%)" value={formData.capitalGainTax} onChange={handleChange} required />
        <input type="number" name="incomeTax" placeholder="Income Tax (%)" value={formData.incomeTax} onChange={handleChange} required />

        <div className="button-group">
          <button type="submit">Calculate</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>

      {result && (
        <div className="result-box">
          <h3>📊 Future Value (adjusted for inflation):</h3>
          <p><strong>₹ {result.toLocaleString()}</strong></p>
        </div>
      )}
    </div>
  );
};

export default FinanceForm;
