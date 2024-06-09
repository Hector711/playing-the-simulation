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
import Deposit from "@/pages/Deposit";
import Tasks from "@/pages/Tasks";
import TaskForm from "@/pages/TaskForm";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/ProtectedRoute";
import { TaskProvider } from "@/context/TaskContext";
import Layout from "@/pages/components/Layout";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Wellcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                {/* ASIDE-LEFT */}
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/saved" element={<Saved />} />
                {/* ASIDE-LEFT */}
                {/*  */}
                {/*  */}

                <Route path="/tasks" element={<Tasks />} />
                <Route path="/add-task" element={<TaskForm />} />
                <Route path="/tasks/:id" element={<Login />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
