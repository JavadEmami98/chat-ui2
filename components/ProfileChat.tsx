import React from 'react'
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';
import Camera from './Camera';

const ProfileChat = () => {
    const router = useRouter();
  return (
    <div>
         <div className='flex px-6 py-5 justify-between items-center border-b-[2px] h-[80px] border-[#E0E0E0]'>
          <div className='flex gap-6'>
          <MoreVertIcon 
              onClick={() => router.push('/profile')}
              className='cursor-pointer lg:hidden'
            />
               <Camera/>
            <img src="/images/call.svg" alt="" className='h-[24px] w-[24px]'/>
          </div>
          <div className='flex justify-end cursor-pointer items-center gap-4'>
            <div className='flex flex-col items-end'>
              <p className='text-[16px] font-medium text-[#000]'>Helena</p>
              <p className='text-[16px] text-[#454545]'>Active 20m ago</p>
            </div>
            <Avatar src="/images/helena.svg" sx={{ width: "48px", height: "48px" }} />
          </div>
        </div>
    </div>
  )
}

export default ProfileChat