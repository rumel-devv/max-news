import { getNewsByNewsId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export  const generateMetadata = async ({params}) => {
      const {id} = await params
      const news = await getNewsByNewsId(id);
      return {
    title: news.title,
    description: news.details
      }
}

const newsDetailsPage =async ({params}) => {
    const {id} = await params
    const news = await getNewsByNewsId(id);
    console.log(news);
    return (
        <div className='border border-gray-400 rounded-md p-4 space-y-5 w-9/12 mx-auto mt-6'>
            <Image src={news.image_url} width={500} height={500} alt='details news image' className='w-full '/>
            <h2 className='text-2xl font-semibold'> {news.title} </h2>
            <p className='text-gray-600'> {news.details} </p>
            <Link href={`/category/${news.category_id}`} >
            <button className='btn bg-red-500 text-white'> <FaArrowAltCircleLeft/> All News In catrgory </button>
            </Link>
        </div>
    );
};

export default newsDetailsPage;