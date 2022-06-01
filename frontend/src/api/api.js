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
