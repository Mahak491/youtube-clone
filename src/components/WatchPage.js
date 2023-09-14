import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {
   
    const [searhParams] = useSearchParams();
    console.log(searhParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col'>
    <div className='px-12 py-5'>
      <iframe width="850"
      height="510"
      src={'https://www.youtube.com/embed/'+searhParams.get("v")}
      title="YouTube video player"
      frameBorder="0"
      allow='acceleromete; autoplay; clipboard-write; encrypted-media; gyroscope; '>

      </iframe>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage
