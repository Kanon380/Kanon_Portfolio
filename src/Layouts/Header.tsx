import Nav from "../Components/Nav"
import { AiFillGithub } from 'react-icons/ai'
import { BsCaretDown } from 'react-icons/bs'

export default function Header () {
  return(
    <header className="w-full">
      {/* <div className="w-full fixed z-50">
        <Nav />
      </div> */}
      <div className="h-screen relative">
        <Main />
        <div className="absolute m-auto left-0 right-0 top-3/4 animate-bounce w-6 h-6">
          <BsCaretDown className="w-full h-full" />
        </div>
      </div>
    </header>
  )
}

const Main = () => {
  return(
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="font-bold text-3xl mb-3 px-4">Kanon</h1>
      <p className="text-base font-semibold mb-3 px-4">I'm a WEB developer.</p>
      <div className="flex px-4">
        <a href="https://github.com/Kanon380" target="_blank" rel="noopener noreferrer" className="mr-0"><AiFillGithub className="w-6 h-6"/></a>
      </div>
    </div>
  )
}