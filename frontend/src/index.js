import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/calculatorWithProps/calculatorInterface';
import ParentEmployeeData from './components/employeeData/parentEmployeeData';
import RoutesPath from './routing/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
/** Calculator */
// root.render(
//   <React.StrictMode>
//     <Calculator></Calculator>
//   </React.StrictMode>
// )

// Employee
root.render(
  <React.StrictMode>
    <RoutesPath></RoutesPath>
    {/* <ParentEmployeeData></ParentEmployeeData> */}
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
