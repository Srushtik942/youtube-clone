import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { Youtube_search_api } from '../utils/constant';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);


  useEffect(()=>{

    //api call on every key stroke
    //but if the difference between 2 api calls is < 200 ms
    //decline the api call
    //typing slow =200ms
    //typint fast = 30ms

setTimeout(()=>getSearchSuggestions(),200);

  },[searchQuery]);

  const getSearchSuggestions = async()=>{
    const data = await fetch(Youtube_search_api + searchQuery )
    const json = await data.json();
    console.log(json[1]);
  }

  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
   dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1 mx-2'>
<img
onClick={()=>toggleMenuHandler()}
className='h-8 cursor-pointer'
alt='Menu' src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png'></img>

<a href="/">
<img className='h-14 mb-2'
 alt='youtube logo' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'></img>
</a>
    </div>
    <div className='col-span-10 px-10'>
      <input
      className='w-1/2 border border-gray-500 p-2 rounded-l-full' type='text'
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      ></input>
      <button className='border border-gray-500 px-5 py-2 rounded-r-full bg-gray-300'>Search</button>
    </div>
    <div>
      <img className='h-8 col-span-1'
       alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'/>
    </div>
    </div>
  )
}

export default Head;
