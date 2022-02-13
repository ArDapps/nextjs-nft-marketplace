import Head from 'next/head'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Breadcrumbs from '../../components/breadcrumbs'
import ArtGallery4 from '../../components/explore/art-gallery4'
import InputDialog from '../../components/dialog/input'
import LoaderDialog from '../../components/dialog/loader'
import SuccessDialog from '../../components/dialog/success'

export default function NftPurchasedPage() {
    let [priceOpen, setPriceOpen] = useState(false)
    let [loaderOpen, setLoaderOpen] = useState(false)
    let [successOpen, setSuccessOpen] = useState(false)    

    function closePriceModal() {
        setPriceOpen(false)
    }
    
    function openPriceModal() {
        setPriceOpen(true)
    }

    function closeLoaderModal() {
        setLoaderOpen(false)
    }
    
    function openLoaderModal() {
        closePriceModal()
        setLoaderOpen(true)

        setTimeout(purchaseSuccesss, 1000)
    }

    function closeSuccessModal() {
        closePriceModal()
        closeLoaderModal()
        setSuccessOpen(false)
    }

    function openSuccessModal() {
        setSuccessOpen(true)
    }

    function purchaseSuccesss() {
        closeLoaderModal()
        openSuccessModal()
    }

    const breadcrumbs = ["Explore", "Beautiful Artwork", "Purchased Items"]
    const galleries = [
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art3.gif",
            artId : "art1",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art1.png",
            artId : "art2",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art2.jpeg",
            artId : "art3",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art3.gif",
            artId : "art4",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art4.jpeg",
            artId : "art5",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art1.png",
            artId : "art6",
            buttonTitle : "Process to Resell"
        },
    ]

    return (
        <>
            <Head>
                <title>Purchased Items</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header current={-1}></Header>

            <div className='bg-[#0D0F23] dark:bg-white'>
                <div className='w-full 2xl:max-w-screen-2xl h-auto pt-[104px] m-auto'>
                    <div className='flex flex-col mx-8 sm:mx-16 lg:mx-[9vw] space-y-6 py-12'>
                        {/* custom breadcrubs */}
                        <Breadcrumbs home="Home" breadcrumbs={breadcrumbs}></Breadcrumbs>

                        <div className='border border-[#787984]'></div>

                        <div className='flex flex-col space-y-6'>
                            <h1 className="flex-grow text-white dark:text-gray-800 text-2xl sm:text-4xl font-bold">Purchased Items</h1>

                            <div className='text-white dark:text-gray-800'>
                                <FontAwesomeIcon icon={faClone} className="text-[#FAD804] text-xl mr-3" />
                                This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.
                            </div>
                            
                            <div className='flex flex-row items-center space-x-4 rounded-md bg-[#212760] dark:bg-white border-2 border-[#212760] dark:border-2 dark:border-gray-200 p-4'>
                                <div className='flex-none grid place-items-center w-16 h-16 rounded-md bg-[#215BF0] m-auto'>
                                    <FontAwesomeIcon icon={faClone} className="text-[#FAD804] text-4xl font-bold" />
                                </div>
                                <div className='flex-grow flex-col'>
                                    <p className='text-white dark:text-gray-800 text-xl font-bold'>Good Job</p>
                                    <p className='text-[#53CEC7] dark:text-gray-600 text-sm font-bold'>You Purchased 4 NFTS</p>
                                </div>
                            </div>

                            {/* galleries */}
                            <ArtGallery4 galleries={galleries} openPriceModal={openPriceModal} closePriceModal={closePriceModal}></ArtGallery4> 
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>

            {/* price input dialog  */}
            <InputDialog show={priceOpen} openPriceModal={openPriceModal} closePriceModal={closePriceModal} purchasingNft={openLoaderModal}></InputDialog>

            {/* loader dialog  */}
            <LoaderDialog show={loaderOpen} openLoaderModal={openLoaderModal}></LoaderDialog>

            {/* success dialog  */}
            <SuccessDialog show={successOpen} closeSuccessModal={closeSuccessModal}></SuccessDialog>
        </>
    )
}
