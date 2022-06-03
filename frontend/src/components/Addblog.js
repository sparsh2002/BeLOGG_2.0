import React ,{useState} from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'; 
import {Button, TextField} from '@mui/material'
import {addblog} from '../api/api'
import {useNavigate} from 'react-router-dom'
import { selectUser } from "../feature/userSlice";
import {  useSelector } from "react-redux";
function Addblog() {
  const [title , setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleQuill = (value) =>{
    setContent(value)
  }
  let navigate = useNavigate()
  const user = useSelector(selectUser);
  const handleSubmit =() =>{
    const blog ={
      authorId: user._id,
      title:title,
      content:content
    }
    addblog(blog)
    setContent('')
    setTitle('')
    return navigate("/")
  }
  return (
    <>
      <TextField value ={title} onChange={(e)=>setTitle(e.currentTarget.value)}  fullWidth label="Title" id="fullWidth" />
      <br />
      <br />
      <ReactQuill value={content} onChange={handleQuill} placeholder='Whats in your mind' />
      <Button onClick={handleSubmit}>Post</Button>
    </>
  )
}

export default Addblog