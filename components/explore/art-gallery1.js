export default function ArtGallery1(props) {
    return (
        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {props.galleries.map((item, index) => (
                <div key={item.artId} className='relative w-full h-auto'>
                    <img src='/assets/svg/bg-top-newest-nft-art.svg' alt='BgTopNewestNFTArt' className='w-full h-auto'></img>

                    <div className='absolute w-full h-full left-0 top-0 grid grid-cols-1 justify-items-center gap-2 text-white text-center p-4'>
                        <h1 className="text-xl sm:text-2xl xl:text-4xl">{item.title}</h1>
                        <p className="text-base">{item.description}</p>
                        <img src={item.artUrl} alt={item.artId} className='w-1/2 lg:w-[45%] xl:w-[55%] h-auto rounded-full'></img>
                        <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base uppercase w-3/4 py-2 shadow-md mx-auto my-2'>⚡ {item.buttonTitle}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}