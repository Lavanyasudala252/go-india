/* eslint-disable @next/next/no-img-element */
import { userPosts } from '@/utils/userPosts';
import './discussion.css';

const DiscussionForum = () => {
  return (
    <div>
      <h1 className='text-base font-bold '>Filters</h1>
      <div className='my-4 form-container'>
        <div className='buttons-container bg-white p-4  rounded-lg flex gap-1 justify-between items-center'>
          <button className='bg-red-500 w-auto text-white text-xs rounded-2xl py-3 px-2 lg:px-4'>
            Sector 1
          </button>
          <button className='bg-blue-500 text-white text-xs rounded-2xl py-3 px-2 lg:px-4'>
            Sector 2
          </button>
          <button className='bg-yellow-500 text-white  text-xs rounded-2xl py-3 px-2 lg:px-4'>
            Sector 3
          </button>
          <div className='search-box-container  w-16 lg:w-fit '>
            <div className='relative text-gray-600 focus-within:text-gray-400'>
              <input
                type='search'
                name='q'
                className='py-2 w-full text-sm text-gray-400 bg-gray-300   rounded-2xl   focus:outline-none '
                autoComplete='off'
              />
              <span className='absolute inset-y-0 right-0 flex items-center pl-2'>
                <button
                  type='submit'
                  className='pr-2 focus:outline-none focus:shadow-outline'
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    className='w-5 h-5'
                  >
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className='user-post-scroll px-1  mt-4'>
          {userPosts.map((data, index) => (
            <div key={index} className='mt-4 w-full bg-white p-4 rounded-lg'>
              <p className='text-sm font-semibold text-blue-600 text-right'>
                {data.time}
              </p>
              {data.post.image !== undefined ? (
                <div>
                  <img
                    src={data.post.image}
                    alt='image'
                    className='w-full max-h-60'
                  />
                </div>
              ) : (
                ''
              )}
              <div className='flex w-full gap-2 mt-2'>
                <img
                  src={data.userimage}
                  alt='userImage'
                  className='w-10 h-10  rounded-full border'
                />
                <div className='user-post-data flex  w-full flex-col gap-4 '>
                  <div className='profile flex gap-3'>
                    <p className='text-base text-gray-500 font-semibold'>
                      {data.username}
                    </p>
                    <button className='bg-red-500 w-auto text-white text-xs rounded-2xl py-1 px-4'>
                      Sector 1
                    </button>
                  </div>
                  <div className='post-msg'>
                    <p className='text-gray-500 text-base '>
                      {data.post.message}
                    </p>
                  </div>
                  <div className='post-like flex gap-1 justify-between items-center'>
                    <div className='flex gap-1 items-center '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        class='w-6 h-6'
                      >
                        <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                      </svg>

                      <p className='text-gray-500 text-xs font-semibold'>
                        {data.like}K
                      </p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        class='w-6 h-6'
                      >
                        <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                        <path
                          fill-rule='evenodd'
                          d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
                          clip-rule='evenodd'
                        />
                      </svg>

                      <p className='text-gray-500 text-xs font-semibold'>
                        {data.views}K
                      </p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        class='w-6 h-6'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z'
                          clip-rule='evenodd'
                        />
                      </svg>

                      <p className='text-gray-500 text-xs font-semibold'>
                        {data.comments}K Comments
                      </p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        class='w-6 h-6'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z'
                          clip-rule='evenodd'
                        />
                      </svg>

                      <p className='text-gray-500 text-xs font-semibold'>
                        {data.share}K Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;