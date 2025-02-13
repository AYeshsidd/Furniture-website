

import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { TbLayoutAlignLeft } from "react-icons/tb";
import Prefotter from "../component/Prefooter";
import { PiTextAlignLeft } from "react-icons/pi";
export default function Shop(){

    return(
 <>
        
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/blur.png')] h-[316px]">
                           <div className="relative top-[15%] left-[50%]  transform -translate-x-1/2 flex justify-center flex-col items-center">
                               <Image src={"/mainlogo.png"} width={77} height={77} alt="Logo" />
                               <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">Shop</h3>
                               <div className="flex gap-2">
                                   <span className="font-medium text-base">Home | </span>
                                   <span className="font-light text-base">shop</span>
                               </div>
                       
                           </div>
                       
                       </div>
                  
            <div className=" bg-[#F9F1E7] p-4 w-full h-16  flex ">
   
            <p className="font-medium md:mx-16 mx-auto flex items-center md:space-x-9">
  
  <span className="mx-2">
  
    <PiTextAlignLeft/>
 
  </span>
 
 <span className="text-xl ">Filter</span> 

 <span className="mx-3"><TbGridDots/>  </span>
  
  <span className="mx-3"><TbLayoutAlignLeft/></span>

  <p className="md:mx-5 mx-3">|</p>

  <p className="text-xs md:text-base">Showing 1 - 16 of 32 results </p>

</p>
</p>


<div className="space-x-5 mx-56">

<span className="text-xl">Show</span>

<span className="bg-white px-3 text-[#9F9F9F]">1</span>

<span>Short by</span>

<span className="bg-white px-3 text-[#9F9F9F]">Default</span>

</div>

 </div>


 <div className="flex items-center flex-wrap justify-center gap-6 px-4 sm:px-8 py-3 lg:px-16 md:space-x-2">


<div className="flex flex-col rounded-2xl bg-[#F4F5F7] space-y-2 py-4 px-4 max-w-[285px] w-full relative">
  <Image src={"/decoration.png"} width={285} height={301} alt="LOGO" className="bg-white" />
  
  <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
    - 30%
  </span>
  <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
  <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
  <p className="text-base font-bold">RS:2.500.00</p>
</div>


<div className="flex flex-col bg-[#F4F5F7] py-4 px-4 space-y-2 max-w-[285px] w-full rounded-2xl relative">
  <Image src={"/nothover.png"} width={265} height={301} alt="LOGO" className="bg-white" />
  
  
  <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
  <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
  <p className="text-base font-bold">RS:2.500.00</p>
</div>


<div className="flex flex-col py-4 px-4 max-w-[285px] w-full bg-[#F4F5F7] rounded-2xl space-y-2 relative">
  <Image src={"/sofa.png"} width={285} height={301} alt="LOGO" className="bg-white" />
  
  <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
    - 50%
  </span>
  <p className="text-[#3A3A3A] text-2xl font-bold">Lolito</p>
  <p className="text-[#898989] text-base font-normal">Luxtury big sofa</p>
  <p className="text-base font-bold">RS:7.500.00</p>
</div>


<div className="w-full flex flex-col bg-[#F4F5F7] space-y-2 max-w-[285px] rounded-2xl px-4 py-4 relative">
  <Image src={"/dining.png"} width={285} height={301} alt="LOGO" className="bg-white" />
  
  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
    New
  </span>
  <p className="text-[#3A3A3A] text-2xl font-bold">Respira</p>
  <p className="text-[#898989] text-base font-normal">Outdoor bar table and stool</p>
  <p className="text-base font-bold">RS:500.00</p>
</div>

</div>


{/* 2nd row */}

<div className="flex items-center flex-wrap justify-center gap-6 px-4 sm:px-8 py-3 lg:px-16 md:space-x-2">


  <div className="flex flex-col rounded-2xl bg-[#F4F5F7] space-y-2 py-4 px-4 max-w-[285px] w-full relative">
    <Image src={"/decoration.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
      - 30%
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
    <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
    <p className="text-base font-bold">RS:2.500.00</p>
  </div>

  
  <div className="flex flex-col bg-[#F4F5F7] py-4 px-4 space-y-2 max-w-[285px] w-full rounded-2xl relative">
    <Image src={"/nothover.png"} width={265} height={301} alt="LOGO" className="bg-white" />
    
    <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
    <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
    <p className="text-base font-bold">RS:2.500.00</p>
  </div>

  
  <div className="flex flex-col py-4 px-4 max-w-[285px] w-full bg-[#F4F5F7] rounded-2xl space-y-2 relative">
    <Image src={"/sofa.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    
    <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
      - 50%
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Lolito</p>
    <p className="text-[#898989] text-base font-normal">Luxtury big sofa</p>
    <p className="text-base font-bold">RS:7.500.00</p>
  </div>

  
  <div className="w-full flex flex-col bg-[#F4F5F7] space-y-2 max-w-[285px] rounded-2xl px-4 py-4 relative">
    <Image src={"/dining.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    
    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      New
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Respira</p>
    <p className="text-[#898989] text-base font-normal">Outdoor bar table and stool</p>
    <p className="text-base font-bold">RS:500.00</p>
  </div>

</div>


{/* 3rd row */}


<div className="flex items-center flex-wrap justify-center gap-6 px-4 sm:px-8 py-3 lg:px-16 md:space-x-2">

  
  <div className="flex flex-col rounded-2xl bg-[#F4F5F7] space-y-2 py-4 px-4 max-w-[285px] w-full relative">
    <Image src={"/decoration.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    
    <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
      - 30%
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
    <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
    <p className="text-base font-bold">RS:2.500.00</p>
  </div>

  
  <div className="flex flex-col bg-[#F4F5F7] py-4 px-4 space-y-2 max-w-[285px] w-full rounded-2xl relative">
    <Image src={"/nothover.png"} width={265} height={301} alt="LOGO" className="bg-white" />
    
    
    <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
    <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
    <p className="text-base font-bold">RS:2.500.00</p>
  </div>

  
  <div className="flex flex-col py-4 px-4 max-w-[285px] w-full bg-[#F4F5F7] rounded-2xl space-y-2 relative">
    <Image src={"/sofa.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    
    <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
      - 50%
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Lolito</p>
    <p className="text-[#898989] text-base font-normal">Luxtury big sofa</p>
    <p className="text-base font-bold">RS:7.500.00</p>
  </div>

  
  <div className="w-full flex flex-col bg-[#F4F5F7] space-y-2 max-w-[285px] rounded-2xl px-4 py-4 relative">
    <Image src={"/dining.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    
    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      New
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Respira</p>
    <p className="text-[#898989] text-base font-normal">Outdoor bar table and stool</p>
    <p className="text-base font-bold">RS:500.00</p>
  </div>

</div>

{/* fourth row */}


<div className="flex items-center flex-wrap justify-center gap-6 px-4 sm:px-8 py-3 lg:px-16 md:space-x-2">

  
  <div className="flex flex-col rounded-2xl bg-[#F4F5F7] space-y-2 py-4 px-4 max-w-[285px] w-full relative">
    <Image src={"/decoration.png"} width={285} height={301} alt="LOGO" className="bg-white" />

    <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
      - 30%
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
    <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
    <p className="text-base font-bold">RS:2.500.00</p>
  </div>

   
  <div className="flex flex-col bg-[#F4F5F7] py-4 px-4 space-y-2 max-w-[285px] w-full rounded-2xl relative">
    <Image src={"/nothover.png"} width={265} height={301} alt="LOGO" className="bg-white" />
    
    <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
    <p className="text-[#898989] text-base font-normal">Stylish cafe chair</p>
    <p className="text-base font-bold">RS:2.500.00</p>
  </div>

  
  <div className="flex flex-col py-4 px-4 max-w-[285px] w-full bg-[#F4F5F7] rounded-2xl space-y-2 relative">
    <Image src={"/sofa.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full">
      - 50%
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Lolito</p>
    <p className="text-[#898989] text-base font-normal">Luxtury big sofa</p>
    <p className="text-base font-bold">RS:7.500.00</p>
  </div>

  
  <div className="w-full flex flex-col bg-[#F4F5F7] space-y-2 max-w-[285px] rounded-2xl px-4 py-4 relative">
    <Image src={"/dining.png"} width={285} height={301} alt="LOGO" className="bg-white" />
    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      New
    </span>
    <p className="text-[#3A3A3A] text-2xl font-bold">Respira</p>
    <p className="text-[#898989] text-base font-normal">Outdoor bar table and stool</p>
    <p className="text-base font-bold">RS:500.00</p>
  </div>

</div>


<div className="flex justify-center items-center space-x-3 my-12">
    <button className="px-5 py-3 bg-[#B88E2F] text-white">1</button>
    <button className="px-5 py-3 bg-[#F9F1E7]">2</button>
    <button className="px-5 py-3 bg-[#F9F1E7]">3</button>
    <button className="px-7 py-3 bg-[#F9F1E7]">Next</button>

</div>

<Prefotter/>


 </>
    );
}
