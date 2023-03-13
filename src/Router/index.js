import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import AddMenu from "../Pages/AddMenu";
import ChangePassoword from "../Pages/ChangePassword";
import DetailMenu from "../Pages/DetailMenu";
import EditMenu from "../Pages/EditMenu";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from '../Pages/Home'
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SearchMenu from "../Pages/SearchMenu";

function App(){
    return(
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigate to='home' replace="true"/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/search-menu' element={<SearchMenu/>} />
                        <Route path='/forgot-password' element={<ForgotPassword/>} />
                        <Route path='/change-password' element={<ChangePassoword/>} />
                        <Route path='/detail-menu' element={<DetailMenu/>} />
                        <Route path='/add-menu' element={<AddMenu/>} />
                        <Route path='/edit-menu' element={<EditMenu/>} />
                    </Routes>
            </BrowserRouter>
    )
}

export default App