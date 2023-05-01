import { Routes, Route } from 'react-router-dom'
import { AuthProvider, RequireAuth } from './context/auth'
import { Page404 } from './pages/404'
import { HomePage } from './pages/home'
import { Layout } from './pages/layout'
import { LoginPage } from './pages/login'

const App = () => (
  <AuthProvider>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />

      <Route element={<Layout />}>
        <Route
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
          path="/dashboard"
        />
      </Route>
      <Route element={<Page404 />} path="*" />
    </Routes>
  </AuthProvider>
)

export default App

function ProtectedPage() {
  return <h3>Protected</h3>
}
