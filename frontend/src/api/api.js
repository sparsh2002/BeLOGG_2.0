import axios from 'axios'


// getBlogs for current user

export const getBlogsForCurrentUser =(id) =>{
    if(id){
        axios.get(`/api/blog/getallblogsforcurrrentuser/${id}`).then((res)=>{
            // console.log(res.data)
            return res.data
        }).catch(e =>{
            console.log('failed to fetch blogs')
            // console.log(e)
        })
        
    }
    else{
        return "login first"
    }
}


// User
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


export const addblog =(blog) =>{
    axios.post('/api/blog/addblog' , blog)
    return "success"
}