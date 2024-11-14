import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    //accesing thumbnail
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
<img className="rounded-lg" alt="thumbnail" src= {thumbnails?.medium?.url}/>

 <ul>
      <li className='font-bold'>{title}</li>
      <li>{channelTitle}</li>
     <li className='flex mt-3 '><img className='h-7 ' alt= "view"src='https://static.vecteezy.com/system/resources/thumbnails/000/437/767/small/Basic_Ui__28109_29.jpg'/>{statistics?.viewCount}</li>
 </ul>
    </div>
  )
};

export const AdVideoCard = ({info})=>{
  return (
  <div
  className='p-1 m-1 border border-red-900'>
    <VideoCard info={info}/>
    </div>
)}


export default VideoCard;
