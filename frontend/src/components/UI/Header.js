import React ,{useEffect} from 'react'
import '../../../src/styles.css'
import { useCookies } from "react-cookie";
import { logoutGet } from '../../api/api';
import { useNavigate } from 'react-router-dom';
function Header() {
  const [cookies, setCookie] = useCookies();
  const {user , jwt} = cookies
  const navigate = useNavigate()
  const handleLogout = (e) =>{
    e.preventDefault()
    logoutGet()
    // window.location.href ="/"
    return navigate("/login")
  }
  
  
  return (
    <div>
        <nav>
            <h1><a href="/">BeLOGG</a></h1>
            <ul>
              {
                user ? <><li>Welcome {user?.email}</li>
                <li><a href="#"  onClick={e => handleLogout(e)}>Log out</a></li></> : <>
                <li><a href="/login">Log in</a></li>
                <li><a href="/signup" className="btn">Sign up</a></li>
                </>
              } 
            
            </ul>
        </nav>
    </div>
  )
}

export default Header