import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ClassComponent from './components/latihanClassComponent';
import MyComponent from './components/classComponentWithConstructor';
import MyFunctionalComponent from './components/functionalComponent';
import Addition from './components/calculator/addition';
import Substraction from './components/calculator/substraction';
import Multiplication from './components/calculator/multiplication';
import Division from './components/calculator/division';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <ClassComponent />
//   </React.StrictMode>
// );

// root.render(
//   <React.StrictMode>
//     <ClassComponent />
//   </React.StrictMode>  
// )

// root.render(
//   <React.StrictMode>
//     <MyComponent/>
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <MyFunctionalComponent/>
//   </React.StrictMode>
// )

/** Calculator */
root.render(
  <React.StrictMode>
    <Addition/>
    <br/>
    <Substraction/>
    <br/>
    <Multiplication/>
    <br/>
    <Division/>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
