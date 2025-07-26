// import Image from "next/image"

// export default function Header(){
//     return(
//         <>
//         {/* main header */}
//         <div className="flex flex-col md:flex-row gap-8 overflow-hidden p-8 rounded-2xl bg-[#ffffff] m-8 h-[85vh]">
//         <div className="flex flex-col gap-8 justify-start"> 
//         <h1>Professional Tools For Creative People</h1>
//         <h4>Award-winning photo editing, graphic design and page layout software for Mac, Windows & iPad.</h4>
//         <div className="flex flex-row gap-4 justify-start items-center">
//             <button type="button" className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#747fe2]">Buy Now</button>
//             <button type="button" className="bg-transparent border-1 border-[#0071e3] text-black px-5 py-2 rounded-full hover:bg-[#1682EE] hover:text-white">Explore Apps</button>
//         </div>
//         </div>

//         <div className="bg-transparent w-max h-max translate-x-[15%] rounded-[36px]">
//             <Image src="/assets/awards/ipad.png" width={2400} height={1800} />
//         </div>
//         </div>

//         {/* marquee */}
//         <div>

//         </div>
//         </>
//     )
// }

"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-16 md:m-0">
      {/* main header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-8 overflow-hidden m-3 p-3 md:m-8 md:p-8 rounded-2xl bg-[#ffffff] h-fit md:h-[85vh]"
      >
        {/* Text content with staggered animation */}
        <motion.div
          className="flex flex-col gap-4 md:gap-8 justify-start"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Professional Tools For Creative People
          </motion.h1>

          <motion.h4
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Award-winning photo editing, graphic design and page layout software for Mac, Windows & iPad.
          </motion.h4>

          <motion.div
            className="flex flex-row gap-4 justify-start items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <button
              type="button"
              className="bg-[#0071e3] text-white px-5 py-2 rounded-full hover:bg-[#747fe2]"
            >
              Buy Now
            </button>
            <button
              type="button"
              className="bg-transparent border-1 border-[#0071e3] text-black px-5 py-2 rounded-full hover:bg-[#1682EE] hover:text-white"
            >
              Explore Apps
            </button>
          </motion.div>
        </motion.div>

        {/* Image with slide-in animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-transparent w-full h-full translate-x-0 md:w-max md:h-max md:translate-x-[15%] rounded-[36px]"
        >
          <Image
            src="/assets/awards/ipad.png"
            width={2400}
            height={1800}
            alt="iPad with creative tools"
          />
        </motion.div>
      </motion.div>

      {/* marquee */}
      <div>{/* Add your content here later */}</div>
    </div>
  );
}
