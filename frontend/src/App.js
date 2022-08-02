import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Userfront from '@userfront/react';
import NavBar from './components/NavBar.js';

Userfront.init("8b68mprb");

const SignupForm = Userfront.build({
  toolId: "bnbrdb",
});
const LoginForm = Userfront.build({
  toolId: "okodrr",
});
const PasswordResetForm = Userfront.build({
  toolId: "kaonka",
})


export default function App() {
  return (
    <Router>
      <div>
        {/* <NavBar> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        {/* </NavBar> */}
        
         <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <SignupForm />
      </div>
  );
}


  // const userData = JSON.stringify(Userfront.user, null, 2);
  // Userfront.login({
  //   method: "password",
  //   email: userData.email,
  //   password: userData.password,
  // });

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      {/* <pre>{userData}</pre> */}
      {"Hi " + userData.name + "!"}
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}