
export default function Paragraph1() {
    const title = "Discover, Collect, and Sell Extraordinary NFTs"
    const description = "OpenSea is the world's first and largest NFT marketplace"
    
    return (
        <div className='flex flex-row'>
            {/* left element */}
            <div className='relative'>
                <div className='absolute top-1/2 -translate-y-1/2 sm:top-[12vw] sm:translate-y-0 left-[10vw] w-[80vw] md:w-[50vw] lg:w-[40vw] flex flex-col text-white dark:text-gray-800'>
                    <h1 className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>{title}</h1>
                    <p className=' text-base leading-tight mt-2 sm:mt-6'>{description}</p>
                    <div className='flex-1 flex flex-row gap-8 mt-[4vw]'>
                        <div className=''>
                            <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-xs sm:text-base px-6 sm:px-10 py-1.5 sm:py-2 shadow-lg'>Collection</button>
                        </div>
                        <div className=''>
                            <button className='rounded-full border text-xs sm:text-base px-6 sm:px-10 py-1.5 sm:py-2 dark:border-gray-300 shadow-lg'>Create NFT</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* right element : background image */}
            <div className='flex-1 overflow-hidden'>
                <img src="/assets/svg/bg-ethereum-nft.svg" alt="BgEthereumNFT" className='max-w-full h-auto ml-[22vw]'></img>
            </div>
        </div>
    )
}