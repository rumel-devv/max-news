import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories,activeId}) => {
    return (
        <div>
              <h2 className="text-lg">All categories</h2>
    <ul className="space-y-2 text-center mt-4">            
      {categories.news_category.map(category =>  <li key={category.category_id} 
      className= {` ${activeId == category.category_id &&  'bg-black text-white'}  p-1 px-2 text-md font-semibold rounded-md`}>
         <Link className='block cursor-pointer' href={`/category/${category.category_id}`}> {category.category_name}  </Link>
         </li> )}

              </ul>
        </div>
    );
};

export default LeftSidebar;