import Head from 'next/head'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Breadcrumbs from '../../components/breadcrumbs'
import ArtGallery4 from '../../components/explore/art-gallery4'

export default function PurchasedPage() {
    let [open, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }
    
    function openModal() {
        setOpen(true)
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

            <Header current={4}></Header>
            <div className='bg-[#0D0F23] w-full h-full pt-[104px]'>
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
                        <ArtGallery4 galleries={galleries} openModal={openModal} closeModal={closeModal}></ArtGallery4> 
                    </div>
                </div>
            </div>
            <Footer></Footer>

            <Transition appear show={open} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-100 overflow-y-auto"
                onClose={closeModal}
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

                    {/* This element is to trick the browser into centering the modal contents. */}
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
                                <button className='flex-none text-[#8488B7] text-2xl' onClick={closeModal}>
                                    <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                                </button>
                            </div>

                            <div className='text-[#6C71AD] text-sm pb-4'>
                                <p>Please write the new price</p>
                            </div>

                            <div className='border border-[#AEB4B4]'></div>

                            <div className='relative text-[#B4BAEF] py-4'>
                                <input className='w-full text-sm p-3.5 pr-16 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2' type="number" min={0}  placeholder='New Price' id="nft-price"></input>
                                <p className='absolute top-1/2 right-8 -translate-y-1/2 text-sm'>ETH</p>
                                <FontAwesomeIcon icon={faEthereum} className='absolute top-1/2 right-4 -translate-y-1/2 text-sm' />
                            </div>
                        </div>

                        <div className="mt-2">
                            <button
                                type="button"
                                className="px-10 py-2 text-sm font-medium bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white bg-blue-100 border border-transparent rounded-full hover:bg-blue-200"
                                onClick={closeModal}
                            >Resell</button>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}
