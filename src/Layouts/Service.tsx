import { BsCodeSlash } from 'react-icons/bs'
import { MdSystemSecurityUpdateGood } from 'react-icons/md'
import { MdWebAsset } from 'react-icons/md'

export default function Service() {
  return (
    <div className="container mx-auto px-4 mb-20 ">
      <h2 className='font-bold text-3xl mb-5 text-center'>Service</h2>
      <div className='flex justify-between overflow-x-auto'>
        <div className='md:w-full md:justify-around flex'>
          <div className="w-72 h-60 rounded flex flex-col justify-center items-center p-4 mr-4 text-white bg-indigo-600">
            <BsCodeSlash className='w-10 h-10' />
            <h3 className='font-bold my-4'>WEBサイト</h3>
            <p className='text-sm'>主にReact、Viteを使用して制作致します</p>
          </div>
          <div className="w-72 h-60 rounded flex flex-col justify-center items-center p-4 mr-4 text-white bg-yellow-600">
            <MdSystemSecurityUpdateGood className='w-10 h-10' />
            <h3 className='font-bold my-4'>WEBシステム</h3>
            <p className='text-sm'>主にReact、PHPを使用して制作致します</p>
          </div>
          <div className="w-72 h-60 rounded flex flex-col justify-center items-center p-4 text-white bg-rose-600">
            <MdWebAsset className='w-10 h-10' />
            <h3 className='font-bold my-4'>WEBデザイン</h3>
            <p className='text-sm'>主にPhotoshop、illustrator、XDで制作致します</p>
          </div>
        </div>
      </div>
    </div>
  )
}