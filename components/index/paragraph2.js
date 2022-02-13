import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ArtGallery1 from '../explore/art-gallery1'

export default function Paragraph2() {
    const galleries = [
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art1.png",
            artId : "art1",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art2.jpeg",
            artId : "art2",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art3.gif",
            artId : "art3",
            buttonTitle : "BUY NOW"
        }
    ]

    return (
        <div className='w-full h-auto'>
            {/* absolute */}
            <div className="relative w-full h-full">
                <img src="/assets/svg/dot-square.svg" alt="dot-square" className="absolute left-0 top-0 w-[10vw]"></img>
            </div>
            
            <div className='relative grid grid-cols-1 gap-8 mx-8 sm:mx-16 lg:mx-[9vw]'>
                {/* galleries */}
                <div className="flex flex-cols">
                    <h1 className="flex-grow text-white dark:text-gray-800 text-2xl sm:text-4xl font-bold">Check Top Newest NFTs</h1>
                    <Link href="#">
                        <a className="flex-none text-right text-[#A2A6D0] dark:text-gray-800 dark:hover:text-gray-600">
                            See All
                            <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                        </a>
                    </Link>
                </div>
                
                <ArtGallery1 galleries={galleries}></ArtGallery1>
            </div>
        </div>
    )
}