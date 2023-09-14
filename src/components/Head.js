import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
   const[searchQuery,setSearchQuery] = useState("");
   const [sugestions, setSuggestions] = useState([]);
   const [showSuggestions,setShowSuggestions] = useState(false);
   const searchCache = useSelector((store) => store.search);
   const dispatch = useDispatch();

   console.log(searchQuery);
   useEffect(() =>{
    const timer = setTimeout(() => { 
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }else{
      getSearchSuggestions()
    }
   },200);

    return () => {
      clearTimeout(timer);
    }
   },[searchQuery])

   const getSearchSuggestions = async () =>{
    console.log("API CALL - " + searchQuery)
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1],
      
    }));
   }

   const toggleMenuHandler = () =>{
      dispatch(toggleMenu());
   }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
      <img onClick={() => toggleMenuHandler()} className="h-8 mt-2 cursor-pointer" src="https://cdn3.iconfinder.com/data/icons/navigation-67/32/Burger_hamburger_menu-512.png" alt='menu'/>
      <a href=''>
      <img className="h-12 mx-2" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg' alt='youtubelogo'/>
      </a>
      </div>
      <div className='col-span-10 px-15 mt-2'>
        <div>
        <input className=' px-5 w-1/2 border border-gray-400 p-1 rounded-l-full' type='text'
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}/>
        <button className='border border-gray-400  rounded-r-full px-2 py-1 bg-gray-200'>search
        </button>
        </div>
        {showSuggestions && (<div className='fixed bg-white py-2 px-5 w-[35rem] rounded-lg shadow-lg border border-gray-300'>
          <ul>
            {sugestions.map(s => <li key= {s} className='py-2 hover:bg-gray-100'>{s}</li>)}
          </ul>
        </div>
        )}
      </div>
      <div className='col-span-1 mt-1'>
        <img className="h-10" alt='user' src='https://tse2.mm.bing.net/th?id=OIP._BXCcqxwmsduYNCJj2XDtgHaHa&pid=Api&P=0&h=180'/>
      </div>
    </div>
  )
}

export default Head
