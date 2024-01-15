import'./App.css'
import {navdata} from './data';
import {apiUrl} from './data'
import Navlinks from './components/Navlinks';
import Coursecards from './components/Coursecards';
import React, { useState,useEffect } from 'react';
import Notfound from './components/Notfound';


function App() {

  const [filterbuttons,setNavdata]=useState(navdata);
  const [courses,setCourses]=useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCat]=useState(navdata[0].title);

  
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

  
  return (
    <div className="App w-screen h-5/6 relative  flex flex-col items-center gap-12 p-8 overflow-x-hidden">
    
    
      <Navlinks className="navbar " filterbuttons={filterbuttons} navdata={navdata} setNavdata={setNavdata} category={category} setCat={setCat} ></Navlinks>
      {
        loading ? (<Notfound/>) : (<Coursecards className="corsecontainer bg-black overflow-x-hidden" courses={courses} category={category}/>)
      }
    
    </div>
  );
}

export default App;
