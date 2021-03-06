import React 
,{useState} 
from 'react'
import { useNavigate} from 'react-router-dom'
import {loginPost} from '../../api/api'
import Header from '../UI/Header'
import { useCookies } from "react-cookie";
// redux
import { login, selectUser } from "../../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  let navigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  
  const handleSubmit = async () =>{
    const user = {
      email:email,
      password:password
    }
    const res = await loginPost(user)
    if(res==="success"){
      dispatch(
        login({
          email:user.email
        })
      )
      return navigate("/")
    }
  }
  
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <h2>Login</h2>
        <label htmlFor="email" >Email</label>
            <input type="text" name="email" 
            value={email}
            onChange = {(e) => setemail(e.currentTarget.value)}
            required />
        <div className="email error">some error</div>
        <input type="password" name="password"
            value = {password}
            onChange = {e => setpassword(e.currentTarget.value)}
             required />
        <div className="password error"></div>
        <button>login</button>
        </form>
    </div>
  )
}

export default Login