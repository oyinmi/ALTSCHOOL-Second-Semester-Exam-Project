import React from "react";
import {authContext} from "./components/authContext";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Contact from "./components/contact";
import Blog from "./page/Blog";
import Topics from "./components/topics";
import Login from "./page/Login";
import "./App.css";


function App() {
  const {user, logout} = React.useContext(authContext);

  if (!user) {
    return <Login />
  }

  return (
    <div className="App">

      <div className="NavigationCon">
        <h3 className="BrandName">OA</h3>

        <div className="NavList">
            <Link to="/" style={{textDecoration: 'none'}} >
              <h3 className="List">Home</h3>
            </Link>
            <Link to="profile" style={{textDecoration: 'none'}} >
              <h3 className="List">Profile</h3>
            </Link>
            <Link to="blog" style={{textDecoration: 'none'}} >
              <h3 className="Link">Blog</h3>
            </Link>
            <button onClick={logout} style={{textDecoration: 'none'}} className="Logoutbtn">
              <h5 className="Logout">Logout</h5>
            </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="profile" element={ <Profile/> } >
          <Route path="/profile/contact" element={ <Contact/> } />
        </Route>
        <Route path="blog" element={ <Blog/> } >
          <Route path="/blog/topics" element={ <Topics/> } />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
