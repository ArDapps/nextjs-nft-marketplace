import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt, faAngleRight, faImage } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import Header from './../components/header'
import Footer from './../components/footer'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CreateNftPage() {
    const path = useRouter().pathname.slice(1).replace("-", " ")
    
    return (
        <>
            <Head>
                <title>Categories</title>
                <link rel="icon" href="favicon.png" />
            </Head>

            <Header current={2}></Header>
            <div className='bg-[#0D0F23] w-full h-auto pt-[104px]'>
                <div className='flex flex-col mx-8 sm:mx-12 lg:mx-[9vw] space-y-8 py-4'>
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

                    <h1 className='text-white text-6xl font-bold'>Create Your NFT</h1>
                    <p className='text-white text-xl'>This is a descriptive sub-headline that introduces the whole content of this text to the audience who is interested in reading about this topic.</p>

                    <div className='flex flex-col lg:flex-row items-center'>
                        {/* left input element */}
                        <div className='w-full lg:w-[30%] flex-none flex flex-col space-y-4 text-white'>
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

                            <select className='text-[#B4BAEF] text-sm px-3.5 py-3 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2 appearance-none custom-select' placeholder='NFT Title' defaultValue={0} id="nft-category">
                                <option value="0" disabled>Choose Category</option>
                            </select>

                            <input className='text-[#B4BAEF] text-sm p-3.5 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2' type="number" min={0}  placeholder='Price' id="nft-price"></input>

                            <textarea className='text-[#B4BAEF] text-sm p-3.5 rounded-md border border-[#9FA4FF] bg-[#212760] focus:outline-none focus:ring-2' rows="6" placeholder='Desription'></textarea>

                            
                        </div>

                        {/* right art element */}
                        <div className='flex-1 w-full h-full mt-8 lg:mt-0 pl-8 lg:pl-24 lg:pr-0'>
                            <div className='relative w-full h-auto'>
                                <img src="/assets/svg/bg-abstr-nft.svg"></img>
                                
                                <img src="/assets/svg/brand-ethereum.svg" className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5'></img>

                                <div className='absolute left-0 top-1/2 -translate-y-1/2  w-[57.5%] h-full flex flex-col items-start p-3 sm:p-6'>
                                    <h1 className='flex-none text-white text-xl sm:text-2xl py-2'>Abstr Gradient NFT</h1>
                                    <div className='flex-none flex flex-row items-center  w-full'>
                                        <div className='flex-none'>
                                            <img src="/assets/svg/brand-abstr.svg" className='w-2/3'></img>
                                        </div>
                                        <p className='flex-grow text-white text-sm sm:text-xl'>4363733</p>
                                    </div>

                                    <div className='flex-grow'></div>

                                    <div className='w-full flex flex-row space-x-2 sm:space-x-4 text-white bg-[#47DEF2] bg-opacity-90 rounded-lg p-2 sm:p-4'>
                                        <div className='flex-1 flex flex-col space-y-1'>
                                            <p className='text-xs'>Current Bid</p>
                                            <div className="flex flex-row items-center">
                                                <div className='mr-1'>
                                                    <FontAwesomeIcon icon={faEthereum} className="" />
                                                </div>
                                                <p className='text-xs sm:text-base'>0.25 ETH</p>
                                            </div>
                                        </div>

                                        <div className='flex-1 flex flex-col space-y-1'>
                                            <p className='text-xs'>Ends in</p>
                                            <div className="flex-grow flex flex-row space-x-2 text-xs sm:text-base">
                                                <div className='flex-1 flex flex-row items-center'>
                                                    <div className='flex-1 font-bold'>12</div>
                                                    <div className='flex-1'>h</div>
                                                </div>
                                                <div className='flex-1 flex flex-row items-center'>
                                                    <div className='flex-1 font-bold'>43</div>
                                                    <div className='flex-1'>m</div>
                                                </div>
                                                <div className='flex-1 flex flex-row items-center'>
                                                    <div className='flex-1 font-bold'>42</div>
                                                    <div className='flex-1'>s</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
