import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { Youtube_vdo_Api } from '../utils/constant';

const WatchPage = (videoID) => {



  const [searchParams] = useSearchParams();



  //giving video id
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  })
  return (
    <div className='px-5'>
     <iframe width="1100" height="500" src={"https://www.youtube.com/embed/"+ searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
     <div className='p-2 m-2 font-bold flex'>
     <ul className='flex mx-3 justify-between space-x-10'>
      <button className="bg-gray-200 p-2 m-2 rounded-md hover:bg-gray-300">Comment</button>
      <button className='bg-gray-200 p-2 m-2  rounded-md flex hover:bg-gray-300  '><img className='h-6 ' alt='share' src='https://cdn-icons-png.flaticon.com/512/6469/6469436.png'/>Share</button>
      <button className='bg-gray-200 p-2 m-2 rounded-md hover:bg-gray-300'>Subscribe</button>
     </ul>
     </div>
    </div>
  )
}

export default WatchPage;
