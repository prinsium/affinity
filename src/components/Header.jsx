import Image from "next/image"

export default function Header(){
    return(
        <>
        {/* main header */}
        <div className="flex flex-col md:flex-row gap-8 overflow-hidden p-8 rounded-2xl bg-[#ffffff] m-8 h-[85vh]">
        <div className="flex flex-col gap-8 justify-start"> 
        <h1>Professional Tools For Creative People</h1>
        <h4>Award-winning photo editing, graphic design and page layout software for Mac, Windows & iPad.</h4>
        <div className="flex flex-row gap-4 justify-start items-center">
            <button type="button" className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#0071e3]">Buy Now</button>
            <button type="button" className="bg-transparent border-1 border-[#0071e3] text-black px-5 py-2 rounded-full hover:bg-[#1682EE] hover:text-white">Explore Apps</button>
        </div>
        </div>

        <div className="bg-transparent w-max h-max translate-x-[15%] rounded-[36px]">
            <Image src="/assets/awards/ipad.png" width={2400} height={1800} />
        </div>
        </div>

        {/* marquee */}
        <div>

        </div>
        </>
    )
}