import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Calculator from '../components/calculator/calculatorInterface'
import Home from "../components/home"
import Login from "../components/login"
import User from "../components/user"
import RegionRedux from "../pages/regionsRedux"
import AddRegionRedux from "../pages/addRegionRedux"
import UpdateRegionRedux from "../pages/updateRegionRedux"
import config from "../config/config"

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
                <Route path='user' element={<PrivateRoute><User/></PrivateRoute>}></Route>

                <Route path='/regions'  element = {<RegionRedux/>}></Route>
                <Route path={config.endpoint.region.create} element = {<AddRegionRedux/>}></Route>
                <Route path={config.endpoint.region.update} element = {<UpdateRegionRedux/>}></Route>
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