import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ArtGallery2 from '../explore/art-gallery2'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Paragraph4() {
    const [current, setCurrent] = useState(1)

    const btnCategories = ["New", "3D Art", "Collectibles", "Music", "Painting", "Painting", "Gaming "]
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
            title : "Beautiful Artworkadsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            description : "Collectiblessadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            artUrl : "/assets/img/art3.gif",
            artId : "art3",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art4.jpeg",
            artId : "art4",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art1.png",
            artId : "art5",
            buttonTitle : "BUY NOW"
        },
    ]

    return (
        <div className='w-full h-auto'>
            <div className='relative grid grid-cols-1 gap-8 m-8 sm:m-16'>
                {/* categories */}
                <div className="flex flex-col space-y-12">
                    <h1 className="text-white dark:text-gray-800 text-2xl sm:text-4xl font-bold">Explore all NFTs and Start to Collect</h1>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0'>
                        <div className='flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0'>
                            {btnCategories.map((item, index) => (
                                <button key={"btn-category" + index.toString()} className={classNames(index === current ? 'bg-[#FF457D] dark:bg-gray-800 text-white' : 'border border-[#2C3166] dark:border-gray-400 bg-[#002046] dark:bg-white text-[#919CC1] dark:text-gray-800', 'text-xs rounded-full px-4 py-1.5')} onClick={() => setCurrent(index)}>{item}</button>
                            ))}
                        </div>
                        <div className='flex-grow'></div>
                        <div className='flex-none'>
                            <Link href="#">
                                <a className="flex-none text-right text-[#A2A6D0] hover:text-white dark:text-gray-800 dark:hover:text-gray-600">
                                    See All
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* galleries */}
                <ArtGallery2 galleries={galleries}></ArtGallery2>
            </div>
        </div>
    )
}