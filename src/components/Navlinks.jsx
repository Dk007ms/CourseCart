import React, { useState } from 'react'
import './Navlinks.css'

export default function Navlinks({filterbuttons,category,setCat,dropdown,Smalldrop}) {

  const [focus,setFocus]=useState(category);

 
  return (
    <div className={`navlinks ${dropdown ? 'mobilestyle' : ''} ${Smalldrop ? 'mobilestylesmall' : ''}`}>
      {
        filterbuttons.map((navdata)=>{
            return (
               <React.Fragment key={navdata.title}>
                <button key={navdata.title} className="buttons" style={{opacity:focus===navdata.title?0.5:1}} 
                 onClick={()=>{
                  setFocus(navdata.title);
                  setCat(navdata.title);
                 }}>
                  {navdata.title}
                </button>
               </React.Fragment>
            )
        })
      }
      
    </div>
  )
}
