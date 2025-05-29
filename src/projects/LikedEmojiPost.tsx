import React, { useState } from "react";
import {
  FaComment,
  FaShareAlt,
  FaBookmark,
  FaEllipsisH,
  FaHeart,
} from "react-icons/fa";

const LikedEmojiPost: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowEmoji(true);
      setTimeout(() => {
        setShowEmoji(false);
      }, 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
      <div className="p-2">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://tse4.mm.bing.net/th?id=OIP.y_-RrO81dmnPR5dKO0GYWAHaHa&pid=Api&P=0&h=180"
            alt="Profile"
          />
          <div className="ml-4">
            <div className="text-sm font-semibold text-gray-900">Faizal </div>
            <div className="text-xs text-gray-500">October 26, 2023</div>
          </div>
        </div>
      </div>

      <div
        className={`relative hover:cursor-pointer ${
          showEmoji ? "z-50 bg-black" : ""
        }`}
        onDoubleClick={handleLike}
      >
        <img
          className="w-full h-auto bg-black"
          src="https://tse4.mm.bing.net/th?id=OIP.g-ap368Nhcw6EAgYF_BV0gHaEK&pid=Api&P=0&h=180"
          alt="Post image"
        />
        <div
          className={`text-[7rem] text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out ${
            showEmoji ? "opacity-100 " : "opacity-0"
          }`}
        >
          ❤️
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center px-2">
          <button
            onClick={handleLike}
            className={`${isLiked ? "text-red-500" : ""} hover:text-slate-500`}
          >
            {isLiked ? <FaHeart size={20} /> : <FaHeart size={20} />}
          </button>
          <button className="hover:text-slate-500">
            <FaComment size={20} />
          </button>
          <button className="hover:text-slate-500">
            <FaShareAlt size={20} />
          </button>
          <button className="hover:text-slate-500">
            <FaBookmark size={20} />
          </button>
          <button className="hover:text-slate-500">
            <FaEllipsisH size={20} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikedEmojiPost;
