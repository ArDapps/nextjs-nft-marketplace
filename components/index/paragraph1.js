
export default function Paragraph1() {
    const title = "Discover, Collect, and Sell Extraordinary NFTs"
    const description = "OpenSea is the world's first and largest NFT marketplace"
    
    return (
        <div className='flex flex-row'>
            {/* left element */}
            <div className='relative'>
                <div className='absolute top-[12vw] left-[9vw] w-[80vw] md:w-[50vw] lg:w-[40vw] flex flex-col'>
                    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>{title}</h1>
                    <p className='text-white text-base leading-tight mt-2 sm:mt-6'>{description}</p>
                    <div className='flex-1 flex flex-row gap-8 mt-[4vw]'>
                        <div className=''>
                            <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base px-6 sm:px-10 py-2 shadow-md'>Collection</button>
                        </div>
                        <div className=''>
                            <button className='rounded-full border bg-[#0D0F23] text-white text-base px-6 sm:px-10 py-2 shadow-md'>Create NFT</button>
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