// // import React from "react";
// // import "./App.css";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Admin from "./pages/Admin";
// // import Register from "./pages/Register";
// // import Login from "./pages/Login";
// // import Home from "./pages/Home";
// // import { Toaster } from "react-hot-toast";
// // import AdminLayout from "./Layouts/AdminLayout";

// // const App = () => {
// //   return (
// //    <>
// //      <BrowserRouter>
// //       <Toaster position="top-center" reverseOrder={false} />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/admin" element={<AdminLayout />} />
// //           <Route index element={<Admin />} />

// //         </Route>
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //       </Routes>
// //     </BrowserRouter>
// //    </>

// //   );
// // };

// // export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Admin from "./pages/Admin";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import { Toaster } from "react-hot-toast";
// import AdminLayout from "./Layouts/AdminLayout";
// import UserLayout from "./Layouts/UserLayout";
// import PublicLayouts from "./Layouts/PublicLayouts";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Toaster position="top-center" reverseOrder={false} />
//         <Routes>
//           <Route path="/" element={<UserLayout />}>
//             <Route index element={<Home />}>
//             <Route path="/finance" element={<FinanceForm />} />

//             </Route>
//             <Route path="/admin" element={<AdminLayout />}>
//               <Route index element={<Admin />} />
//             </Route>
//             <Route path="/" element={<PublicLayouts/>}>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//              </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;



// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Admin from "./pages/Admin";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import { Toaster } from "react-hot-toast";
// import AdminLayout from "./Layouts/AdminLayout";
// import UserLayout from "./Layouts/UserLayout";
// import PublicLayouts from "./Layouts/PublicLayouts";
// import FinanceForm from "./pages/FinanceForm"; // ✅ Make sure this import is added

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Toaster position="top-center" reverseOrder={false} />
//         <Routes>

//           {/* Public Auth Routes */}
//           <Route element={<PublicLayouts />}>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Route>

//           {/* User Layout Routes */}
//           <Route element={<UserLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/finance" element={<FinanceForm />} />
//           </Route>

//           {/* Admin Layout Routes */}
//           <Route element={<AdminLayout />}>
//             <Route path="/admin" element={<Admin />} />
//           </Route>

//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;


import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./Layouts/AdminLayout";
import UserLayout from "./Layouts/UserLayout";
import PublicLayouts from "./Layouts/PublicLayouts";
import FinanceForm from "./pages/FinanceForm";

// ✅ New pages to be created
import Basic from "./pages/Basic";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Investment from "./pages/Investment";
import FinancialPlanning from "./pages/FinancialPlanning";
import InvestmentMatrix from "./pages/InvestmentMatrix";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          {/* Public Auth Routes */}
          <Route element={<PublicLayouts />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* User Layout Routes */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/finance" element={<FinanceForm />} />
            <Route path="/basic" element={<Basic />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/financial-planning" element={<FinancialPlanning />} />
            <Route path="/investment-matrix" element={<InvestmentMatrix />} />
          </Route>

          {/* Admin Layout Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
