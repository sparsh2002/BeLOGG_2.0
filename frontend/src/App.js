import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';
import SignUp from "./components/auth/SignUp";
import Blog from "./components/Blog";
import Home from './components/Home';
import Header from "./components/UI/Header";
import {checkUser} from './api/api'
import {useEffect} from 'react'
function App() {
  
  useEffect(() => {
    checkUser()
  }, [])
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
