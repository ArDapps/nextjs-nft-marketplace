import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

export default function ArtGallery2(props) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {props.galleries.map((item, index) => (
                <div key={item.artId} className='w-full h-auto grid grid-cols-1 bg-[#161A42] rounded-2xl text-white'>
                    <div className='grid grid-cols-1 gap-2 p-4'>
                        <div className='bg-white rounded-xl'>
                            <img src={item.artUrl} alt={item.artId} className='w-full h-auto'></img>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="flex-grow text-base">{item.title}</h1>
                            <button className="rounded-full border-2 border-[#2E357B] w-[1.75rem] text-white">
                                <FontAwesomeIcon icon={faAngleRight} className="" />
                            </button>
                        </div>
                        <p className="text-[#A2A6D0] text-sm">{item.description}</p>
                        <div className='flex flex-row py-4'>
                            <div className="rounded-full w-[1.5rem] text-center bg-[#325BC5]">
                                <FontAwesomeIcon icon={faEthereum} className="" />
                            </div>
                            <h1 className="flex-grow text-[#47DEF2] text-base ml-2">0.045ETH</h1>
                        </div>
                        <p className="text-sm">Account Address</p>
                        <p className="text-[#A2A6D0] text-xs">Onwer</p>
                    </div>                            
                    
                    <div className="border-t-2 border-[#2E357B] p-4">
                        <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base w-full px-4 py-2 shadow-md'>⚡ {item.buttonTitle}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}