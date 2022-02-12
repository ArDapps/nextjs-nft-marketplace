import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import Header from './../components/header'
import Footer from './../components/footer'
import Breadcrumbs from '../components/breadcrumbs'

export default function CreateNftPage() {
    const breadcrumbs = ["Create NFT"]
    
    return (
        <>
            <Head>
                <title>Categories</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header current={2}></Header>

            <div className='bg-[#0D0F23]'>
                <div className='w-full 2xl:max-w-screen-2xl h-auto pt-[104px] m-auto'>
                    <div className='flex flex-col mx-8 sm:mx-12 lg:mx-[9vw] space-y-6 py-12'>
                        {/* custom breadcrubs */}
                        <Breadcrumbs home="Create NFT" breadcrumbs={breadcrumbs}></Breadcrumbs>

                        <div className='border border-[#787984]'></div>

                        <h1 className='text-white text-4xl md:text-6xl font-bold'>Create Your NFT</h1>
                        <p className='text-white text-xl'>This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.</p>

                        <div className='flex flex-col lg:flex-row items-center'>
                            {/* left input element */}
                            <div className='w-full lg:w-[40%] flex-none flex flex-col space-y-4 text-white'>
                                {/* file chooser */}
                                <div className='bg-[#212760] h-[160px] rounded-md border-dashed border border-[#9FA4FF] text-[#B4BAEF]'>
                                    <label className='h-full flex flex-col text-center p-2 cursor-pointer'>
                                        <div className='flex-1 text-6xl my-2'>
                                            <FontAwesomeIcon icon={faImage} className="" />
                                        </div>
                                        <span className="flex-1 text-xs leading-normal">Drag and Drop File</span>
                                        <span className="flex-1 text-xs leading-normal">Browse Media on Your Device</span>
                                        <span className="flex-1 text-[8px] leading-normal">JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</span>
                                        <input type='file' className="hidden" id="file-chooser" />
                                    </label>
                                </div>
                            
                                <input className='text-[#B4BAEF] text-sm p-3.5 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2' placeholder='NFT Title' id="nft-title"></input>

                                <select className='text-[#B4BAEF] text-sm px-3.5 py-3 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2 appearance-none custom-select' placeh      older='NFT Title' defaultValue={0} id="nft-category">
                                    <option value="0" disabled>Choose Category</option>
                                </select>

                                <div className='relative text-[#B4BAEF]'>
                                    <input className='w-full text-sm p-3.5 pr-16 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2' type="number" min={0}  placeholder='Price' id="nft-price"></input>
                                    <p className='absolute top-1/2 right-8 -translate-y-1/2 text-sm'>ETH</p>
                                    <FontAwesomeIcon icon={faEthereum} className='absolute top-1/2 right-4 -translate-y-1/2 text-sm' />
                                </div>
                                

                                <textarea className='text-[#B4BAEF] text-sm p-3.5 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2' rows="6" placeholder='Desription'></textarea>

                                <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base px-6 sm:px-10 py-2 shadow-md m-auto' id="btn-create-nft">Create</button>
                            </div>

                            {/* right art element */}
                            <div className='flex-1 w-full h-full mt-8 lg:mt-0 pl-8 lg:pl-24 lg:pr-0'>
                                <div className='relative w-full h-auto'>
                                    <img src="/assets/svg/bg-abstr-nft.svg"></img>
                                    
                                    <img src="/assets/svg/brand-ethereum.svg" className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5'></img>

                                    <div className='absolute left-0 top-1/2 -translate-y-1/2  w-[57.5%] h-full flex flex-col items-start p-3 sm:p-6 lg:p-4 xl:p-8'>
                                        <h1 className='flex-none text-white text-xl sm:text-2xl py-2'>Abstr Gradient NFT</h1>
                                        <div className='flex-none flex flex-row items-center  w-full'>
                                            <div className='flex-none'>
                                                <img src="/assets/svg/brand-abstr.svg" className='w-2/3'></img>
                                            </div>
                                            <p className='flex-grow text-white text-sm sm:text-xl'>4363733</p>
                                        </div>

                                        <div className='flex-grow'></div>

                                        <div className='w-full flex flex-row space-x-2 sm:space-x-4 text-white bg-[#47DEF2] bg-opacity-90 rounded-lg p-2 sm:p-3'>
                                            <div className='flex-1 flex flex-col space-y-1'>
                                                <p className='text-xs'>Current Bid</p>
                                                <div className="flex flex-row items-center">
                                                    <div className='mr-1'>
                                                        <FontAwesomeIcon icon={faEthereum} className="" />
                                                    </div>
                                                    <div className='flex flex-row text-xs sm:text-base lg:text-sm xl:text-base font-bold'>
                                                        <div>0.25</div>
                                                        <div className='ml-1 sm:ml-2'>ETH</div>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <div className='flex-1 flex flex-col space-y-1'>
                                                <p className='text-xs'>Ends in</p>
                                                <div className="flex-grow flex flex-row space-x-2 text-xs sm:text-base lg:text-sm xl:text-base">
                                                    <div className='flex-1 flex flex-row items-center'>
                                                        <div className='flex-none font-bold'>12</div>
                                                        <div className='flex-1'>h</div>
                                                    </div>
                                                    <div className='flex-1 flex flex-row items-center'>
                                                        <div className='flex-none font-bold'>43</div>
                                                        <div className='flex-1'>m</div>
                                                    </div>
                                                    <div className='flex-1 flex flex-row items-center'>
                                                        <div className='flex-none font-bold'>42</div>
                                                        <div className='flex-1'>s</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
