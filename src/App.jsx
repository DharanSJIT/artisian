import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import WelcomePage from './pages/WelcomePage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ExplorePage from './pages/ExplorePage';
import OverviewPage from './pages/OverviewPage';
import MarketplacePage from './pages/MarketplacePage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

import './App.css';

const AppRouter = () => {
  const { currentUser, userRole } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WelcomePage />} />
          <Route 
            path="/auth" 
            element={
              currentUser ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <AuthPage />
              )
            } 
          />

          {/* Public Pages with Header */}
          <Route path="/home" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />
          
          <Route path="/services/*" element={
            <>
              <Header />
              <ServicesPage />
              <Footer />
            </>
          } />
          
          <Route path="/explore" element={
            <>
              <Header />
              <ExplorePage />
              <Footer />
            </>
          } />
          
          <Route path="/overview" element={
            <>
              <Header />
              <OverviewPage />
              <Footer />
            </>
          } />
          
          <Route path="/marketplace" element={
            <>
              <Header />
              <MarketplacePage />
              <Footer />
            </>
          } />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Header />
                {userRole === 'admin' ? <AdminDashboard /> : <UserDashboard />}
                <Footer />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute requireAdmin={true}>
                <Header />
                <AdminDashboard />
                <Footer />
              </ProtectedRoute>
            } 
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
