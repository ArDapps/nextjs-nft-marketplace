
export default function Paragraph1() {
    const title = "Discover, Collect, and Sell Extraordinary NFTs"
    const description = "OpenSea is the world's first and largest NFT marketplace"
    
    return (
        <div className='flex flex-col space-y-8 md:flex-row md:space-y-0 mx-8 sm:mx-16 lg:mx-[9vw]'>
            {/* left element */}
            <div className='relative mt-8 sm:mt-16 lg:mt-[9vw]'>
                <div className='md:absolute md:top-[12vw] md:left-0 md:w-[50vw] flex flex-col items-center md:items-start text-white dark:text-gray-800'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>{title}</h1>
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
                <img src="/assets/svg/bg-ethereum-nft.svg" alt="BgEthereumNFT" className='sm:max-w-full h-auto ml-0 md:ml-[22vw]'></img>
            </div>
        </div>
    )
}