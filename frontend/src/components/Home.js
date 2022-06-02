import React , {useEffect} from 'react'
import Grid from '@mui/material/Grid'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
function Home() {

  return (
    <>
    <Grid container spacing = {2}  flexDirection='row' height='90vh'>
          <Grid item xs = {1} 
          >
            <Grid container display ='flex' flexDirection='column' style ={{marginTop:'20vh'}}
            >
              <Grid item style={{marginBottom:40}} >
                <HomeOutlinedIcon />
              </Grid>
              <Grid item style={{marginBottom:40}}>
                <NotificationsNoneOutlinedIcon />
              </Grid>
              <Grid item style={{marginBottom:40}}>
                <BookmarksOutlinedIcon />
              </Grid>
              <Grid item style={{marginBottom:40}}>
                <ArticleOutlinedIcon />
              </Grid>
              <br />
              <Grid item style={{marginBottom:40}}>
                <RateReviewOutlinedIcon />
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs = {7}>
        Item 2
        </Grid>
        <Grid item xs = {4}>
        Item 3
        </Grid>
    </Grid>
    </>
  )
}

export default Home