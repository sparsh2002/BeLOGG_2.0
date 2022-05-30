import axios from 'axios'

export const addUser = async (user) => {
    console.log(user)
    return await axios.post(`api/user/adduser`, user);
}

