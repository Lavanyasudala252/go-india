import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-blue-950   ${
        isOpen ? 'w-60 relative' : 'w-0'
      } duration-300 h-screen`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`text-base text-white absolute   ${
          isOpen ? '-right-4 inset-y-1/3' : '-left-1 inset-y-1/3'
        }`}
      >
        <div className=' cursor-pointer w-6 rounded-md h-20 bg-blue-950  flex items-center'>
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              class='w-6 h-6'
            >
              <path
                fill-rule='evenodd'
                d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'
                clip-rule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              class='w-6 h-6'
            >
              <path
                fill-rule='evenodd'
                d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                clip-rule='evenodd'
              />
            </svg>
          )}
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div
          className='flex w-full text-white justify-between items-center
        border border-l-0 border-r-0 border-t-0 border-b-1 p-3'
        >
          <div className='text-base flex gap-2 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              class='w-6 h-6'
            >
              <path
                fill-rule='evenodd'
                d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                clip-rule='evenodd'
              />
            </svg>

            <span>Hello, User</span>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            class='w-6 h-6'
          >
            <path
              fill-rule='evenodd'
              d='M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z'
              clip-rule='evenodd'
            />
          </svg>
        </div>
        <div className='flex mt-2  gap-2 w-full flex-col justify-items-start'>
          <div className='flex w-full cursor-pointer bg-black p-3 text-white justify-between items-center '>
            <div className='text-base flex gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Discussion Forum</span>
            </div>
          </div>
          <div className='flex p-3 cursor-pointer text-white justify-between items-center '>
            <div className='text-base flex gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='w-6 h-6'
              >
                <path d='M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z' />
                <path
                  fill-rule='evenodd'
                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z'
                  clip-rule='evenodd'
                />
              </svg>
              <span>Market Stories</span>
            </div>
          </div>
          <div className='p-3 cursor-pointer ml-8 text-white '>
            <span>Sentiment</span>
          </div>
          <div className='p-3 cursor-pointer ml-8 text-white '>
            <span>Market</span>
          </div>
          <div className='p-3 cursor-pointer ml-8 text-white '>
            <span>Sector</span>
          </div>
          <div className='p-3 cursor-pointer ml-8 text-white '>
            <span>Watchlist</span>
          </div>
          <div className='p-3 cursor-pointer ml-8 text-white '>
            <span>Events</span>
          </div>
          <div className='p-3 cursor-pointer ml-8 text-white '>
            <span>News/Interview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;