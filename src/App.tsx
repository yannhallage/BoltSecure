import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signin from './pages/Signin';
import PersonalInfo from './pages/personal-info';
import BolstSecurePage from './pages/web';
import Register from './pages/register';
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import ProtectedRoute from './secure/ProtectedRoute';
import PublicRoute from './secure/PublicRoute';
import RedirectIfAuth from './secure/RedirectIfAuth';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Helmet>
        <title>BoltSecure - Votre gestionnaire de mot de passe</title>
        <meta name="description" content="Gestionnaire de mot de passe sécurisé" />
      </Helmet>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Routes>
              <Route path="/auth" element={
                <RedirectIfAuth>
                  <Signin />
                </RedirectIfAuth>
              } />

              <Route path="/register" element={
                <RedirectIfAuth>
                  <ToastProvider>
                    <Register />
                    <ToastViewport />
                  </ToastProvider>
                </RedirectIfAuth>
              } />

              <Route path="/personal-info" element={
                <PublicRoute>
                  <PersonalInfo />
                </PublicRoute>
              } />

              <Route path="/" element={<LandingPage />} />

              <Route path="/web" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/web2" element={
                <ProtectedRoute>
                  <BolstSecurePage />
                </ProtectedRoute>
              } />
            </Routes>

          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
