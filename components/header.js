import Link from 'next/link'
import { Fragment, useState, useRef } from 'react'
import { Disclosure, Menu, Transition, Switch } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
    const [current, setCurrent] = useState(props.current)
    const [toggled, setToggled] = useState(true)
    
    const headers = [
        { name: 'Explore', href: '/explore ' },
        { name: 'Categories', href: '/categories' },
        { name: 'Create NFT', href: '/create-nft' },
    ]

    return (
        <Disclosure as="nav" className="z-50 fixed w-full h-[104px] bg-[#002046]">
        {({ open }) => (
            <>
                <div className="mx-auto px-4 sm:px-8 lg:px-[6vw] h-full">
                    <div className="relative flex items-center justify-between h-full">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:ring-neutral-400 focus:ring-2 focus:ring-inset">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start h-full">
                            <div className="flex-none self-center">
                                <Link href="/">
                                    <a>
                                        <img src="/assets/png/logo.png" alt="Logo" className='h-16 w-auto'></img>
                                    </a>
                                </Link>
                            </div>
                            <div className="hidden lg:block lg:ml-4 flex-1 h-full">
                                <div className="flex lg:space-x-1 xl:space-x-4 h-full">
                                    {headers.map((item, index) => (
                                    <div key={item.name} className={classNames('flex items-center border-b-2',
                                        index === current ? 'border-[#168BF8] text-white' : 'border-[#002046] text-gray-200 ', 'hover:text-gray-400 font-bold')}>
                                        <Link href={item.href}>
                                            <a
                                                className='block px-3 py-2 rounded-md text-base'
                                                aria-current={index === current ? 'page' : undefined}
                                                onClick={() => setCurrent(index)}
                                            >{item.name}</a>
                                        </Link>
                                    </div>
                                    ))}

                                    <div className="flex-grow"></div>

                                    {/* dark or light mode */}
                                    <div className='relative grid place-items-center'>
                                        <Switch checked={toggled} onChange={setToggled} className={classNames(toggled ? 'bg-white' : 'bg-[#8B8DA1]', 'transition duration-150 ease-out relative inline-flex items-center h-6 rounded-full w-12')}>
                                            <div className='absolute left-0 w-1/2 text-[#FFE951]'>
                                                <FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon>
                                            </div>
                                            <span className={classNames(toggled ? 'bg-[#8B8DA1] translate-x-6' : 'bg-white translate-x-0', 'inline-block w-6 h-6 transform rounded-full transition duration-300')}
                                            />
                                        </Switch>
                                    </div>

                                    <div className='border-r-2 border-[#787984] my-9'>&nbsp;</div>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div className='h-full grid place-items-center'>
                                            <Menu.Button className="inline-flex justify-center w-full px-0 py-2 text-sm font-medium text-white bg-[#002046]">
                                                <div className='flex flex-row space-x-4'>
                                                    <div className='flex-none w-12 h-12 rounded-full bg-gradient-to-b from-[#FF2D92] to-[#FFA25F]'></div>

                                                    <div className='flex flex-col '>
                                                        <p className='flex-1 text-white text-sm font-bold'>Account Address</p>
                                                        <p className='text-[#7D82B2] text-xs text-left'>3,25 ETH</p>
                                                    </div>
                                                </div>
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                        >
                                        <Menu.Items className="absolute right-0 w-80 mt-4 p-8 origin-top-right bg-[#24274D] divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className='flex flex-col space-y-6'>
                                                <Link href="/account/address">
                                                    <a>
                                                    <Menu.Item>
                                                        <div className='flex flex-row space-x-3'>
                                                            <div className=''>
                                                                <img src="/assets/svg/brand-metamask.svg"></img>
                                                            </div>
                                                            <div className='flex-1 flex flex-col'>
                                                                <p className='flex-1 text-white text-sm font-bold'>Account Address</p>
                                                                <p className='text-[#7D82B2] text-xs text-left'>This is a sub-headline</p>
                                                            </div>
                                                            <div className='grid place-items-center w-[22px] h-[22px] bg-[#215BF0] text-[#FAD804] text-xs font-bold rounded-sm'>
                                                                <FontAwesomeIcon icon={faClone}></FontAwesomeIcon>
                                                            </div>
                                                        </div>
                                                    </Menu.Item>
                                                    </a>
                                                </Link>
                                                

                                                <div className='border border-[#787984]'></div>

                                                <Link href="/market/nft-purchased">
                                                    <a>
                                                        <Menu.Item>
                                                            <div className='flex flex-row items-center space-x-4'>
                                                                <div className='w-[24px] h-auto'>
                                                                    <img src="/assets/svg/nft-purchased.svg" className='w-full h-full'></img>
                                                                </div>
                                                                <div className='flex-1 text-white text-sm'>NFT Purchased
                                                                </div>
                                                            </div>
                                                        </Menu.Item>  
                                                    </a>
                                                </Link>
                                                

                                                <div className='border border-[#787984]'></div>

                                                <Link href="/market/nft-resell">
                                                    <a>
                                                        <Menu.Item>
                                                            <div className='flex flex-row items-center space-x-4'>
                                                                <div className='w-[24px] h-auto'>
                                                                    <img src="/assets/svg/nft-resell.svg" className='w-full h-full'></img>
                                                                </div>
                                                                <div className='flex-1 text-white text-sm'>NFT Resell
                                                                </div>
                                                            </div>
                                                        </Menu.Item> 
                                                    </a>
                                                </Link>
                                                
                                                <div className='border border-[#787984]'></div>

                                                <Link href="#">
                                                    <a>
                                                        <Menu.Item>
                                                            <div className='flex flex-row items-center space-x-4'>
                                                                <div className='w-[24px] h-auto'>
                                                                    <img src="/assets/svg/sign-out.svg" className='w-full h-full'></img>
                                                                </div>
                                                                <div className='flex-1 text-white text-sm'>Sign out
                                                                </div>
                                                            </div>
                                                        </Menu.Item>
                                                    </a>
                                                </Link>
                                                
                                            </div>
                                        </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu button*/}
                <Disclosure.Panel className="lg:hidden bg-[#24274D]">
                    <div className="flex flex-col just space-y-4 p-4">
                        {headers.map((item, index) => (
                            <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames('flex-1', 
                                index === current ? 'text-gray-600' : 'text-gray-400 hover:text-gray-900', 'font-semibold block px-3 py-2 rounded-md text-base'
                            )}
                            aria-current={index === current ? 'page' : undefined}
                            >
                            {item.name}
                            </Disclosure.Button>
                        ))}

                        {/* dark or light mode */}
                        <div className='flex-1 relative grid px-3 py-2'>
                            <Switch checked={toggled} onChange={setToggled} className={classNames(toggled ? 'bg-white' : 'bg-[#8B8DA1]', 'transition duration-150 ease-out relative inline-flex items-center h-6 rounded-full w-12')}>
                                <div className='absolute left-0 w-1/2 text-[#FFE951]'>
                                    <FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon>
                                </div>
                                <span className={classNames(toggled ? 'bg-[#8B8DA1] translate-x-6' : 'bg-white translate-x-0', 'inline-block w-6 h-6 transform rounded-full transition duration-300')}
                                />
                            </Switch>
                        </div>

                        <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <div className='flex flex-row space-x-4'>
                                        <div className='flex-none w-12 h-12 rounded-full bg-gradient-to-b from-[#FF2D92] to-[#FFA25F]'></div>

                                        <div className='flex flex-col '>
                                            <p className='flex-1 text-white text-sm font-bold'>Account Address</p>
                                            <p className='text-[#7D82B2] text-xs text-left'>3,25 ETH</p>
                                        </div>
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <div className='flex flex-col space-y-6'>
                                        <Link href="/account/address">
                                            <a>
                                                <div className='flex flex-row space-x-3'>
                                                    <div className=''>
                                                        <img src="/assets/svg/brand-metamask.svg"></img>
                                                    </div>
                                                    <div className='flex-1 flex flex-col'>
                                                        <p className='flex-1 text-white text-sm font-bold'>Account Address</p>
                                                        <p className='text-[#7D82B2] text-xs text-left'>This is a sub-headline</p>
                                                    </div>
                                                    <div className='grid place-items-center w-[22px] h-[22px] bg-[#215BF0] text-[#FAD804] text-xs font-bold rounded-sm'>
                                                        <FontAwesomeIcon icon={faClone}></FontAwesomeIcon>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                        <Link href="/market/nft-purchased">
                                            <a>
                                                <div className='flex flex-row items-center space-x-4'>
                                                    <div className='w-[24px] h-auto'>
                                                        <img src="/assets/svg/nft-purchased.svg" className='w-full h-full'></img>
                                                    </div>
                                                    <div className='flex-1 text-white text-sm'>NFT Purchased
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                        <Link href="/market/nft-resell">
                                            <a>
                                                <div className='flex flex-row items-center space-x-4'>
                                                    <div className='w-[24px] h-auto'>
                                                        <img src="/assets/svg/nft-resell.svg" className='w-full h-full'></img>
                                                    </div>
                                                    <div className='flex-1 text-white text-sm'>NFT Resell
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                        <Link href="#">
                                            <a>
                                                <div className='flex flex-row items-center space-x-4'>
                                                    <div className='w-[24px] h-auto'>
                                                        <img src="/assets/svg/sign-out.svg" className='w-full h-full'></img>
                                                    </div>
                                                    <div className='flex-1 text-white text-sm'>Sign out
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                    </div>
                </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}