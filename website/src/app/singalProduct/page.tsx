
import { FaFacebook } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
export default function Singalproduct() {
    return(
    <>
    <div className="flex ">
<div className="flex-col mx-20 space-y-7 rounded-lg">
<img src="Outdoorsofa.png" width={83} height={55} alt="" className="bg-[#F9F1E7]" />
<img src="chairs3.png" width={76} height={80} alt="" className="bg-[#F9F1E7]" />
<img src="sofa 3.png" width={83} height={115} alt="" className="bg-[#F9F1E7]" />
<img src="Maya.png" width={83} height={55} alt="" className="bg-[#F9F1E7]" />
</div>

<div>
    <img src="wallsofa.png" width={481} height={500} alt="" className="bg-[#F9F1E7] rounded-lg" />
</div>

<div className="mx-12">
     <p className="w-[282px] h-[63px]  font-normal  text-4xl">Asgaard sofa</p>
     <p className="w-[173px] h-[36px] font-medium text-2xl text-[#9F9F9F]">RS.250,000.00</p>
     
     <div className="flex space-x-2 my-2 ">
     <IoStarSharp className="text-yellow-400"/>
     <IoStarSharp className="text-yellow-400"/>
     <IoStarSharp className="text-yellow-400"/>
     <IoStarSharp className="text-yellow-400" /> 
    
     <p className="text-[#9F9F9F] text-sm relative "> | 5 Customer Review</p> 
     
     </div> 
    
     <p className="font-normal text-sm">Setting ipsum dolor sit amet consectetur, adipisicing elit <br /> Quos provident sequi veritatis eligendi 
      est molestias the <br /> obcaecati deserunt similique, vel tempore amet nisi liono <br /> sound.</p>    
   
   <h2 className="text-[#9F9F9F] my-5">Size</h2>

   <div className="flex space-x-3 ">
    <button className="px-2 py-1 rounded bg-[#B88E2F]  text-white">L</button>
    <button className="px-2 py-1 rounded bg-[#F9F1E7]">xl</button>
    <button className="px-2 py-1 rounded bg-[#F9F1E7]">xs</button>
    
     </div>

     <h2 className="text-[#9F9F9F] my-6">Color</h2>

     <div className="flex space-x-3 ">
    <button className="px-4 py-4 rounded-full bg-[#816DFA]  text-white"></button>
    <button className="px-4 py-4 rounded-full bg-[#000000]"></button>
    <button className="px-4 py-4 rounded-full bg-[#B88E2F]"></button>
    
     </div>
<div className="my-10 space-x-3">
     <button type="submit" className="w-[123px] py-3 border border-[#9F9F9F] rounded text-black font-medium hover:bg-gray-100 transition">
          + 1  </button>
          <button type="submit" className="w-[215px] py-3 border border-black rounded-md text-black font-medium hover:shadow-xl hover:bg-[#B88E2F] transition">
          Add to cart </button>
          <button type="submit" className="w-[215px] py-3 border border-black rounded-md text-black font-medium hover:bg-gray-200 transition">
          + Compare </button>
          </div>

          <div className=" my-24 border border-[#D9D9D9]"></div>
          
          <div className="tracking-wide my-16 space-y-4 text-[#9F9F9F] font-normal text-base">
            <p>SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; SS001 </p>
            <p>Category &nbsp;:&nbsp;&nbsp; Sofas </p>
            <p>Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Sofa,Chair,Home,Shop </p>
            <p className="flex gap-2">Share &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                <FaFacebook className="text-black text-xl"/>
                <FaLinkedin className="text-black text-xl"/>  
                <AiFillTwitterCircle className="text-black text-xl"/> 
                </p> 
          </div>
        
    </div>


</div>

<div className="border-t border-[#D9D9D9] w-full my-12"></div>
    <div className="flex justify-center gap-10 my-20">
        <h1 className="font-medium text-2xl w-[137px] ">Description</h1>
        <h1 className="font-normal text-2xl text-[#9f9f9f] w-[269px] ">Additional information</h1>
        <h1 className="font-normal text-2xl text-[#9f9f9f] w-[138px] ">Reviews [5]</h1>
        </div>
        <p className="my-12 mx-56 text-[#9F9F9F] text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus molestiae 
            harum eius sint tempora culpa odio consequuntur nulla reprehenderit, est nobis magnam accusamus modi illum ipsa fugiat corrupti. <br /><br /> Voluptas earum explicabo aut officiis nobis eos illum minus reprehenderit, autem, incidunt dignissimos accusantium, 
             est atque corrupti fugit dolor provident? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur molestiae beatae 
             suscipit soluta nesciunt sint harum similique id repudiandae? Ducimus hic dolorem itaque impedit, eius recusandae ratione. 
             Cum, quod illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nostrum deserunt, fuga cum will be completed by them 
</p>
<div className="flex justify-center gap-5">

<img src="ws1.png" width={605} height={348} alt="" />
<img src="ws2.png" width={605} height={348} alt="" />

</div>

<div className="border-t border-[#D9D9D9] w-full my-12"></div>

<h1 className="my-16 text-center text-4xl font-sans w-[309]">Related Products</h1>

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

  <div className="flex items-center justify-center mt-6">
  <button className="text-[#B88E2F] font-bold border border-[#B88E2F] py-2 px-12 rounded-md hover:scale-110">
    Show More
  </button>
</div>

</div>




    </>
    );
}
