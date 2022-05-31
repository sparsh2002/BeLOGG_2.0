import React from 'react'

function Login() {
  return (
    <div>
        <form action="/login">
        <h2>Login</h2>
        <label for="email">Email</label>
        <input type="text" name="email" required />
        <div class="email error">some error</div>
        <label for="password">Password</label>
        <input type="password" name="password" required />
        <div class="password error"></div>
        <button>login</button>
        </form>
    </div>
  )
}

export default Login