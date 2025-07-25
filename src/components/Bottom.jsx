export default function Bottom(){
    return(
        <div className="mt-8">
            <h2 className="text-center">Start creating, stop subscribing</h2>
            <div className="w-full flex justify-center items-center my-8">
                <button type="button" className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#0071e3]">Get Affinity</button>
            </div>
            <h2 className="text-center">Join the community</h2>
            <div className="w-full flex flex-row gap-4 justify-center items-center my-8">
                <button type="button" className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#0071e3]">Explore Marketplace</button>
                <button type="button" className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#0071e3]">Learn Affinity</button>
            </div>
        </div>
    )
}