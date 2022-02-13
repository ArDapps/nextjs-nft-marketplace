import Link from 'next/link'
import { Fragment, useState, useContext, useRef } from 'react'
import { Disclosure, Menu, Transition, Switch } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import { faMoon, faShoppingBag, faDollar, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../pages/_app'

// themeMode : true : dark, false : light
export default function Header(props) {
    const [currentPage, setCurrentPage] = useState(props.current)
    const {themeMode, toggleThemeMode} = useContext(ThemeContext)
    
    const headers = [
        { name: 'Explore', href: '/explore ' },
        { name: 'Categories', href: '/categories' },
        { name: 'Create NFT', href: '/create-nft' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Disclosure as="nav" className="z-50 fixed w-full h-[104px] transition-all bg-[#002046] dark:bg-white dark:border-b dark:border-gray-200">
        {({ open }) => (
            <div className='w-full 2xl:max-w-screen-2xl h-full mx-auto'>
                <div className="mx-auto px-4 sm:px-8 lg:px-[6vw] h-full">
                    <div className="relative flex items-center justify-between h-full">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white dark:text-gray-800 focus:ring-neutral-400 focus:ring-2 focus:ring-inset">
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
                                        <img src={"/assets/img/logo-" + (themeMode ? "dark" : "light") + ".png"} alt="Logo" className='h-16 w-auto'></img>
                                    </a>
                                </Link>
                            </div>
                            <div className="hidden lg:block lg:ml-4 flex-1 h-full">
                                <div className="flex lg:space-x-1 xl:space-x-4 h-full">
                                    {headers.map((item, index) => (
                                    <div key={item.name} className={classNames('flex items-center ', index === currentPage ? 'border-[#168BF8] border-b-2 text-white dark:text-gray-800' : 'text-gray-200 dark:text-gray-600', 'hover:text-gray-400 dark:hover:text-gray-400 font-bold')}>
                                        <Link href={item.href}>
                                            <a
                                                className='block px-3 py-2 rounded-md text-base'
                                                aria-current={index === currentPage ? 'page' : undefined}
                                                onClick={() => setCurrentPage(index)}
                                            >{item.name}</a>
                                        </Link>
                                    </div>
                                    ))}

                                    <div className="flex-grow"></div>

                                    {/* dark or light mode */}
                                    <div className='relative grid place-items-center'>
                                        <Switch checked={themeMode} onChange={toggleThemeMode} className={classNames(themeMode ? 'bg-white' : 'bg-[#8B8DA1]', 'transition duration-150 ease-out relative inline-flex items-center h-6 rounded-full w-12')}>
                                            <div className='absolute left-0 w-1/2 text-[#FFE951]'>
                                                <FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon>
                                            </div>
                                            <span className={classNames(themeMode ? 'bg-[#8B8DA1] translate-x-6' : 'bg-white translate-x-0', 'inline-block w-6 h-6 transform rounded-full transition duration-300')}
                                            />
                                        </Switch>
                                    </div>

                                    <div className='border-r-2 border-[#787984] my-9'>&nbsp;</div>

                                    {/* account address */}
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div className='h-full grid place-items-center'>
                                            <Menu.Button className="inline-flex justify-center w-full px-0 py-2 text-sm font-medium">
                                                <div className='flex flex-row space-x-4'>
                                                    <div className='flex-none w-12 h-12 rounded-full bg-gradient-to-b from-[#FF2D92] to-[#FFA25F]'></div>

                                                    <div className='flex flex-col '>
                                                        <p className='flex-1 text-white dark:text-gray-800 text-sm font-bold'>Account Address</p>
                                                        <p className='text-[#7D82B2] dark:text-gray-800 text-xs text-left'>3,25 ETH</p>
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
                                        <Menu.Items className="absolute right-0 w-80 mt-4 p-8 origin-top-right bg-[#24274D] dark:bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className='flex flex-col space-y-6'>
                                                <Link href="/account/address">
                                                    <a>
                                                    <Menu.Item>
                                                        <div className='flex flex-row space-x-3'>
                                                            <div className=''>
                                                                <img src="/assets/svg/brand-metamask.svg"></img>
                                                            </div>
                                                            <div className='flex-1 flex flex-col'>
                                                                <p className='flex-1 text-white dark:text-gray-800 text-sm font-bold'>Account Address</p>
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
                                                            <div className='flex flex-row items-center space-x-4 text-white dark:text-gray-800'>
                                                                <div className='text-center text-2xl w-6'>
                                                                    <FontAwesomeIcon icon={faShoppingBag} ></FontAwesomeIcon>
                                                                </div>
                                                                <div className='flex-1  text-sm'>NFT Purchased
                                                                </div>
                                                            </div>
                                                        </Menu.Item>  
                                                    </a>
                                                </Link>
                                                

                                                <div className='border border-[#787984]'></div>

                                                <Link href="/market/nft-resell">
                                                    <a>
                                                        <Menu.Item>
                                                            <div className='flex flex-row items-center space-x-4 text-white dark:text-gray-800'>
                                                                <div className='text-center text-2xl w-6'>
                                                                    <FontAwesomeIcon icon={faDollar} ></FontAwesomeIcon>
                                                                </div>
                                                                <div className='flex-1 text-sm'>NFT Resell
                                                                </div>
                                                            </div>
                                                        </Menu.Item> 
                                                    </a>
                                                </Link>
                                                
                                                <div className='border border-[#787984]'></div>

                                                <Link href="#">
                                                    <a>
                                                        <Menu.Item>
                                                            <div className='flex flex-row items-center space-x-4 text-white dark:text-gray-800'>
                                                                <div className='text-center text-2xl w-6'>
                                                                    <FontAwesomeIcon icon={faSignOut} ></FontAwesomeIcon>
                                                                </div>
                                                                <div className='flex-1 text-sm'>Sign out
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
                <Disclosure.Panel className="lg:hidden bg-[#24274D] dark:bg-white">
                    <div className="flex flex-col just space-y-4 p-4">
                        {headers.map((item, index) => (
                            <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames('flex-1', 
                                index === currentPage ? 'text-gray-200 dark:text-gray-800' : 'text-gray-400 dark:text-gray-600', 'hover:text-gray-400 dark:hover:text-gray-400 font-semibold block px-3 py-2 rounded-md text-base'
                            )}
                            aria-current={index === currentPage ? 'page' : undefined}
                            >
                            {item.name}
                            </Disclosure.Button>
                        ))}

                        {/* dark or light mode */}
                        <div className='flex-1 relative grid px-3 py-2'>
                            <Switch checked={themeMode} onChange={toggleThemeMode} className={classNames(themeMode ? 'bg-white' : 'bg-[#8B8DA1]', 'transition duration-150 ease-out relative inline-flex items-center h-6 rounded-full w-12')}>
                                <div className='absolute left-0 w-1/2 text-[#FFE951]'>
                                    <FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon>
                                </div>
                                <span className={classNames(themeMode ? 'bg-[#8B8DA1] translate-x-6' : 'bg-white translate-x-0', 'inline-block w-6 h-6 transform rounded-full transition duration-300')}
                                />
                            </Switch>
                        </div>

                        {/* account address */}
                        <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <div className='flex flex-row space-x-4'>
                                        <div className='flex-none w-12 h-12 rounded-full bg-gradient-to-b from-[#FF2D92] to-[#FFA25F]'></div>

                                        <div className='flex flex-col '>
                                            <p className='flex-1 text-white dark:text-gray-800 text-sm font-bold'>Account Address</p>
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
                                                        <p className='flex-1 text-white dark:text-gray-800 text-sm font-bold'>Account Address</p>
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
                                                <div className='flex flex-row items-center space-x-4 text-white dark:text-gray-800'>
                                                    <div className='text-center text-2xl w-6'>
                                                        <FontAwesomeIcon icon={faShoppingBag} ></FontAwesomeIcon>
                                                    </div>
                                                    <div className='flex-1 text-sm'>NFT Purchased
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                        <Link href="/market/nft-resell">
                                            <a>
                                                <div className='flex flex-row items-center space-x-4 text-white dark:text-gray-800'>
                                                    <div className='text-center text-2xl w-6'>
                                                        <FontAwesomeIcon icon={faDollar} ></FontAwesomeIcon>
                                                    </div>
                                                    <div className='flex-1 text-sm'>NFT Resell
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                        <Link href="#">
                                            <a>
                                                <div className='flex flex-row items-center space-x-4 text-white dark:text-gray-800'>
                                                    <div className='text-center text-2xl w-6'>
                                                        <FontAwesomeIcon icon={faSignOut} ></FontAwesomeIcon>
                                                    </div>
                                                    <div className='flex-1 text-sm'>Sign out
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
            </div>
        )}
        </Disclosure>
    )
}