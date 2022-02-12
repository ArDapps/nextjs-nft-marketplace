import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Header from './../components/header'
import Footer from './../components/footer'
import Breadcrumbs from '../components/breadcrumbs'
import ArtGallery2 from '../components/explore/art-gallery2'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CategoryPage() {
    const [current, setCurrent] = useState(1)
    
    const breadcrumbs = ["Categories"]
    const btnCategories = ["New", "3D Art", "Collectibles", "Music", "Painting", "Painting", "Gaming "]
    const galleries = [
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "art1",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "art2",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
            artId : "art3",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "art4",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "art5",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
            artId : "art6",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "art7",
            buttonTitle : "BUY NOW"
        },
    ]

    return (
        <>
            <Head>
                <title>Categories</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header current={1}></Header>
            
            <div className='bg-[#0D0F23]'>
                <div className='w-full 2xl:max-w-screen-2xl h-auto pt-[104px] m-auto'>
                    <div className='flex flex-col mx-8 sm:mx-16 lg:mx-[9vw] space-y-6 py-12'>
                        {/* custom breadcrubs */}
                        <Breadcrumbs home="Home" breadcrumbs={breadcrumbs}></Breadcrumbs>

                        <div className='border border-[#787984]'></div>

                        {/* categories */}
                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0'>
                            <div className='flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0'>
                                {btnCategories.map((item, index) => (
                                    <button key={"btn-category" + index.toString()} className={classNames(index === current ? 'bg-[#FF457D] text-white' : 'border border-[#2C3166] bg-[#002046] text-[#919CC1]', 'text-xs rounded-full px-4 py-1.5')} onClick={() => setCurrent(index)}>{item}</button>
                                ))}
                            </div>
                        </div>

                        {/* galleries */}
                        <ArtGallery2 galleries={galleries}></ArtGallery2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
