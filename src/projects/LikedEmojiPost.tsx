import React, { useState, useEffect } from 'react';

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
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      {/* Header */}
      <div className="p-8">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://via.placeholder.com/40"
            alt="Profile"
          />
          <div className="ml-4">
            <div className="text-sm font-semibold text-gray-900">User Name</div>
            <div className="text-sm text-gray-500">October 26, 2023</div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-auto"
          src="https://via.placeholder.com/600x400"
          alt="Post content"
        />
        <div
          className={`text-6xl text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out ${
            showEmoji ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ❤️
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-8">
        <div className="flex justify-between items-center">
          <button
            onClick={handleLike}
            className={`${
              isLiked ? 'text-red-500' : 'text-blue-500'
            } hover:text-blue-700`}
          >
            {isLiked ? 'Liked' : 'Like'}
          </button>
          <button className="text-gray-500 hover:text-gray-700">Comment</button>
          <button className="text-gray-500 hover:text-gray-700">Share</button>
          <button className="text-gray-500 hover:text-gray-700">Save</button>
          <button className="text-gray-500 hover:text-gray-700">Options</button>
        </div>
      </div>
    </div>
  );
};

export default LikedEmojiPost;
