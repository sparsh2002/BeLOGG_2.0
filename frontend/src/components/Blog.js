import React , {useState , useEffect} from 'react'
import { getBlogsForCurrentUser } from '../api/api'
import { useCookies } from "react-cookie";
import axios from 'axios';
import parse from 'html-react-parser';
function Blog() {
  const [blogs, setblogs] = useState([])
  const [cookies, setCookie] = useCookies();
  const {user , jwt} = cookies
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
    </div>
    <br></br>
    {
      blogs?.map((blog , key) => 
      <div key={key}>
        <p><span style={{fontWeight:900}}>Blog Id:</span> {blog._id}</p>
        <br />
        <p><span style={{fontWeight:900}} >Author Id </span>:{blog.authorId}</p>
        <br />
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