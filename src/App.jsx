import'./App.css'
import {navdata} from './data';
import {apiUrl} from './data'
import Navlinks from './components/Navlinks';
import Coursecards from './components/Coursecards';
import React, { useState,useEffect } from 'react';
import Notfound from './components/Notfound';
import { IoArrowRedo } from "react-icons/io5";
import { FaAngleDoubleDown } from "react-icons/fa";
import Spinner from './components/Spinner';

function App() {

  const [filterbuttons,setNavdata]=useState(navdata);
  const [courses,setCourses]=useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCat]=useState(navdata[0].title);
  const [dropdown,setdrop]=useState(false);
  const [Smalldrop, setSmallSdrop] = useState(false);
  const [translateX, setTranslateX] = useState(0);
    
  async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } 
      catch (error) {
        ;
      }
      setLoading(false);
    }
  useEffect(()=>{
    fetchData();
  }, []);

  function handlecategory(){
    if(window.matchMedia('(max-width: 326px)').matches){
      if(dropdown){
        setdrop(prev=>!prev);
        setTranslateX(0);
      }
      else{
        setdrop(prev=>!prev);
        setTranslateX((prev) => prev + 4.6);
      }
    }

    else if(window.matchMedia('(max-width: 376px)').matches){

      if(Smalldrop){
        setSmallSdrop(prev=>!prev);
        setTranslateX(0);
      }

      else{
        setSmallSdrop(prev=>!prev);
        setTranslateX((prev) => prev + 4.8);
      }
    }
  }


  return (
    <div className="App w-screen h-max relative  flex flex-col items-center gap-12 p-8 overflow-x-hidden">
    
    {(dropdown|| Smalldrop) && <div className="overlay" onClick={handlecategory}></div>}
      <button 
        className="category-btn" 
        onClick={handlecategory}
        style={{ transform: `translateX(${translateX}rem)` }}
      >
      Category  
      {(dropdown||Smalldrop) ?<FaAngleDoubleDown className='hidecategory size-8' />:<IoArrowRedo className='showcategory size-8' />}
      
      </button>
      <div className="Title w-75% h-8  rounded-md rounded-t-lg text-white font-mono text-[180%] bg">Course Catalog</div>
      <Navlinks className="navbar " filterbuttons={filterbuttons} navdata={navdata} setNavdata={setNavdata} category={category} setCat={setCat} dropdown={dropdown}  Smalldrop={Smalldrop} ></Navlinks>
      {
        loading ? (<Spinner/>) : (<Coursecards className="corsecontainer bg-black overflow-x-hidden" courses={courses} category={category}/>)
      }
    
    </div>
  );
}

export default App;
