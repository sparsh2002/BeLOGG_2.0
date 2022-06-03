import React , {useEffect , useState} from 'react'
import {Card, CardContent ,Avatar, Box, Typography , Divider, TextField , FormControl , Form , InputLabel , Input , InputAdornment, Button} from '@mui/material'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import axios from 'axios'
import parse from 'html-react-parser';
import { addComment } from '../api/api';
import { useCookies } from "react-cookie";
import ReactTimeAgo from "react-time-ago";
import profileImg from '../assets/images/profile.jpeg'
function BlogComponent({blog}) {
  const [user , setuser] = useState()
  const [cookies, setCookie] = useCookies();
  const [comment , setcomment] = useState()
  const [allcomments , setAllComments] = useState([])
  function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="twitter" />
      </div>
    );
  }
  const postComment =() =>{
    const data = {
      authorId : cookies.user._id , 
      title:'',
      blogId : blog._id,
      content : comment,
    }
    addComment(data)
    setcomment('')
  }
 
  
  
 
  useEffect(() => {
    axios.get(`/api/user/${blog.authorId}`).then(res =>{
        setuser(res.data)
    }).catch(e => console.log(e))
  }, [])
  return (
    <>
        <Box>
            <Box display = 'flex' flexDirection='row' alignItems='center'>
                <Avatar alt="profile" 
                src={profileImg}
                style={{marginRight:10}} />
                <Typography style={{marginRight:10}}>{user?.userName}</Typography>
                <Typography style={{marginRight:10}}>
                  <LastSeen date = {blog?.createdAt} /> 
                  </Typography>
            </Box>
            <Divider style={{margin :'10px 0px'}} />
            <Box>
                <Typography variant="h5">{blog?.title}</Typography>
                <Typography>{parse(blog?.content)}</Typography>
            </Box>
            <Box>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <Input
                id="standard-adornment-amount"
                value={comment}
                onChange={e => setcomment(e.currentTarget.value)}
                placeholder='write a comment'
                startAdornment={<InputAdornment position="start"><ModeCommentOutlinedIcon  fontSize='medium'/></InputAdornment>}
                endAdornment={<InputAdornment position='end'>
                  <Button onClick={postComment}>Post</Button>
                  </InputAdornment>}
              />
              
            </FormControl>
            </Box>
            <Box>
              {
                blog.allComments ? <Typography>{blog.allComments.length} Comment(s)</Typography> : " "
              }
              {
                blog.allComments ? blog.allComments.map((data , key) => 
                <Box key={key}>
                  <Box style={{display:'flex' , flexDirection:'row' , alignItems:'center'}}>
                  <Avatar src= {profileImg} alt='usercomment' sx={{ width: 24, height: 24 }} />
                  <Typography style={{marginLeft:5 , fontSize:'small'}} >BeLOGG user</Typography>
                </Box>
                <Box>
                  <Typography>{data.content}</Typography>
                </Box>
                </Box>) : ""
              }
            </Box>
        </Box>
    </>
  )
}

export default BlogComponent