import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
// import {YOUTUBE_VIDEOS_API} from '../utils/constants';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

  useEffect(() =>{
    getVideos();
  },[])

  const getVideos = async () => {
    try {
      const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyDR1NmBSbFZLealv32dEfApLhITs79J8WM");
      if (!data.ok) {
        throw new Error(`Request failed with status: ${data.status}`);
      }
      const json = await data.json();
      // console.log(json.items);
      setVideos(json.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div className='flex flex-wrap overflow-hidden'>
      {videos.map(video => ( <Link key = {video.id} to={"/watch?v="+video.id} >
        <VideoCard  info={video}/> </Link> 
      ))}
    </div>
  )
};

export default VideoContainer
