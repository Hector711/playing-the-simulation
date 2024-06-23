import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Contextos
import { AuthProvider } from '@/context/AuthContext';
import { TaskProvider } from '@/context/TaskContext';
// Protected Route
import ProtectedRoute from '@/ProtectedRoute';
// Basics
import WellcomePage from '@/pages/WellcomePage';
import HomePage from '@/pages/HomePage';
// Layouts
import NavLayout from '@/layouts/NavLayout';
import LeftHomeLayout from '@/layouts/LeftHomeLayout';
import RightHomeLayout from '@/layouts/RightHomeLayout';
// Profile Pages
import ProfilePage from '@/pages/profile/ProfilePage';
import NotificationsPage from '@/pages/profile/NotificationsPage';
import MessagesPage from '@/pages/profile/MessagesPage';
import PlanningPage from '@/pages/profile/PlanningPage';
import SavedPage from '@/pages/profile/SavedPage';
//  Community Pages
import ClassroomPage from '@/pages/community/ClassroomPage';
import CommunityPage from '@/pages/community/CommunityPage';
import MembersPage from '@/pages/community/MembersPage';
import ArchivesPage from '@/pages/community/ArchivesPage';
import CalendarPage from '@/pages/community/CalendarPage';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<WellcomePage />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<NavLayout />}>
                  {/* Profile Pages */}
                  <Route element={<LeftHomeLayout />}>
                    <Route element={<RightHomeLayout />}>
                      <Route path='/home' element={<HomePage />} />
                      <Route
                        path='/notifications'
                        element={<NotificationsPage />}
                      />
                      <Route path='/messages' element={<MessagesPage />} />
                      <Route path='/saved' element={<SavedPage />} />
                    </Route>
                    <Route path='/planning' element={<PlanningPage />} />
                  </Route>
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/profile/:id' element={<ProfilePage />} />
                  {/* <Route path='/post/:id' element={<PostPage />} /> */}
                  {/* Community Pages */}
                  <Route path='/classroom' element={<ClassroomPage />} />
                  <Route path='/members' element={<MembersPage />} />
                  <Route path='/calendar' element={<CalendarPage />} />
                  <Route path='/archives' element={<ArchivesPage />} />
                  <Route path='/community' element={<CommunityPage />} />
                  <Route path='*' element={<h1>NOT FOUND</h1>} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
