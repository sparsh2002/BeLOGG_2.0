import React , {useState , useEffect} from 'react'
import { getBlogsForCurrentUser } from '../api/api'
import { useCookies } from "react-cookie";
import axios from 'axios';
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
  // console.log(blogs)
  return (
    <>
    <div>
        This is the Blogg Page
    </div>
    <br></br>
    {
      blogs?.map((blog , key) => 
      <div key={key}>
        <p>Blog Id: {blog._id}</p>
        <p>Author Id :{blog.authorId}</p>
        <p>Title: {blog.title}</p>
        <p>Content: {blog.content}</p>
        <br />
      </div>)
    }
    </>
  )
}

export default Blog