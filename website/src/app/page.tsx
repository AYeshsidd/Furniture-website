import Header from "./component/Header";
import Myfooter from "./component/Myfooter";
import Browse from "./component/Browse";
import Wallpic from "./component/Wallpic";

import Image from "next/image";

export default function Home(){
  return(
    <>
    

<Wallpic/>
<Browse/>

<p className="text-center justify-center font-bold text-4xl py-7 ">Our Products</p>


<div className=" flex items-center flex-wrap justify-center gap-6 px-4 sm:px-8  py-3  lg:px-16 md:space-x-2 ">

  <div className="flex flex-col rounded-2xl bg-[#F4F5F7]  space-y-2 py-4 px-4 max-w-[285px] w-full">
<Image  src={"/decoration.png"} width={285} height={301} alt="LOGO" className="bg-white"/>


<p className=" text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
<p className=" text-[#898989] text-base font-normal">Stylish cafe chair</p>
<p className=" text-base font-bold">RS:2.500.00</p>

</div>
<div className="flex flex-col bg-[#F4F5F7] py-4 px-4 space-y-2 max-w-[285px] w-full rounded-2xl  ">
<Image  src={"/hover.png"}  width={265} height={301} alt="LOGO" className="bg-white"/>

</div>


<div className="flex flex-col  py-4 px-4  max-w-[285px] w-full bg-[#F4F5F7] rounded-2xl  space-y-2 ">
<Image  src={"/sofa.png"} width={285} height={301} alt="LOGO" className="bg-white"/>
<p className=" text-[#3A3A3A] text-2xl font-bold">Lolito</p>
<p className=" text-[#898989] text-base font-normal">Luxtury big sofa</p>
<p className=" text-base font-bold">RS:7.500.00</p>

</div>


<div className="w-full flex flex-col bg-[#F4F5F7]  space-y-2 max-w-[285px] rounded-2xl px-4 py-4 ">
<Image  src={"/dining.png"}  width={285} height={301} alt="LOGO" className="bg-white"/>
<p className=" text-[#3A3A3A] text-2xl font-bold">Respira</p>
<p className=" text-[#898989] text-base font-normal">outdoor bar table and stool</p>
<p className=" text-base font-bold">RS:500.00</p>

</div>



</div>

{/* 2nd row */}

<div className=" flex justify-evenly items-center py-3 md:space-x-2 ">

  <div className="flex flex-col  py-4 px-4  max-w-[285px] w-full rounded-2xl bg-[#F4F5F7]  space-y-2">
<Image  src={"/lamp.png"} width={285} height={301} alt="LOGO" className="bg-white"/>
<p className=" text-[#3A3A3A] text-2xl font-bold">Grifo</p>
<p className=" text-[#898989] text-base font-normal">Night Lamp</p>
<p className=" text-base font-bold">RS:1500.00</p>

</div>
<div className="flex flex-col bg-[#F4F5F7] rounded-2xl  py-4 px-4 space-y-2 max-w-[285px] w-full ">
<Image  src={"/sofachair.png"}  width={285} height={301} alt="LOGO" className="bg-white"/>
<p className=" text-[#3A3A3A] text-2xl font-bold">Muggo</p>
<p className=" text-[#898989] text-base font-normal">Small Mug</p>
<p className=" text-base font-bold">RS:7.500.00</p>


</div>


<div className="flex flex-col bg-[#F4F5F7] rounded-2xl  py-4 px-4 space-y-2 max-w-[285px] w-full">
<Image  src={"/sofatable.png"} width={285} height={301} alt="LOGO" className="bg-white"/>
<p className=" text-[#3A3A3A] text-2xl font-bold">Pingky</p>
<p className=" text-[#898989] text-base font-normal">Cute bed sofa</p>
<p className=" text-base font-bold">RS:7.500.00</p>

</div>


<div className="flex flex-col bg-[#F4F5F7] rounded-2xl py-4 px-4 space-y-2 max-w-[285px] w-full">
<Image  src={"/brownsofa.png"}  width={285} height={301} alt="LOGO" className="bg-white"/>
<p className=" text-[#3A3A3A] text-2xl font-bold">Potty</p>
<p className=" text-[#898989] text-base font-normal">Mini flower pot</p>
<p className=" text-base font-bold">RS:500.00</p>

</div>
</div>
<br />

<div className="flex items-center justify-center mt-6">
  <button className="text-[#B88E2F] font-bold border border-[#B88E2F] py-2 px-6 rounded-md">
    Show More
  </button>
</div>
{/* Another section starts */}


<div className=" bg-[#FCF8F3] py-16 my-12">
        <div className="mx-24">

        <h1 className=" font-bold text-4xl ">50 + Beautiful rooms <br />inspiration</h1>
        <p className="py-4"> Our designer already made a lot of beautiful prototype <br /> of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] my-2 px-9 py-2 font-semibold text-white">Explore More</button>
        </div>

        
         <div className="flex relative left-[570px] -top-60">
        <Image src={"/fiveimages.png"} width={404} height={582} alt="5 pics" /> 

         
        <div className="slideImages">
        <Image src={"/furnitureset.png"} width={372} height={486} alt="furniture" />
        </div>
        </div> 
        <Image src={"/indicator.png"} width={72} height={1} alt={"selector"} className="relative left-[990px] -top-72"/>
       </div> 

       <p className="text-center text-[#616161] text-xl">Share your setup with</p>
       <p className="text-center text-[#3A3A3A] font-bold text-4xl">#FuniroFurniture</p>

       <div className="flex my-9">
       <Image src={"/chairs.png"} width={252} height={300} alt="furniture" />
       <Image src={"/chair1.png"} width={192} height={286} alt="furniture" />
       <Image src={"/spoon.png"} width={212} height={216} alt="furniture" />
       <Image src={"/bed.png"} width={232} height={286} alt="furniture" />
       <Image src={"/food.png"} width={242} height={223} alt="furniture" />
       <Image src={"/pot.png"} width={242} height={223} alt="furniture" />
       <Image src={"/frame.png"} width={242} height={223} alt="furniture" />


       </div>




    
    
    
    </>
  );
}