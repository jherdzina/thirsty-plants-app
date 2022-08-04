import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Userfront from '@userfront/react';

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
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); 


function handleClick(event) {
  // look up how to get the info of an element you click on in JS, you'll want to navigate
  // to the url/link of the breadcrumb you clicked on, the console log is an example and can be removed 
  // or changed for debugging
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function NavBar() {
  let navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const home = () => {
    navigate("/");
  };
  const reset = () => {
    navigate("/reset");
  };

  const dashboard = () => {
    navigate("/dashboard");
  };

  const facts = () => {
    navigate("/facts");
  };

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
  
  function Home() {
    // This (after connecting userFront BE (see plants.js)) is where you will grab each 
    // plant from the user's 'plants' in the userFront DB and put it in cards props
    return (
      <div>
        <h2>Home</h2>
        <SignupForm />
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
  return (
  
    // the function 'handleClick' inside onClick in below 'presentation' div is called when 
    // tags nested in a presentation tag are clicked (like the <StyledBreadcrumb> tags)
    // handleClick() will need to go the link of the breadcrumb clicked
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb 
          component="a" 
          href="#" 
          icon={<HomeIcon fontSize="small" />}
          label="Home"
          onClick={home}
          />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Login"
          onClick={login}
        />
        <StyledBreadcrumb 
          component="a" 
          href="#" 
          label="Plant Facts"
          onClick={facts}
          />
        <StyledBreadcrumb
          component="a"
          href="#" 
          label="Dashboard"
          onClick={dashboard}
        />
          <StyledBreadcrumb 
          component="a" 
          href="#" 
          label="Reset"
          onClick={reset}
          />
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
      </Breadcrumbs>
    </div>
  );
}
