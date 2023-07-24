import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Button } from "antd";
import { Toaster } from "react-hot-toast";
// import Home from "./pages/Home";
import Home from './pages/Home/Home/Home';
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

// import Profile from "./pages/Doctor/Profile";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
// import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import NavBar from "./components/NavBar/NavBar";
import SearchDoctor from "./pages/SearchDoctor";
import { Loader } from "./Library/Loader/Loader";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <HashRouter>
      {loading && (
        <Loader isOpen={loading} />
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar/>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
          exact
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
         <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/searchdoctor"
          element={
            <ProtectedRoute>
              <SearchDoctor />
            </ProtectedRoute>
          }/>

        {/* <Route
          path="/doctor/profile/:userId"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/book-appointment/:doctorId"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/doctor/appointments"
          element={
            <ProtectedRoute>
              <DoctorAppointments />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
