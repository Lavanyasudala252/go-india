import { FeaturedData } from '@/utils/FeaturedData';
import Image from 'next/image';
import './feature.css';

const Featured = () => {
  return (
    <div className='featured w-full p-2 px-8'>
      <p className='text-red-500 py-3  hidden lg:block text-left font-semibold text-base'>
        FEATURED COMPANIES
      </p>
      <div className='scroll-parent '>
        <div className='company-image-container w-screen scroll-smooth primary  py-3'>
          {FeaturedData.map((data, index) => (
            <Image
              className='rounded-full lg:rounded-lg p-1'
              key={index}
              src={data.imageUrl}
              alt='companyName'
              width={60}
            />
          ))}
        </div>
        <div className='company-image-container secondary w-screen scroll-smooth  py-3'>
          {FeaturedData.map((data, index) => (
            <Image
              className='rounded-full lg:rounded-none p-1'
              key={index}
              src={data.imageUrl}
              alt='companyName'
              width={60}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;