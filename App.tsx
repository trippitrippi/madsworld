import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { PrivateRoute } from '@/components/PrivateRoute';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { AdminPage } from '@/pages/AdminPage';
import { ProponiGalleriaPage } from '@/pages/ProponiGalleriaPage';
import { StatistichePage } from '@/pages/StatistichePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="proponi-galleria" element={<ProponiGalleriaPage />} />
            <Route path="statistiche" element={<StatistichePage />} />
            <Route 
              path="admin" 
              element={<PrivateRoute element={<AdminPage />} />}
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
