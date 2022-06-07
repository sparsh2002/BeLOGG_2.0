import React, {useState} from 'react'
import { signupPost } from '../../api/api'
import { useNavigate} from 'react-router-dom'
import {loginPost} from '../../api/api'
import Header from '../UI/Header'
import { useCookies } from "react-cookie";
// redux
import { login, selectUser } from "../../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
function SignUp() {
const navigate = useNavigate()
const [email, setemail] = useState('')
const [password , setpassword] = useState('')
const [emailerror , setemailerror] = useState('')
const [passworderror , setpassworderror] = useState('')
const [username , setusername] = useState('')
const [mobilenumber, setmobilenumber] = useState(0)
const [firstname , setfirstname] = useState('')
const [lastname , setlastname] = useState('')
const dispatch = useDispatch();
const [cookies, setCookie] = useCookies();
const handleSubmit = async (e) =>{
  e.preventDefault();
  const user = {
    userName:username,
    firstName:firstname ,
    lastName:lastname,
    email:email,
    password:password,
    mobileNumber:mobilenumber
  }
  const res1 = await signupPost(user)
  if(res1==="success"){
    const res2 = await loginPost(user)

    if(res2==="success"){
      dispatch(
        login({
          email:user.email
        })
      )
      return navigate("/")
    }
  }

}
  return (
    <div>

        <form onSubmit={(e) =>handleSubmit (e)}>
            <h2>Sign up</h2>
            <label htmlFor='username'>Username</label>
            <input type='text' value={username} name='username'
            onChange = {(e) => setusername(e.currentTarget.value)} />

            <label htmlFor='firstname'>First Name</label>
            <input type='text' value={firstname} name='firstname'
            onChange = {(e) => setfirstname(e.currentTarget.value)} />

            <label htmlFor='lastname'>Last Name</label>
            <input type='text' value={lastname} name='lastname'
            onChange = {(e) => setlastname(e.currentTarget.value)} />   


            <label htmlFor='mobilenumber'>Mobile Number</label>
            <input type='text' value={mobilenumber} name='mobile'
            onChange = {(e) => setmobilenumber(e.currentTarget.value)} /> 

            <label htmlFor="email" >Email</label>
            <input type="text" name="email" 
            value={email}
            onChange = {(e) => setemail(e.currentTarget.value)}
            required />

            <div className="email error"  
           >
              {emailerror}
            </div>
            <label htmlFor="password"
           
            >Password</label>

            <input type="password" name="password"
            value = {password}
            onChange = {e => setpassword(e.currentTarget.value)}
             required />

            <div className="password error">
             {passworderror}
            </div>

            <button>Sign up</button>
        </form>
    </div>
  )
}

export default SignUp