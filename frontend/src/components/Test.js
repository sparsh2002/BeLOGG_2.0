import React  ,{useState}from 'react'
import { addUser } from '../api/api';
const initialValue = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    mobileNumber:0
}


function Test() {

const [user, setUser] = useState(initialValue);
const addUserDetails = async() => {
    await addUser(user);
}

  return (
    <div>This is a test page</div>
    
  )
}

export default Test