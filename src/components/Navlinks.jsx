import React, { useState } from 'react'

export default function Navlinks({filterbuttons,category,setCat}) {

  const [focus,setFocus]=useState(category);

 
  return (
    <div className='navlinks w-5/6 bg-amber-50 h-12 rounded-md flex justify-evenly overflow-x-hidden'>
      {
        filterbuttons.map((navdata)=>{
            return (
                <button key={navdata.title} className="buttons text-bold font-serif text-2xl border-hidden" style={{opacity:focus===navdata.title?0.5:1}} 
                 onClick={()=>{
                  setFocus(navdata.title);
                  setCat(navdata.title);
                  console.log(category);
                 }}>
                  {navdata.title}
                </button>
            )
        })
      }
      
    </div>
  )
}
