import Link from 'next/link'

export default function Paragraph3() {
    const sellNftDetails = [
        {
            iconUrl : "/assets/svg/sell-nft-icon1.svg",
            title : "Add Your NFTs",
            description : "Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content",
        },
        {
            iconUrl : "/assets/svg/sell-nft-icon2.svg",
            title : "Resell Items You Buy",
            description : "You can resell any NFT items that is buy from other user with new price and share it with friends",
        },
        {
            iconUrl : "/assets/svg/sell-nft-icon3.svg",
            title : "Set Up Your Wallet",
            description : "Once you set up wallet of choice, connect it to opensky by clicking the wallet icon in the top right corner. Learn about the wallets we support",
        },
        {
            iconUrl : "/assets/svg/sell-nft-icon4.svg",
            title : "List Items For Sale",
            description : "Sell your items with price and also have ability to cancel anytime from sale and edit price can work at etherum and bnb and polygon net, any network with solidity",
        },
    ]

    return (
        <div className='w-full h-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8 sm:m-16 lg:m-[9vw]'>
                {sellNftDetails.map((item, index) => (
                    <div key={"sell-nft" + index.toString()} className='grid grid-cols-1 gap-4'>
                        <img src={item.iconUrl}></img>
                        <h1 className='text-white text-xl'>{item.title}</h1>
                        <p className='text-[#A2A6D0] text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}