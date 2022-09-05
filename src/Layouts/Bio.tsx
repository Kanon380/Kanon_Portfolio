import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { IoIosSchool } from 'react-icons/io'
import { AiFillChrome } from 'react-icons/ai'
import { DiCodeigniter } from 'react-icons/di'
import { MdWorkOutline } from 'react-icons/md'
import { MdOutlineWorkOff } from 'react-icons/md'
import { BiCurrentLocation } from 'react-icons/bi'

type childType = {
  text: string,
}

export default function Bio() {
  return (
    <div className="container mx-auto px-4 mb-20 flex flex-col items-center">
      <div>
        <h2 className="font-bold text-3xl mb-5 text-center">Bio</h2>
        <Circle text='1998.06.17' />
        <Line text='日本で生まれる' />
        <Circle text='2012.--.--' />
        <Line text='初めてプログラムと出会う' />
        <Circle text='2017.04.01' />
        <Line text={`IT職に就きたいため、\nITの四年制専門学校入学`} />
        <Circle text='2018.04.01' />
        <Line text={`サイト制作に感動し、\nWEB制作学科専攻`} />
        <Circle text='2020.04.01' />
        <Line text={`SEとしてアルバイト`} />
        <Circle text='2021.04.01' />
        <Line text={`SEとして就職`} />
        <Circle text='2022.01.31' />
        <Line text={`評価制度に折り合いがつかず退職`} />
        <Circle text='2022.02.~~' />
        <Line text={`現在に至る`} />
      </div>

    </div>
  )
}

const Circle = (props: childType) => {
  return (
    <div className="flex">
      <div className="flex w-6 h-6 my-1">
        <div className="w-full h-full">
          {props.text === '1998.06.17' && <AiOutlineUserAdd className='text-gray-700 w-full h-full' />}
          {props.text === '2012.--.--' && <BsCodeSlash className='text-gray-700 w-full h-full' />}
          {props.text === '2017.04.01' && <IoIosSchool className='text-gray-700 w-full h-full' />}
          {props.text === '2018.04.01' && <AiFillChrome className='text-gray-700 w-full h-full' />}
          {props.text === '2020.04.01' && <DiCodeigniter className='text-gray-700 w-full h-full' />}
          {props.text === '2021.04.01' && <MdWorkOutline className='text-gray-700 w-full h-full' />}
          {props.text === '2022.01.31' && <MdOutlineWorkOff className='text-gray-700 w-full h-full' />}
          {props.text === '2022.02.~~' && <BiCurrentLocation className='text-gray-700 w-full h-full' />}
        </div>
      </div>
      <div className='flex items-center ml-3'>
        <p className='text-sm font-semibold'>{props.text}</p>
      </div>
    </div>
  )
}

const Line = (props: childType) => {
  return (
    <div className="flex">
      <div className="flex justify-center w-6 h-20">
        <div className="w-[2px] h-full bg-gray-700"></div>
      </div>
      <div className='flex items-center ml-3'>
        <p className='font-bold whitespace-pre-wrap'>{props.text}</p>
      </div>
    </div>
  )
}