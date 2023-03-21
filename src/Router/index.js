import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthCheker from "../components/AuthCheker";
import AddMenu from "../Pages/AddMenu";
import ChangePassoword from "../Pages/ChangePassword";
import DetailMenu from "../Pages/DetailMenu";
import DetailProfileLiked from "../Pages/DetailProfileLiked";
import EditMenu from "../Pages/EditMenu";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../Pages/Home";
import SearchMenu from "../Pages/SearchMenu";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/search-menu"
          element={
            <AuthCheker>
              <SearchMenu />
            </AuthCheker>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassoword />} />
        <Route path="/detail-menu" element={<DetailMenu />} />
        <Route
          path="/add-menu"
          element={
            <AuthCheker>
              <AddMenu />
            </AuthCheker>
          }
        />
        <Route path="/edit-menu/:id" element={<EditMenu />} />
        <Route path="/detail-profile-liked" element={<DetailProfileLiked />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <AuthCheker>
              <Profile />
            </AuthCheker>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
