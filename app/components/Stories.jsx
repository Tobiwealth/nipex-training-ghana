'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

//react components
const Stories = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function fetchPosts () {
      fetch(`https://dev.to/api/articles?per_page=10`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }
    fetchPosts();
  }, [])
  //console.log(posts);

  
  return (
    <div className='px-16'>
      <h2 className='font-bold text-4xl text-[#333] text-center'>-TOP STORIES-</h2>
      <div className='grid grid-cols-3 place-items-center mx-auto w-fit gap-12 p-6'>
        {posts.map((post,index) => (<div key={index} className='w-[280px]'>
        <Image
          src={post?.cover_image ?? '/blog.jpg'}
          width={280}
          height={280}
          alt='blog image'
        />
          <h3 className='font-semibold text-xl text-black'>{post?.title}</h3>
          <p className='font-normal text-base text-gray-400'>
            {post?.description}
          </p>
          <p className='font-normal text-sm text-gray-500'>{post?.user?.name}</p>
        </div>))}
      </div>
    </div>
  )
}

export default Stories
