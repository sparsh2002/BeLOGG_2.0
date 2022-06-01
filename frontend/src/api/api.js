import axios from 'axios'

export const addUser = async (user) => {
    console.log(user)
    return await axios.post(`api/user/adduser`, user);
}


export const signupPost = async (user) =>{
    console.log(user)
    axios.post('/api/auth/signup' , user)
    return "success"
}
