import Head from 'next/head'
import Link from 'next/link'
import { Fragment, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Breadcrumbs from '../../components/breadcrumbs'
import ArtGallery4 from '../../components/explore/art-gallery4'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

export default function NftPurchasedPage() {
    let [priceOpen, setPriceOpen] = useState(false)
    let inputPriceRef = useRef(null)
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
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "art1",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "art2",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
            artId : "art3",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect3.svg",
            artId : "art4",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect1.svg",
            artId : "art5",
            buttonTitle : "Process to Resell"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/svg/art-rect2.svg",
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

            <div className='bg-[#0D0F23]'>
                <div className='w-full 2xl:max-w-screen-2xl h-auto pt-[104px] m-auto'>
                    <div className='flex flex-col mx-8 sm:mx-16 lg:mx-[9vw] space-y-6 py-12'>
                        {/* custom breadcrubs */}
                        <Breadcrumbs home="Home" breadcrumbs={breadcrumbs}></Breadcrumbs>

                        <div className='border border-[#787984]'></div>

                        <div className='flex flex-col space-y-6'>
                            <h1 className="flex-grow text-white text-2xl sm:text-4xl font-bold">Purchased Items</h1>

                            <div className='text-white'>
                                <FontAwesomeIcon icon={faClone} className="text-[#FAD804] text-xl mr-3" />
                                This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.
                            </div>
                            
                            <div className='flex flex-row items-center space-x-4 rounded-md bg-[#212760] p-4'>
                                <div className='flex-none grid place-items-center w-16 h-16 rounded-md bg-[#215BF0] m-auto'>
                                    <FontAwesomeIcon icon={faClone} className="text-[#FAD804] text-4xl font-bold" />
                                </div>
                                <div className='flex-grow flex-col'>
                                    <p className='text-white text-xl font-bold'>Good Job</p>
                                    <p className='text-[#53CEC7] text-sm font-bold'>You Purchased 4 NFTS</p>
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
            <Transition appear show={priceOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-100 overflow-y-auto"
                initialFocus={inputPriceRef}
                onClose={openPriceModal}
                >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the PriceModal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#24274D] shadow-xl">
                        <Dialog.Title
                        as="h3"
                        className="text-white text-2xl font-semibold leading-6 "
                        >
                        </Dialog.Title>

                        <div className='flex flex-col space-y-2'>
                            <div className='flex flex-row'>
                                <div className='flex-grow text-white text-2xl font-semibold'>⚡ Process to Resell</div>
                                <button className='flex-none text-[#8488B7] text-2xl' onClick={closePriceModal}>
                                    <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                                </button>
                            </div>

                            <div className='text-[#6C71AD] text-sm pb-4'>
                                <p>Please write the new price</p>
                            </div>

                            <div className='border border-[#AEB4B4]'></div>

                            <div className='relative text-[#B4BAEF] py-4'>
                                <input className='w-full text-sm p-3.5 pr-16 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2' type="number" min={0}  placeholder='New Price' ref={inputPriceRef} id="nft-price"></input>
                                <p className='absolute top-1/2 right-8 -translate-y-1/2 text-sm'>ETH</p>
                                <FontAwesomeIcon icon={faEthereum} className='absolute top-1/2 right-4 -translate-y-1/2 text-sm' />
                            </div>
                        </div>

                        <div className="mt-2">
                            <button
                                type="button"
                                className="px-10 py-2 text-sm font-medium bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white bg-blue-100 border border-transparent rounded-full hover:bg-blue-200"
                                onClick={openLoaderModal}
                            >Resell</button>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>

            {/* loader dialog  */}
            <Transition appear show={loaderOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-100 overflow-y-auto"
                onClose={openLoaderModal}
                >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the PriceModal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#24274D] shadow-xl">
                        <Dialog.Title
                        as="h3"
                        className="text-white text-2xl font-semibold leading-6 "
                        >
                        </Dialog.Title>

                        <div className='flex flex-col items-center space-y-4'>
                            <div>
                                <TailSpin className='bg-[#3861FE]'
                                    heigth={72}
                                    width={72}
                                    color="#3861FE"
                                    ariaLabel='loading'
                                />
                            </div>
                            <div className='text-white text-3xl font-semibold'>Loading</div>
                            <div className='text-[#6C71AD] text-sm'>Appreciate Your Waiting</div>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>

            {/* success dialog  */}
            <Transition appear show={successOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-100 overflow-y-auto"
                onClose={closeSuccessModal}
                >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the PriceModal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#24274D] shadow-xl">
                        <Dialog.Title
                        as="h3"
                        className="text-white text-2xl font-semibold leading-6 "
                        >
                        </Dialog.Title>

                        <div className='flex flex-col items-center space-y-4'>
                            <div className='text-[#32BA7C] text-7xl'>
                                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                            </div>
                            <div className='text-white text-3xl font-semibold'>Succeeded</div>
                            <div className='text-[#6C71AD] text-sm'>Operation completed successfully</div>
                            <div className='pt-4'>
                                <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base px-16 py-2 shadow-md' onClick={closeSuccessModal}>View</button>
                            </div>
                            
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}
