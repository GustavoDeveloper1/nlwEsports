import React from 'react'

interface GameBannerProps {
    bannerUrl: string;
    title: string;
    addCount: number;
}

function Gamebanner(gameBanner: GameBannerProps) {
    return (
        <>
            <a href="" className='relative rounded-lg overflow-hidden'>
                <img src={gameBanner.bannerUrl} alt="" />

                <div className="w-full pt-6 pb-4 px-4 bg-game-gradient  absolute bottom-0 right-0 left-0">
                    <strong className='font-bold text-white block'>{gameBanner.title}</strong>
                    <span className='text-zinc-300 text-sm block mt-1'>{gameBanner.addCount} anúncios</span>
                </div>
            </a>
        </>
    )
}

export default Gamebanner