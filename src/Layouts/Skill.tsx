import { DiReact } from 'react-icons/di'
import { FaLaravel } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { GrMysql } from 'react-icons/gr'
import { BsWordpress } from 'react-icons/bs'
import { DiJqueryLogo } from 'react-icons/di'
import { DiGit } from 'react-icons/di'

export default function Skill() {
  return (
    <div className="container mx-auto px-4 mb-20">
      <h2 className="font-bold text-3xl mb-5">Skill</h2>
      <Item margin='mb-4' title='React' percent='90%' bgClassName='bg-cyan-500' percentClassName='w-[90%]' />
      <Item margin='mb-4' title='Laravel' percent='90%' bgClassName='bg-red-500' percentClassName='w-[90%]' />
      <Item margin='mb-4' title='Docker' percent='75%' bgClassName='bg-sky-500' percentClassName='w-[75%]' />
      <Item margin='mb-4' title='CSS' percent='90%' bgClassName='bg-blue-500' percentClassName='w-[90%]' />
      <Item margin='mb-4' title='SQL' percent='90%' bgClassName='bg-amber-500' percentClassName='w-[90%]' />
      <Item margin='mb-4' title='WordPress' percent='75%' bgClassName='bg-gray-500' percentClassName='w-[75%]' />
      <Item margin='mb-4' title='jQuery' percent='90%' bgClassName='bg-blue-500' percentClassName='w-[90%]' />
      <Item margin='' title='Git' percent='90%' bgClassName='bg-orange-500' percentClassName='w-[90%]' />
    </div>
  )
}

type Item = {
  margin: string,
  title: string,
  percent: string,
  bgClassName: string,
  percentClassName: string,
}

const Item = (props: Item) => {
  return (
    <div className={`${ props.margin } flex w-full h-10`}>
      <div className={`w-10 h-full mr-2 rounded flex justify-center items-center ${ props.bgClassName }`}>
        { props.title==='React' && <DiReact className='w-6 h-6 text-white' /> }
        { props.title==='Laravel' && <FaLaravel className='w-6 h-6 text-white' /> }
        { props.title==='Docker' && <FaDocker className='w-6 h-6 text-white' /> }
        { props.title==='CSS' && <DiCss3 className='w-6 h-6 text-white' /> }
        { props.title==='SQL' && <GrMysql className='w-6 h-6 text-white' /> }
        { props.title==='WordPress' && <BsWordpress className='w-6 h-6 text-white' /> }
        { props.title==='jQuery' && <DiJqueryLogo className='w-6 h-6 text-white' /> }
        { props.title==='Git' && <DiGit className='w-6 h-6 text-white' /> }
      </div>
      <div className='w-full flex-1'>
        <div className='flex justify-between mb-1'>
          <p className='font-semibold'>{ props.title }</p>
          <p className='font-semibold'>{ props.percent }</p>
        </div>
        <div className='w-full h-2 rounded bg-slate-300 relative'>
          <div className={`${ props.percentClassName } absolute rounded top-0 h-full ${ props.bgClassName }`}></div>
        </div>
      </div>
    </div>
  )
}