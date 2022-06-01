import axios from 'axios'

export const addUser = async (user) => {
    console.log(user)
    return await axios.post(`api/user/adduser`, user);
}


export const signupPost = (user) =>{
    // console.log(user)
    axios.post('/api/auth/signup' , user)
    return "success"
}

export const loginPost = (user) =>{
    axios.post('/api/auth/login' , user)
    return "success"
}

export const checkUser = () =>{
   axios.get('/api/auth/checkuser').then( res =>{
       console.log(res)
   }).catch(e =>console.log(e))
   
}

export const logoutGet = () =>{
    axios.get('/api/auth/logout').then( res =>{
        console.log(res)
    }).catch(e =>console.log(e))
}
