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
import Addblog from "./components/Addblog";
import { useCookies } from "react-cookie";
// redux
import { login, selectUser } from "./feature/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  useEffect(() => {
    if(cookies.user){
      dispatch(
        login({
          _id:cookies.user._id,
          userName: cookies.user.userName,
          email: cookies.user.email
        })
      )
    }
  }, [dispatch , cookies])
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
        <Route path="/addblog" element={<Addblog />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
