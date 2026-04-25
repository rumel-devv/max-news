import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: 1,
      title: "Global Tech Stocks Surge Amid AI Boom",
    },
    {
      id: 2,
      title: "Heavy Rainfall Causes Flooding in Several Regions",
    },
    {
      id: 3,
      title: "National Football Team Secures Historic Victory",
    },
    {
      id: 4,
      title: "New Startup Raises Millions in Funding Round",
    },
  ];

  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 p-2 px-2">
      <button className="btn bg-red-500 rounded-md text-white">
        Latest News
      </button>
      <Marquee pauseOnHover={true} >
        {news.map((n) => {
          return (
            <p key={n.id} className="mx-4">
              {" "}
              {n.title}{" "}
            </p>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
