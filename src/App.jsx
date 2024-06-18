import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Contextos
import { AuthProvider } from '@/context/AuthContext';
import { TaskProvider } from '@/context/TaskContext';
// Protected Route
import ProtectedRoute from '@/ProtectedRoute';
// Basics
import Wellcome from '@/pages/Wellcome';
import Home from '@/pages/Home';
// Layouts
import NavLayout from '@/layouts/NavLayout';
import LeftHomeLayout from '@/layouts/LeftHomeLayout';
import RightHomeLayout from '@/layouts/RightHomeLayout';
// Profile Pages
import Profile from '@/pages/profile/Profile';
import Notifications from '@/pages/profile/Notifications';
import Messages from '@/pages/profile/Messages';
import Planning from '@/pages/profile/Planning';
import Saved from '@/pages/profile/Saved';
//  Community Pages
import Classroom from '@/pages/community/Classroom';
import Community from '@/pages/community/Community';
import Members from '@/pages/community/Members';
import Archives from '@/pages/community/Archives';
import Calendar from '@/pages/community/Calendar';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Wellcome />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<NavLayout />}>
                {/* Profile Pages */}
                <Route element={<LeftHomeLayout />}>
                  <Route element={<RightHomeLayout />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/saved' element={<Saved />} />
                  </Route>
                  <Route path='/planning' element={<Planning />} />
                </Route>
                <Route path='/profile' element={<Profile />} />
                {/* Community Pages */}
                <Route path='/classroom' element={<Classroom />} />
                <Route path='/members' element={<Members />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/archives' element={<Archives />} />
                <Route path='/community' element={<Community />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
