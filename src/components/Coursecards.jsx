import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category=props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    function getCourses() {
      if(props.category==='All'){
        let allCourses = [];
        Object.values(courses).forEach(array => {
           array.forEach(courseData => {
              allCourses.push(courseData);
            })
        })
        return allCourses;
      }

      else{
        return courses[category];   
      }
        

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 overflow-x-hidden overflow-y-hidden h-max min-h-1 p-4 w-full">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
              course = {course} 
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
        ))
      }
    </div>
  )
}

export default Cards
