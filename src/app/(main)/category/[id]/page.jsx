import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getcatgories, getNewsByCategory } from "@/lib/data";
import React from "react";

const CategoryIdPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getcatgories();
  const news = await getNewsByCategory(id);

  return (
    <div className="grid grid-cols-12 gap-5 mt-4">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>
      <div className="col-span-6">
        <h1 className="text-lg font-semibold">News Home</h1>
        <div className="space-y-3">
          {news.length > 0 ? (
            news.map((n, index) => (
              <NewsCard news={n} className="p-4" key={index}></NewsCard>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center  rounded-lg py-10 mt-4">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                No News Found 📰
              </h2>
              <p className="text-gray-500 mb-4 text-center px-4">
                There are no articles available in this category right now.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default CategoryIdPage;
