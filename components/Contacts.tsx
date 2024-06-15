"use client";
import React, { useState } from 'react';
import { Avatar } from '@mui/material';

interface Contact {
  image: string;
  name: string;
  text: string;
}

const contacts: Contact[] = [
  { image: "/images/helena.svg", name: "Helena Hills", text: "Will head to the Help Center..." },
  { image: "/images/nigga.svg", name: "Carlo Emilio", text: "Let’s go" },
  { image: "/images/oscar.svg", name: "Oscar Davis", text: "Trueeeeee" },
  { image: "/images/danial.svg", name: "Daniel Jay Park", text: "lol yeah, are you coming to the lunch on the 13th?" },
  { image: "/images/mark.svg", name: "Mark Rojas", text: "great catching up over dinner!!" },
  { image: "/images/gin.svg", name: "Giannis Constantinou", text: "yep 🫡🫡" },
];

const Contacts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredContacts: Contact[] = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className='h-[100vh]'>
        <div className='flex flex-col h-[100vh] items-end gap-3 pt-6 border-r-[2px] border-[#E0E0E0]'>
          <p className='text-[#000] text-[20px] px-6 font-semibold'>App</p>
          <div className='px-6 w-full relative'>
            <input
              type="text"
              placeholder='Search chats'
              className='text-end pl-10 pr-1 py-2 w-full h-[40px] border rounded-lg'
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img src="/images/search-ic.svg" alt="" className='absolute top-2 left-8' />
          </div>
          {/* list chat */}
          <div className='flex gap-3 flex-col w-full'>
            {filteredContacts.map((item, index) => (
              <div key={index} className='flex justify-end cursor-pointer items-center gap-3 w-full px-6 hover:bg-[#F7F7F7]'>
                <div className='flex flex-col'>
                  <p className='text-[20px] text-left  font-medium text-[#000]'>{item.name}</p>
                  <p className='text-[16px] text-left max-w-[170px] line-clamp-2 text-[#454545]' dir="ltr">{item.text}</p>
                </div>
                <Avatar src={item.image} sx={{ width: "64px", height: "64px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
