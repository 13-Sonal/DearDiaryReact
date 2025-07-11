import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';
import PostSignUp from './pages/PostSignUp';
import PrivateRoute from './components/PrivateRoute';
import HygeneTracker from './pages/HygeneTracker';
import SummaryPage from './pages/SummaryPage'
import PeriodTrackerForm from './pages/SafetyTracker';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/landing" element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          } />
        <Route path="/postsignup" element={<PostSignUp />} />
        <Route path="/MeasureCyclePage" element={<HygeneTracker />} />
        <Route path="/SummaryPage" element={<SummaryPage />} />
        <Route path="/PeriodTrackerForm" element={<PeriodTrackerForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
