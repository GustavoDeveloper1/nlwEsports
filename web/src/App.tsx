import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import Logoimg from './assets/logo-nlw-esports.png'
import Gamebanner from './components/Gamebanner';
import CreatedAddBanner from './components/CreatedAddBanner';

import { getGames } from './services/Games.services';

import './styles/main.css';
import { GameController } from 'phosphor-react';

interface GamesProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<GamesProps[]>([])

  useEffect(() => {
    getgames();
  }, []);

  const getgames = async () => {
    const resultGames = await getGames();
    setGames(resultGames.data)

  }

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={Logoimg} alt="logo-img" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-8">
        {games.map(((game: GamesProps) => (
          <>
            <Gamebanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              addCount={game._count.ads} />
          </>
        )))}
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 ">
        <Dialog.Root>
          <CreatedAddBanner />

          <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
              <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio!</Dialog.Title>

              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2 '>
                  <label htmlFor='game' className='text-base text-white font-semibold' >Qual o game?</label>
                  <input type="text" id='game' placeholder='Selecione o game que deseja jogar...' className='bg-zinc-900 py-3 px-4 rounded text-sm' />
                </div>
                <div className='flex flex-col gap-2 '>
                  <label htmlFor='name' className='text-base text-white font-semibold'>Seu nome (ou nickname)</label>
                  <input type="text" id='name' placeholder='Como te chamam no jogo?' className='bg-zinc-900 py-3 px-4 rounded text-sm' />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor='YearsPlaying' className='text-base text-white font-semibold'>Joga há quantos anos?</label>
                    <input type="number" id='YearsPlaying' placeholder='Tudo bem ser ZERO' className='bg-zinc-900 py-3 px-4 rounded text-sm' />
                  </div>
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor='discord' className='text-base text-white font-semibold'>Qual o seu Discord?</label>
                    <input type="text" id='discord' placeholder='Usuario#0000000' className='bg-zinc-900 py-3 px-4 rounded text-sm' />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor='weeksDays' className='text-base text-white font-semibold'>Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button title='domingo' className='w-8 h-8 rounded bg-zinc-900 '>D</button>
                      <button title='segunda' className='w-8 h-8 rounded bg-zinc-900 '>S</button>
                      <button title='terça' className='w-8 h-8 rounded bg-zinc-900 '>T</button>
                      <button title='quarta' className='w-8 h-8 rounded bg-zinc-900 '>Q</button>
                      <button title='quinta' className='w-8 h-8 rounded bg-zinc-900 '>Q</button>
                      <button title='sexta' className='w-8 h-8 rounded bg-zinc-900 '>S</button>
                      <button title='sabado' className='w-8 h-8 rounded bg-zinc-900 '>S</button>

                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor='discord' className='text-base text-white font-semibold'>Qual o horario do dia?</label>
                    <div className="grid grid-cols-2 gap-2" >
                      <input type="time" id="hourStart" placeholder='De' className='bg-zinc-900 py-3 px-4 rounded text-sm' />
                      <input type="time" id="hourEnd" placeholder='Até' className='bg-zinc-900 py-3 px-4 rounded text-sm' />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 text-sm">
                  <input type="checkbox" name="" id="" />
                  Costumo me conectar ao chat de Voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  < Dialog.Close className='bg-zinc-500 text-white px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                  <button
                    type="submit"
                    className='bg-violet-500 flex items-center  text-white px-5 h-12 rounded-md font-semibold hover:bg-violet-600'>
                    <GameController size={24} />
                    Encontrar Duo
                  </button>
                </footer>
              </form>

            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>


    </div>
  )
}

export default App
