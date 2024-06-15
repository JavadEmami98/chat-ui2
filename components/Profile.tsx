import { Button } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 items-center border-l-[2px] border-[#E0E0E0] px-6 py-6 h-[100vh]'>
            <img src="/images/helena.svg" alt="" className='w-[128px] h-[128px]'/>
            <div className='flex flex-col items-center mt-2'>
                <p className='text-[#000] font-medium text-[20px]'>Helena</p>
                <p className='text-[#454545] text-[16px]'>Active 20m ago</p>
            </div>
            <Button variant="contained" sx={{height:"40px",maxWidth:"208px",width:"100%",borderRadius:"8px",boxShadow:"none",bgcolor:"#000",fontSize:"1rem",textTransform: 'none',"&:hover":{boxShadow:"none",bgcolor:"#000"}}}>View profile</Button>
            <div className='flex flex-col px-6 gap-4 w-full'>
                <div className='flex gap-4 justify-end w-full'>
                    <p className='text-[#000] font-medium text-[16px]'>Search chat</p>  
                    <img src="/images/sech.svg" alt="" />
                </div>
                <div className='flex gap-4 justify-end w-full'>
                    <p className='text-[#000] font-medium text-[16px]'>Sent images</p>  
                    <img src="/images/img.svg" alt="" />
                </div>
                <div className='flex gap-4 justify-end w-full'>
                    <p className='text-[#000] font-medium text-[16px]'>More options</p>  
                    <img src="/images/3dots.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile