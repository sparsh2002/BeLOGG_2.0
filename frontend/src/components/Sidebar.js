import React, {useState , useEffect} from 'react'
import axios from 'axios'
import profileImg from '../assets/images/profile.jpeg'
import tempImg from '../assets/images/temp.jpeg'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import {Avatar, Box, Divider, Typography , Card , CardActions, CardContent,CardMedia,Button} from '@mui/material'
function Sidebar() {
    const [blogs, setblogs] = useState()
  useEffect(() => {
    axios.get(`/api/blog/getallblogs`).then((res)=>{
        setblogs(res.data.reverse())
      }).catch(e =>{
          console.log('failed to fetch blogs')
          // console.log(e)
      })
  }, [])
  
  return (
    <>
        <Box style={{marginLeft:'5vw'}}>
            <Box style={{display:'flex' , flexDirection:'row' , 
            justifyItems:'center',
            alignItems:'center',
            alignContent:'center' , justifyContent:'center'}}>
                <SubscriptionsOutlinedIcon fontSize='large' />
                <Typography style={{marginLeft:5}}>Here are some Hot Topics for You!</Typography>
            </Box>
            <br/>
            <Divider  />
            <Box style={{marginTop:10}}>
                {
                    blogs ? blogs.slice(0, 3).map((blog , key) => 
                    <Box key={key}>
                        <Box style={{display:'flex' , flexDirection:'row' , alignItems:"center"}}>
                            <Avatar 
                            src={profileImg}
                            alt='profile'
                            />
                            <Typography style={{marginLeft:5 , fontWeight:700}}>
                                BeLOGG users
                            </Typography>
                        </Box>
                        <Typography>{blog.title}</Typography>
                        <br/>
                    </Box>) : ""
                }
            </Box>
            <Box>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    style={{blockSize:"fit-content"}}
                    component="img"
                    alt="mern"
                    height="140"
                    image={tempImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    MERN
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. ... Express and Node make up the middle (application) tier.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Box>
        </Box>
        
    </>
  )
}

export default Sidebar