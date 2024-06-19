"use client";
import React from 'react'
import { Chat, Contacts, Profile, ProfileChat } from '../../../components';
import Input from '../../../components/Input';


const Page = () => {


  return (
    <div className='grid grid-cols-5 h-full'>
      <div className='lg:col-span-1 lg:block md:hidden sm:hidden hidden'>
        <Profile/>
      </div>
     
      <div className='lg:col-span-3 md:col-span-5 h-[100vh] col-span-5'>
         <div className='relative flex flex-col  h-full gap-0'>
          <ProfileChat/>
          <Chat />
         <div className='absolute bottom-4 right-0 w-full'>
           <Input/>
          </div>
         </div>
        
      </div>
      

      <div className='lg:col-span-1 lg:block md:hidden sm:hidden hidden h-[100vh]'>
        <Contacts/>
      </div>
    </div>
  )
}

export default Page;
