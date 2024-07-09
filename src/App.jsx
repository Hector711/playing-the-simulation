import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Contextos
import { AuthProvider } from '@/context/AuthContext';
import { TaskProvider } from '@/context/TaskContext';
import { PlanningProvider } from '@/context/PlanningContext';
import { MembersProvider } from '@/context/MembersContext';
import { ClassroomProvider } from '@/context/ClassroomContext';
import { PostsProvider } from '@/context/PostsContext';
import { CommunityProvider } from '@/context/CommunityContext';
import { ProfileProvider } from '@/context/ProfileContext';
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
import CommunityPage from '@/pages/community/CommunityPage';
import MembersPage from '@/pages/community/MembersPage';
import BibliotecaPage from '@/pages/community/BibliotecaPage';
// Classroom Pages
import ClassroomPage from '@/pages/classroom/ClassroomPage';
// PLAYGROUND PAGES
import PlaygroundPage from '@/pages/playground/PlaygroundPage';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TaskProvider>
          <PlanningProvider>
            <ClassroomProvider>
              <PostsProvider>
                <CommunityProvider>
                  <MembersProvider>
                  <ProfileProvider>
                    <BrowserRouter>
                      <Routes>
                        <Route path='/' element={<WellcomePage />} />
                        <Route element={<ProtectedRoute />}>
                          <Route element={<NavLayout />}>
                            {/* Profile Pages */}
                            <Route element={<LeftHomeLayout />}>
                              <Route element={<RightHomeLayout />}>
                                <Route path='/inicio' element={<HomePage />} />
                                <Route
                                  path='/notificaciones'
                                  element={<NotificationsPage />}
                                />
                                <Route
                                  path='/mensajes'
                                  element={<MessagesPage />}
                                />
                                <Route
                                  path='/guardados'
                                  element={<SavedPage />}
                                />
                              </Route>
                              <Route
                                path='/planificacion'
                                element={<PlanningPage />}
                              />
                            </Route>
                            <Route
                              path='/mi-perfil'
                              element={<ProfilePage />}
                            />
                            <Route
                              path='/profile/:id'
                              element={<ProfilePage />}
                            />
                            {/* <Route path='/post/:id' element={<PostPage />} /> */}
                            {/* Community Pages */}
                            <Route
                              path='/classroom'
                              element={<ClassroomPage />}
                            />
                            <Route
                              path='/classroom/:slug'
                              element={<ClassroomPage />}
                            />
                            <Route
                              path='/classroom/de-0-100/:slug'
                              element={<ClassroomPage />}
                            />
                            <Route
                              path='/playground'
                              element={<PlaygroundPage />}
                            />
                            <Route
                              path='/playground/:slug'
                              element={<PlaygroundPage />}
                            />
                            <Route path='/miembros' element={<MembersPage />} />
                            <Route
                              path='/biblioteca'
                              element={<BibliotecaPage />}
                            />
                            <Route
                              path='/comunidad'
                              element={<CommunityPage />}
                            />
                            <Route
                              path='/comunidad/:slug'
                              element={<CommunityPage />}
                            />
                            <Route path='*' element={<h1>NOT FOUND</h1>} />
                          </Route>
                        </Route>
                      </Routes>
                    </BrowserRouter>
                  </ProfileProvider>
                  </MembersProvider>
                </CommunityProvider>
              </PostsProvider>
            </ClassroomProvider>
          </PlanningProvider>
        </TaskProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
