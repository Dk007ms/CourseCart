import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

export default function Card(props) {
    let course=props.course;
    const description=props.course.description;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function handleclick(){
       if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=>prev.filter(cid=>cid!==course.id));
        toast.warning("like removed");
       }

       else{
        setLikedCourses(prev=>[...prev,course.id]);
        toast.success("liked successfully");
       }
    }
  return (
    
      <div className="card overflow-x-hidden h-fit relative shadow-sm rounded-md shadow-white w-96 text-white ">  
        <img className="courseimage w-full object-cover" src={props.course.image.url} alt={props.course.title} />
        <button className="like bg-white w-8 h-8 rounded-full flex justify-center items-center absolute right-2 bottom-48" onClick={handleclick}>
          {likedCourses.includes(course.id)?<FcLike className='w-6 h-6' />:<FcLikePlaceholder/>}
        </button>
        <div className="desc-container h-52 flex flex-col gap-2 p-4">
          <div className="font-mono font-bold text-xl text-yellow-200">{props.course.title}</div>
          <div className="description">{`${description.length<=189?description:description.substr(0,189)}...`}</div>
        </div>
         
      </div>
    
  )
}
