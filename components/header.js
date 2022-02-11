import Link from 'next/link'

import { useState } from 'react'
import { Disclosure, Menu, Transition, Switch } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

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
        { name: 'Explore-Art', href: '/explore/art-details' },
        { name: 'Purchased Items', href: '/market/purchased' },
        { name: 'Account Address', href: '/account/address' },
    ]

    return (
        <Disclosure as="nav" className="z-50 fixed w-full h-[104px] bg-[#002046]">
        {({ open }) => (
            <>
                <div className="mx-auto px-4 sm:px-8 lg:px-[6vw] h-full">
                    <div className="relative flex items-center justify-between h-full">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 focus:ring-neutral-400 focus:ring-2 focus:ring-inset">
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
                                    <Switch checked={toggled} onChange={setToggled} className={classNames(toggled ? 'bg-white' : 'bg-[#8B8DA1]', 'transition duration-150 ease-out relative inline-flex items-center h-6 rounded-full w-12')}>
                                        <span className="sr-only">Enable notifications</span>
                                        <span className={classNames(toggled ? 'bg-[#8B8DA1] translate-x-6' : 'bg-white translate-x-0', 'inline-block w-6 h-6 transform rounded-full')}
                                        />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu button*/}
                <Disclosure.Panel className="lg:hidden border-t-2 border-gray-100 bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {headers.map((item, index) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            index === current ? 'text-gray-600' : 'text-gray-400 hover:text-gray-900', 'font-semibold block px-3 py-2 rounded-md text-base'
                        )}
                        aria-current={index === current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    {/* <Link href="/login">
                        <a className="block rounded-full text-base font-medium text-white bg-blue-self px-6 py-2 shadow-md fold-bold hover:shadow-xl">Login</a>
                    </Link> */}
                    </div>
                </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}