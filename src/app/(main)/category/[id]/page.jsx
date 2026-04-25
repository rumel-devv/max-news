import LeftSidebar from "@/components/homepage/news/LeftSidebar";
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
        <h1 className="text-lg font-semibold">News by catgory</h1>
        <div className="space-y-3">
          {news.length > 0 ?  news.map((n, index) => (
            <div className="p-4" key={index}>
              {n.title}
            </div>
          )) : <div> <h2 className="text-center font-bold text-red-500 text-4xl">No Data found</h2> </div> }
        </div>
      </div>
      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default CategoryIdPage;
