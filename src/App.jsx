import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wellcome from "@/pages/Wellcome";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";
import Messages from "@/pages/Messages";
import Goals from "@/pages/Goals";
import Saved from "@/pages/Saved";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/ProtectedRoute";
import { TaskProvider } from "@/context/TaskContext";
import NavLayout from "@/layouts/NavLayout";
import AsideLayout from "@/layouts/AsideLayout";
import Classroom from "@/pages/Classroom";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Wellcome />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<NavLayout />}>
                <Route element={<AsideLayout />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/goals" element={<Goals />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/saved" element={<Saved />} />
                </Route>
                <Route path="/classroom" element={<Classroom />} />
                <Route path="/classroom" element={<Classroom />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
