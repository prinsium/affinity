import Image from "next/image"

const crd = [
  {
    id: 1,
    img: "/proicon/designer.svg",
    title: "Affinity Designer",
    description: "Illustration & graphic design software at its best "
  },
  {
    id: 2,
    img: "/proicon/photo.svg",
    title: "Affinity Photo",
    description: "Advance photo editing with with professional grade tools"
  },
  {
    id: 3,
    img: "/proicon/publisher.svg",
    title: "Affinity Publisher",
    description: "Page layout & designer powerhouse"
  },
];

export default function Appsection(){
    return(
        <>
        <div className="relative m-8 flex flex-row rounded-2xl bg-[#ffffff] md:h-[75vh] overflow-hidden">

        <div className="relative z-20 justify-start flex flex-col gap-6 p-8 min-w-[60vw]">
        <h2>Affinity Creative Bundle</h2>
        <div className="flex flex-row gap-4">
            <Image src="/proicon/designer.svg" width={75} height={75} alt="designer" />
            <Image src="/proicon/photo.svg" width={75} height={75} alt="photo" />
            <Image src="/proicon/publisher.svg" width={75} height={75} alt="publisher" />
        </div>
        <h6>Get Version 2 of Affinity Designer, Affinity Photo and Affinity Publisher <br/> on all operating systems, including iPad, macBook & desktops for one low bundle price.</h6>
        <div className="flex flex-row gap-4 items-end">
            <Image src="/proicon/apple.svg" width={10} height={10} alt="apple" />
            <Image src="/proicon/windows.svg" width={10} height={10} alt="windows" />
            <p>Available on iPad, macBook & desktops</p>
        </div>
        <h5>All Apps, All Platforms, No Subscription</h5>
        <div className="flex flex-row gap-4 justify-start items-center">
            <button type="button" className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#747fe2]">Buy Now</button>
            <button type="button" className="bg-transparent border-1 border-[#0071e3] text-black px-5 py-2 rounded-full hover:bg-[#1682EE] hover:text-white">Learn More</button>
        </div>
        </div>

        <div className="hidden md:block absolute z-10 right-0 top-1/2 transform -translate-y-1/4 translate-x-1/4 w-[1000px] h-auto">
            <img src="https://cdn.prod.website-files.com/681cdb4ca097489d83fc53e3/681d60ce2b41adbeb381c222_22%204-p-1600.webp" className="w-full h-full object-cover" alt="cards" />
        </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-between m-8">
            {crd.map((item) => (
              <div key={item.id} className="rounded-2xl bg-[#ffffff] flex flex-col gap-6 items-center p-8">
                <Image src={item.img} alt={item.title} width={75} height={75} />
                <h2 className="text-center">{item.title}</h2>
                <h6 className="text-center">{item.description}</h6>
                    <div className="flex flex-row gap-4 items-baselign">
                    <Image src="/proicon/apple.svg" width={15} height={15} alt="apple" />
                    <Image src="/proicon/windows.svg" width={15} height={15} alt="windows" />
                    <p className="text-center">for iPad, macBook & desktops</p>
                    </div>
                    <div className="flex flex-row md:flex-col lg:flex-row gap-4 justify-start items-center">
                        <button type="button" className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#747fe2]">Buy Now</button>
                        <button type="button" className="bg-transparent border-1 border-[#0071e3] text-black px-5 py-2 rounded-full hover:bg-[#1682EE] hover:text-white">Learn More</button>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}