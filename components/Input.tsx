import React from 'react'
import ImageUpload from './ImageUploader'
import EmojiList from './EmojiList'

const Input = () => {
    const handleImageUpload = (file: File) => {
        console.log('Uploaded file:', file);
      };
  return (
    <div>
        <div className='relative flex items-center w-full h-[40px] p-5'>
        <input type="text" dir='ltr' placeholder='Enter your message' className='text-[#828282] text-[16px] w-full px-4 py-2 h-[40px] rounded-lg border-[1.5px] border-[#E0E0E0]'/>
        <div className='flex justify-center items-center gap-3 absolute right-8 top-2'>
          <div className='w-6 h-6'><ImageUpload onUpload={handleImageUpload} /></div>
          <div className='w-6 h-6'> <EmojiList/></div>
          <img src="/images/voice.svg" alt="" className='w-6 h-6'/>
        </div>
      </div>
    </div>
  )
}

export default Input