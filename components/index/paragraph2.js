import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Paragraph2() {
    const topArtDetails = [
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-round1.svg",
            artId : "art1",
            buttonTitle : "Buy Now"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-round2.svg",
            artId : "art2",
            buttonTitle : "Buy Now"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-round3.svg",
            artId : "art3",
            buttonTitle : "Buy Now"
        }
    ]

    return (
        <div className='w-full h-auto'>
            {/* absolute */}
            <div className="relative">
                <img src="/assets/svg/dot-square.svg" alt="dot-square" className="absolute left-0 top-0 -translate-x-1/2 w-[10vw]"></img>
            </div>
            
            <div className='relative grid grid-cols-1 gap-8 mx-8 sm:mx-16 lg:mx-[9vw]'>                
                {/* galleries */}
                <div className="flex flex-cols">
                    <h1 className="flex-grow text-white text-2xl sm:text-4xl font-bold">Check Top Newest NFTs</h1>
                    <Link href="#">
                        <a className="flex-none text-right text-[#A2A6D0] hover:text-white">
                            See All
                            <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                        </a>
                    </Link>
                </div>
                
                <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {topArtDetails.map((item, index) => (
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
            </div>
        </div>
    )
}