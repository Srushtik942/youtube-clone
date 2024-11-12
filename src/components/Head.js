import React from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {

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
      <input className='w-1/2 border border-gray-500 p-2 rounded-l-full' type='text'></input>
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
