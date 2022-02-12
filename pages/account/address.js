import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Breadcrumbs from '../../components/breadcrumbs'
import ArtGallery3 from '../../components/explore/art-gallery3'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AccountAddressPage() {
    const [current, setCurrent] = useState(1)  

    const breadcrumbs = ["Account Address"]
    const btnCategories = ["All", "Sold", "Created"]
    const galleries = [
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "art1",
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "art2",
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
            artId : "art3",
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "art4",
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "art5",
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
            artId : "art6",
        },
    ]

    return (
        <>
            <Head>
                <title>Account Address</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header current={-1}></Header>

            <div className='bg-[#0D0F23]'>
                <div className='w-full 2xl:max-w-screen-2xl h-auto pt-[104px] m-auto'>
                    <div className='flex flex-col mx-8 sm:mx-16 lg:mx-[9vw] space-y-6 py-12'>
                        {/* custom breadcrubs */}
                        <Breadcrumbs home="Home" breadcrumbs={breadcrumbs}></Breadcrumbs>

                        <div className='border border-[#787984]'></div>

                        <div className='flex flex-col space-y-6'>
                            <div className='relative h-[200px] rounded-md bg-gradient-to-b from-[#3461FF] to-[#8454EB]'>
                                <div className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[128px] h-[128px] rounded-full border-2 border-white'></div>
                                <div className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[112px] h-[112px] rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB]'></div>
                            </div>

                            <div className='flex flex-row pt-16'>
                                <div className='flex-none w-16'>
                                </div>

                                <div className='flex-grow flex flex-col items-center space-y-6 text-white text-center'>
                                    <h1 className='text-xl font-semibold'>Account Address</h1>
                                    <div className='w-[80%] sm:w-[60%] md:w-[40%] text-sm'>This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.</div>

                                    <div className="flex flex-row space-x-4 text-[#FAD804] text-2xl mr-3">
                                        <FontAwesomeIcon icon={faClone} />
                                        <FontAwesomeIcon icon={faShareAlt} />
                                    </div>

                                    {/* categories */}
                                    <div className='flex flex-row space-x-2'>
                                        {btnCategories.map((item, index) => (
                                            <button key={"btn-category" + index.toString()} className={classNames(index === current ? 'bg-[#FF457D] text-white' : 'border border-[#2C3166] bg-[#002046] text-[#919CC1]', 'text-xs rounded-full px-6 py-1.5')} onClick={() => setCurrent(index)}>{item}</button>
                                        ))}
                                    </div>
                                </div>

                                <div className='flex-none flex flex-col items-center space-y-1'>
                                    <div className='w-16 h-12 rounded-xl bg-white text-lg text-center py-[10px]'>
                                        <p>01</p>
                                    </div>
                                    <div className='text-white text-xs'>NFT Count</div>
                                </div>
                            </div>

                            {/* galleries */}
                            <ArtGallery3 galleries={galleries}></ArtGallery3> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
