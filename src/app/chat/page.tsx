"use client";
import React from 'react'
import { Chat, Contacts, Profile, ProfileChat } from '../../../components';


const Page = () => {


  return (
    <div className='grid grid-cols-5'>
      <div className='lg:col-span-1 lg:block md:hidden sm:hidden hidden'>
        <Profile/>
      </div>
     
      <div className='lg:col-span-3 md:col-span-5 h-full col-span-5'>
         <ProfileChat/>
         <Chat/>
      </div>
      

      <div className='lg:col-span-1 lg:block md:hidden sm:hidden hidden h-[100vh]'>
        <Contacts/>
      </div>
    </div>
  )
}

export default Page;
