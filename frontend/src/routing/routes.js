import { BrowserRouter, Route, Routes } from "react-router-dom"
import Calculator from "../components/calculatorWithProps/calculatorInterface"
import ParentEmployeeData from "../components/employeeData/parentEmployeeData"
import Home from "../components/home"

// Bikin di sidebar
const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path='calculator' element={<Calculator/>}></Route>
                <Route path='employee' element={<ParentEmployeeData/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPath