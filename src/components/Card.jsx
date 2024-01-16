import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "./Card.css";
export default function Card(props) {
  let course = props.course;
  const description = props.course.description;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function handleclick() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed", {
        position: "top-center",
        autoClose: 1000,
        theme:"dark"
      });
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("liked successfully", {
        position: "top-center",
        autoClose: 1000,
        theme:"dark"
      });
    }
  }
  return (
    <div className="card overflow-x-hidden relative shadow-sm rounded-md shadow-white w-96 text-white ">
      <img
        className="courseimage w-full object-cover"
        src={props.course.image.url}
        alt={props.course.title}
      />
      <button className="like" onClick={handleclick}>
        {likedCourses.includes(course.id) ? (
          <FcLike className="w-6 h-6" />
        ) : (
          <FcLikePlaceholder />
        )}
      </button>
      <div className="desc-container  flex flex-col gap-2 p-4">
        <div className="font-mono font-bold text-xl text-yellow-200">
          {props.course.title}
        </div>
        <div className="description">{`${description.substr(0, 189)}...`}</div>
      </div>
    </div>
  );
}
