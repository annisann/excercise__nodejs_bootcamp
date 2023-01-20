import { BrowserRouter, Route, Routes } from "react-router-dom"
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
                <Route index element={<Home/>}></Route>
                <Route path='calculator' element={<Calculator/>}></Route>
                <Route path='employee' element={<ParentEmployeeData/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='user' element={<User/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPath