import React, { useEffect, useState } from 'react';
import { Youtube_vdo_Api } from '../utils/constant';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

import AdVideoCard from './VideoCard';

const VideoContainer = () => {

const [videos,setVideos] = useState([]);

  useEffect(()=>{
   getVideos();
  },[]);

  const getVideos = async()=>{
    const data = await fetch(Youtube_vdo_Api);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos[0]&&<AdVideoCard info={videos[0]}/>}
      {videos.map((video)=><Link to ={"/watch?v=" + video.id}>
      <VideoCard   key={video.id} info={video}/>
    </Link>
    )}

    </div>
  )
}

export default VideoContainer
