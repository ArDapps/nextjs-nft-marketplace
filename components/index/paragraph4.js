import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Paragraph4() {
    const [current, setCurrent] = useState(1)

    const btnCategories = ["New", "3D Art", "Collectibles", "Music", "Painting", "Painting", "Gaming "]
    const exploreNftDetails = [
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "explore1",
            buttonTitle : "Buy Now"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "explore2",
            buttonTitle : "Buy Now"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
            artId : "explore3",
            buttonTitle : "Buy Now"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "explore4",
            buttonTitle : "Buy Now"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "explore5",
            buttonTitle : "Buy Now"
        },
    ]

    return (
        <div className='w-full h-auto'>
            <div className='relative grid grid-cols-1 gap-8 m-8 sm:m-16 lg:m-[9vw]'>
                {/* categories */}
                <div className="flex flex-col space-y-12">
                    <h1 className="text-white text-2xl sm:text-4xl font-bold">Explore all NFTs and Start to Collect</h1>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0'>
                        <div className='flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0'>
                            {btnCategories.map((item, index) => (
                                <button key={"btn-category" + index.toString()} className={classNames(index === current ? 'bg-[#FF457D] text-white' : 'border border-[#2C3166] bg-[#002046] text-[#919CC1]', 'text-xs rounded-full px-4 py-1.5')} onClick={() => setCurrent(index)}>{item}</button>
                            ))}
                        </div>
                        <div className='flex-grow'></div>
                        <div className='flex-none'>
                            <Link href="#">
                                <a className="flex-none text-right text-[#A2A6D0] hover:text-white">
                                    See All
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* galleries */}
                <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {exploreNftDetails.map((item, index) => (
                        <div key={item.artId} className='w-full h-auto grid grid-cols-1 bg-[#161A42] rounded-2xl text-white'>
                            <div className='grid grid-cols-1 gap-2 p-4'>
                                <div className='bg-white rounded-xl'>
                                    <img src={item.artUrl} alt={item.artId} className='w-full h-auto'></img>
                                </div>
                                <div className='flex flex-row'>
                                    <h1 className="flex-grow text-base">{item.title}</h1>
                                    <button className="rounded-full border-2 border-[#2E357B] w-[1.75rem] text-white">
                                        <FontAwesomeIcon icon={faAngleRight} className="" />
                                    </button>
                                </div>
                                <p className="text-[#A2A6D0] text-sm">{item.description}</p>
                                <div className='flex flex-row'>
                                    <button className="rounded-full w-[1.5rem] bg-[#325BC5]">
                                        <FontAwesomeIcon icon={faEthereum} className="" />
                                    </button>
                                    <h1 className="flex-grow text-[#47DEF2] text-base ml-2">0.045ETH</h1>
                                </div>
                                <p className="text-sm">Account Address</p>
                                <p className="text-[#A2A6D0] text-xs">Onwer</p>
                            </div>                            
                            
                            <div className="border-t-2 border-[#2E357B] p-4">
                                <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base uppercase w-full px-4 py-2 shadow-md'>⚡ {item.buttonTitle}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}