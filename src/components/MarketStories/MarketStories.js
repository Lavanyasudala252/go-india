/* eslint-disable @next/next/no-img-element */
import './marketStories.css';

import { userPosts } from '@/utils/userPosts';

const MarketStories = () => {
  return (
    <div className='stories-post-scroll py-4  '>
      <div>
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4'>
          {userPosts.map((data, i) =>
            data.post.image !== undefined ? (
              <div key={i} className='relative rounded-lg max-w-[100%]'>
                <img
                  src={data.post.image}
                  alt='image'
                  className='w-full rounded-2xl'
                />
                <div className='absolute top-0 rounded-2xl left-0 w-full h-full bg-black opacity-50'></div>
                <div className='absolute bottom-0  rounded-2xl left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-base text-center'>
                  {data.post.message}
                </div>
              </div>
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketStories;