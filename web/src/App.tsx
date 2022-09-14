import Logoimg from './assets/logo-nlw-esports.png'
import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css'

function App() {


  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={Logoimg} alt="logo-img" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-8">
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-6 pb-4 px-4 bg-game-gradient  absolute bottom-0 right-0 left-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-6 pb-4 px-4 bg-game-gradient absotule bottom-0 left-0 right-0"></div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-6 pb-4 px-4 bg-game-gradient absotule bottom-0 left-0 right-0"></div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-6 pb-4 px-4 bg-game-gradient absotule bottom-0 left-0 right-0"></div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-6 pb-4 px-4 bg-game-gradient absotule bottom-0 left-0 right-0"></div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-6 pb-4 px-4 bg-game-gradient absotule bottom-0 left-0 right-0"></div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 ">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between">
          <div className="">
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className=' py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex  items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
