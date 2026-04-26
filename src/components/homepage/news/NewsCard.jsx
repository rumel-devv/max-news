import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsDetailsCard = ({ news }) => {
  const { _id, title, author, image_url, details, rating, total_view } = news;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
      {/* 🔝 Top Section */}
      <div className="flex justify-between items-center bg-gray-200 py-3 px-4 rounded-md">
        {/* Left: Author */}
        <div className="flex items-center gap-3">
          <Image
            src={author.img}
            alt="author iamge"
            width={45}
            height={45}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-xl cursor-pointer">
          <span>
            {" "}
            <FaShareAlt />
          </span>
          <span>
            <FaBookmark />
          </span>
        </div>
      </div>

      <h1 className="text-xl font-bold text-gray-800">{title}</h1>

      <div className="relative w-full h-64">
        <Image
          src={image_url}
          alt="news image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-gray-700 text-sm">{details.slice(0, 200)}...</p>

      <div className="flex justify-between items-center pt-3 border-t text-sm text-gray-600">
        <div className="flex flex-col">
          <span>
            {" "}
            ⭐ {rating.number} ({rating.badge})
          </span>
          <span> 👁 {total_view}</span>
        </div>
        <div> 
            <Link href={`/news/${news._id}`}>
            <button className="btn ">
                See Details
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
