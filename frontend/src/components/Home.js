import React , {useEffect , useState} from 'react'
import Grid from '@mui/material/Grid'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import BlogComponent from './BlogComponent';
// import { useCookies } from "react-cookie";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
function Home() {
  const [blogs, setblogs] = useState([])
  
  useEffect(() => {
    axios.get('/api/blog/')
    .then(res => setblogs(res.data.reverse()))
    .catch(e => console.log(e))
  }, [])
  return (
    <>
    <Grid container spacing = {2}  flexDirection='row' height='90vh'>
          <Grid item xs = {1} 
          >
            <Grid container display ='flex' flexDirection='column' style ={{marginTop:'20vh'}}
            >
              <Grid item style={{marginBottom:40}} >
                <HomeOutlinedIcon fontSize='large' />
              </Grid>
              <Grid item style={{marginBottom:40}}>
                <NotificationsNoneOutlinedIcon fontSize='large' />
              </Grid>
              <Grid item style={{marginBottom:40}}>
                <Link to='/blog'><BookmarksOutlinedIcon fontSize='large' /></Link>
              </Grid>
              <Grid item style={{marginBottom:40}}>
                <ArticleOutlinedIcon fontSize='large' />
              </Grid>
              <br />
              <Grid item style={{marginBottom:40}}>
                <Link to='/addblog'><RateReviewOutlinedIcon fontSize='large' /></Link>
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs = {7}>
            {
              blogs?.map((blog , key) => <div key={key} style ={{margin:'10px 0px'}}>
                <BlogComponent blog={blog} />
              </div>)
            }
        </Grid>
        <Grid item xs = {4}>
            <Sidebar />
        </Grid>
    </Grid>
    </>
  )
}

export default Home