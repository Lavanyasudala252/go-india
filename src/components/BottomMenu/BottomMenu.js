import { useState } from 'react';
import { FiHome, FiSettings } from 'react-icons/fi';
import {BiChat} from "react-icons/bi"
import {MdOutlineDashboard} from "react-icons/md"
import {LiaBoxesSolid} from "react-icons/lia"
import {BsCardChecklist} from "react-icons/bs"

function BottomMenu() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-blue-950 flex justify-around py-4'>
        <button
        className={`flex flex-col items-center text-white`}
        onClick={() => handleTabClick('dashboard')}
      >
        <MdOutlineDashboard size={20} className='text-white' />
        {activeTab === 'dashboard' && (
          <div className='h-1 w-full bg-red-500 mt-1'></div>
        )}
      </button>
      <button
        className={`flex flex-col items-center text-white`}
        onClick={() => handleTabClick('box')}
      >
        <LiaBoxesSolid size={20} className='text-white' />
        {activeTab === 'box' && (
          <div className='h-1 w-full bg-red-500 mt-1'></div>
        )}
      </button>
      <button
        className={`flex flex-col items-center text-white`}
        onClick={() => handleTabClick('home')}
      >
        <FiHome size={20} className='text-white' />
        {activeTab === 'home' && (
          <div className='h-1 w-full bg-red-500 mt-1'></div>
        )}
      </button>
      <button
        className={`flex flex-col items-center text-white`}
        onClick={() => handleTabClick('profile')}
      >
        <BiChat size={20} className='text-white' />
        {activeTab === 'profile' && (
          <div className='h-1 w-full bg-red-500 mt-1'></div>
        )}
      </button>
      <button
        className={`flex flex-col items-center text-white`}
        onClick={() => handleTabClick('checklist')}
      >
        <BsCardChecklist size={20} className='text-white' />
        {activeTab === 'checklist' && (
          <div className='h-1 w-full bg-red-500 mt-1'></div>
        )}
      </button>
    </div>
  );
}

export default BottomMenu;