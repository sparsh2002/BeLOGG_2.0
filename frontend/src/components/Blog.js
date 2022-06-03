import React , {useState , useEffect} from 'react'
import { getBlogsForCurrentUser } from '../api/api'
import { useCookies } from "react-cookie";
import axios from 'axios';
import parse from 'html-react-parser';
import { Divider } from '@mui/material';
import { selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Blog() {
  const [blogs , setblogs] =  useState([])
  const user = useSelector(selectUser);
  const id = user?._id
  useEffect(() => {
    axios.get(`/api/blog/getallblogsforcurrrentuser/${id}`).then((res)=>{
      setblogs(res.data)
    }).catch(e =>{
        console.log('failed to fetch blogs')
        // console.log(e)
    })
  }, [])
  return (
    <>
    <div>
       <h2> These are your blogs</h2>
       <br/>
       <Divider />
    </div>
    <br></br>
    {
      blogs?.map((blog , key) => 
      <div key={key}>
        <p><span style={{fontWeight:900}} >Title: </span>{blog.title}</p>
        <br />
        <p><span style={{fontWeight:900}} >Content: </span>{parse(blog.content)}</p>
        <br />
      </div>)
    }
    </>
  )
}

export default Blog