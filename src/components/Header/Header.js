/* eslint-disable @next/next/no-img-element */
import { CompaniesStockData } from '@/utils/CompaniesStockData';
import './header.css';

export default function Header() {
  return (
    <>
      <header className='bg-white border border-l-0 border-r-0 border-t-0 '>
        <nav className='flex w-auto justify-items-start items-center p-2 px-4'>
          <div className='logo'>
            <img
              className='h-8 w-auto'
              src='https://www.goindiastocks.com/Content/assets/images/logewithname.png'
              alt=''
            />
          </div>
          <div className='search-box-container m-auto w-2/4 ml-10 '>
            <div className='relative text-gray-600 focus-within:text-gray-400'>
              <input
                type='search'
                name='q'
                className='py-2 w-full text-sm text-gray-400 bg-gray-300   rounded-lg pl-2 pr-7 focus:outline-none '
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
          <div className='menu-auth-buttons menu ml-auto flex items-center justify-items-end gap-2 '>
            <h1 className='text-black text-sm font-medium'>Contact Us</h1>
            <button className='bg-white font-medium text-black text-sm border rounded-md p-2 px-5'>
              SIGN UP
            </button>
            <button className='bg-white font-medium text-black text-sm border rounded-md p-2 px-5'>
              SIGN IN
            </button>
          </div>
          <div className='user-menu-profile flex items-center ml-auto'>
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="userImage" className='w-7 h-7 rounded-full'/>
          </div>
        </nav>
      </header>
      <div
        className='scroll-component w-full scroll-smooth
      overflow-x-auto bg-blue-950 '
      >
        <ul className='scroll-container flex space-x-4 px-4'>
          {CompaniesStockData.map((data, index) => (
            <li key={index} className='flex items-center gap-1'>
              <span className='company-name text-white text-sm '>
                {data.name}
              </span>
              <p
                className={`text-sm  ${
                  data.profit_or_loss ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {data.stock_value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}