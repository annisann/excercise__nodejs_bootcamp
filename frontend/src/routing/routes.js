import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Calculator from "../components/calculatorWithProps/calculatorInterface"
import ParentEmployeeData from "../components/employeeData/parentEmployeeData"
import Home from "../components/home"
import Login from "../components/login"
import User from "../components/user"

// Bikin di sidebar
const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Home Page */}
                <Route path='/' element={<Home/>}></Route>
                {/* Login Page */}
                <Route path='login' element={<Login/>}></Route>
                {/* Page: Login Needed. */}
                <Route path='calculator' element={<PrivateRoute><Calculator/></PrivateRoute>}></Route>
                <Route path='employee' element={<PrivateRoute><ParentEmployeeData/></PrivateRoute>}></Route>
                <Route path='user' element={<PrivateRoute><User/></PrivateRoute>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const PrivateRoute = (props) => {
    const token = localStorage.getItem('token')
    if (!token)  {
        return <Navigate to ='/login'/>
    }
    return props.children
}

export default RoutesPath