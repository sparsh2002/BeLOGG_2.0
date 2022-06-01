import React 
// ,{useState} 
from 'react'

function Login() {
  // const [email, setemail] = useState('')
  // const [password, setpassword] = useState('')
  return (
    <div>
        <form action="/login">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" required />
        <div className="email error">some error</div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />
        <div className="password error"></div>
        <button>login</button>
        </form>
    </div>
  )
}

export default Login