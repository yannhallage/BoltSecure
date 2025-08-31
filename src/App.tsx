
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signin from './pages/Signin';
import PersonalInfo from './pages/personal-info';
import BolstSecurePage from './pages/web';

function App() {
  return (
    <>
      <Helmet>
        <title>BoltSecure - Votre gestionnaire de mot de passe</title>
        <meta name="description" content="Utilisez WhatsApp sur votre ordinateur. Synchronisez vos messages et restez connecté avec vos proches depuis votre navigateur web." />
      </Helmet>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/personal-info" element={<PersonalInfo />} />
              <Route path="/web" element={<BolstSecurePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
