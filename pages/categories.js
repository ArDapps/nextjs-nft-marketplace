import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import Header from './../components/header'
import Footer from './../components/footer'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CategoryPage() {
    const [current, setCurrent] = useState(1)

    const path = useRouter().pathname.slice(1)

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
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
            artId : "explore6",
            buttonTitle : "Buy Now"
        },
    ]
    return (
        <>
            <Head>
                <title>Categories</title>
                <link rel="icon" href="favicon.png" />
            </Head>

            <Header current={1}></Header>
            <div className='bg-[#0D0F23] w-full h-auto pt-[104px]'>
                <div className='flex flex-col mx-8 sm:mx-16 lg:mx-[9vw] space-y-8 py-4'>
                    <div className='flex-none flex flex-row items-center space-x-4 text-white text-center border-b border-[#787984] py-8'>
                        <h1 className='flex-none border-r pr-8 border-[#787984] text-2xl font-bold capitalize'>{path}</h1>
                        <div className='flex-none'>
                            <FontAwesomeIcon icon={faHomeAlt} className="ml-4" />
                        </div>
                        <div className='flex-1none'>
                            <FontAwesomeIcon icon={faAngleRight} className="" />
                            <FontAwesomeIcon icon={faAngleRight} className="" />
                        </div>
                        <p className='capitalize'>{path}</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        {/* categories */}
                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0'>
                            <div className='flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0'>
                                {btnCategories.map((item, index) => (
                                    <button key={"btn-category" + index.toString()} className={classNames(index === current ? 'bg-[#FF457D] text-white' : 'border border-[#2C3166] bg-[#002046] text-[#919CC1]', 'text-xs rounded-full px-4 py-1.5')} onClick={() => setCurrent(index)}>{item}</button>
                                ))}
                            </div>
                        </div>
                        
                        {/* galleries */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
                                            <div className="rounded-full w-[1.5rem] text-center bg-[#325BC5]">
                                                <FontAwesomeIcon icon={faEthereum} className="" />
                                            </div>
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
                    <br></br>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
