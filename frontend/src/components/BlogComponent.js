import React , {useEffect , useState} from 'react'
import {Card, CardContent ,Avatar, Box, Typography , Divider} from '@mui/material'
import axios from 'axios'
import parse from 'html-react-parser';
function BlogComponent({blog}) {
  const [user, setuser] = useState()
//   console.log(blog.authorId)
  useEffect(() => {
    axios.get(`/api/user/${blog.authorId}`).then(res =>{
        setuser(res.data)
    }).catch(e => console.log(e))
  }, [])
  console.log(user)
  return (
    <>
        <Box>
            <Box display = 'flex' flexDirection='row' alignItems='center'>
                <Avatar alt="profile" src="" style={{marginRight:10}} />
                <Typography style={{marginRight:10}}>{user?.userName}</Typography>
                <Typography style={{marginRight:10}}>{blog?.createdAt}</Typography>
            </Box>
            <Divider style={{margin :'10px 0px'}} />
            <Box>
                <Typography variant="h5">{blog?.title}</Typography>
                <Typography>{parse(blog?.content)}</Typography>
            </Box>
        </Box>
    </>
  )
}

export default BlogComponent