import Image from "next/image"
export default function Header(){
    return(
        <div className="flex flex-row gap-10 overflow-hidden">
        <div className="flex flex-col gap-10 justify-start"> 
        <h1>Professional Tools For Creative People</h1>
        <h4>Award-winning photo editing, graphic design and page layout software for Mac, Windows & iPad.</h4>
        <div className="flex flex-row gap-4 justify-start items-center">
            <button type="button" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">Buy Now</button>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Buy Now</button>
        </div>
        </div>

        <div className="translate-x-[15%]">
            <Image src="/assets/awards/ipad.png" width={2400} height={1800} />
        </div>
        </div>
    )
}