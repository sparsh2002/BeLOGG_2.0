import React from 'react'
import {Card, CardContent ,Avatar, Box, Typography , Divider} from '@mui/material'
function BlogComponent({blog}) {
  return (
    <>
        <Box>
            <Box display = 'flex' flexDirection='row' alignItems='center'>
                <Avatar alt="profile" src="" style={{marginRight:10}} />
                <Typography style={{marginRight:10}}>UserName</Typography>
                <Typography style={{marginRight:10}}>TimeStamp</Typography>
            </Box>
            <Divider style={{margin :'10px 0px'}} />
            <Box>
                <Typography variant="h5">{blog?.title}</Typography>
                <Typography>{blog?.content}</Typography>
            </Box>
        </Box>
    </>
  )
}

export default BlogComponent