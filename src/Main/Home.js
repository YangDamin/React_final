import React, { useState, useEffect, useCallback } from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Home.css';
import Loader from "../Video/Loader";
import Nav from '../Common/Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Video/VideoList.css";
import Grid from "@mui/material/Grid";
import Swal from 'sweetalert2';

const Home = () => {
  const [videoList, setVideoList] = useState([]);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFirstTime, setNotFirstTime] = useState(false);

  const getFetchData = async () => {
    await axios({
      url: 'http://54.193.18.159:8080/posts',
      method: 'get'
    }).then((res) => {
      let response = res.data;
      setResult(response.slice(0, 6));
      response = response.slice(6);
      setVideoList(response);
      setIsLoading(false);
      setNotFirstTime(true);
    })

  };
  const _infiniteScroll = useCallback(
    () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

      let clientHeihgt = document.documentElement.clientHeight;
      scrollHeight -= 100;
      if (scrollTop + clientHeihgt >= scrollHeight && isLoading === false && videoList.length > 0) {
        fetchMoreData();
      }
    },
    [isLoading],
  );


  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);
  // videoList 상태가 변경시에 실행된다.

  const fetchMoreData = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setResult(result.concat(videoList.slice(0, 6)));
    setVideoList(videoList.slice(6));
    setIsLoading(false);
  }

  const moveToTop = () => (document.documentElement.scrollTop = 0);

  const loginStart = (link) => {
    if(sessionStorage.getItem("email")){
        window.location = `/${link}`;
    }else{
        Swal.fire(
            '',
            '로그인 먼저 해주세요!',
            'success'
          )
        setTimeout(function(){
            window.location = '/users/signin';
        },2000)
    }
  }



  return (
    <>
      <Nav />
      <Container className="video_content">
        <Box className="video_item"
          sx={{
            // flexGrow: 6 ,
            width: '98%',
            bgcolor: 'rgba(238, 238, 238, 1)',
            borderRadius: '40px 40px 0 0',
            borderWidth: "5px",
            borderColor: 'black',
            borderStyle: 'solid',
            borderColor: 'black'
          }}>
          <Grid container id='grid' className="grid-container">

            {result.map((p, index) => {
              return (
                <Grid item col-xs={4} col-6 col-md-4>
                  <Grid item col-xs={4}>
                    <div id="videoListBox" onClick={ (e) => {
                e.preventDefault();
                loginStart("/post/detail")
            }}>
                      <Link to={`/view/${p.id}`} className="link" > 
                        {/* <img className="videoCard_thubmnail" src={p.video_path} alt="video_thubmnail" /> */}

                        {/* 영상에서 썸네일 추출 */}
                        {/* <VideoImageThumbnail
                          videoUrl={p.videoPath}
                          className="videoCard_thubmnail"/> */}
                        <img className="videoCard_thubmnail" src={p.videothumbnail} alt="video_thubmnail" />

                        <div className="video_title">
                          {p.title}
                        </div>
                        <div className="video_date">
                          {p.user.name}  ·  {p.date}
                        </div>
                        <div className="video_date">
                          조회수  {p.viewCnt}회
                        </div>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              );
            })}

          </Grid>

        </Box>
        <span>
          {(isLoading && notFirstTime) ? (<Loader />) : ("")}
        </span>
        <div>
          <button
            className="btn-top"
            onClick={moveToTop}
          >
            <i class="bi bi-caret-up-fill"></i>
          </button>
        </div>
      </Container>

    </>
  );
}

export default Home;


