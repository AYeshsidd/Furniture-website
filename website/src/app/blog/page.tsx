import { BsCalendar2DateFill } from "react-icons/bs";
import Prefotter from "../component/Prefooter";
import { FaTag } from "react-icons/fa6";
import Image from "next/image";
import { IoManSharp } from "react-icons/io5";
export default function contact() {
    return (
        <>
        
            <div className="relative -top-4 ">
                <Image src={"/blur.png"} width={1440} height={316} alt="bg" />

                <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 flex justify-center flex-col items-center">
                    <Image src={"/mainlogo.png"} width={77} height={77} alt="Logo" />
                    <h3 className="font-bold text-3xl">Blog</h3>
                    <div className="flex gap-2">
                        <span className="font-medium text-base">Home | </span><span className="font-light text-base">Blog</span>
                    </div>
                </div>
            </div>


            <div className="my-24 mx-32">
                <Image src={"/laptop.png"} width={817} height={500} alt="Logo" />
               <div className="flex text-base text-[#9F9F9F] my-3 space-x-20">
                
                <span className="flex text-base"><IoManSharp/> Admin</span>
                <span className="text-base flex"> <BsCalendar2DateFill className="my-0"/> 14 Oct 2022 </span>
                <span className="text-base flex"> <BsCalendar2DateFill className="my-0 mx-1"/> Wood </span>
                
           
            </div>
           
            </div>

           <div className=" mx-32"> 


            <h1 className="text-3xl w-[517px] h-[45px]">Going all - in with millineal design</h1>
            
            <p className="text-sm text-[#9F9F9F]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aperiam similique quas libero qui officia dolor eius quam?
                 Exercitation <br />nostrum ut dolores blanditiis a saepe culpa sunt, officia aliquid voluptates?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. hihi <br /> Fuga dolores laboriosam, blanditiis 
                 beatae accusantium vero omnis quae illo! Quaerat officiis eaque dolore unde eius fuga et aliquid rir <br /> quae cum minu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda eius aut voluptates vel
                  ipsam, nisi totam usoll <br />ullam dolore molestias provident magnam. Lorem,
                   ipsum dolor sit amet consectetur adipisicing elit.repellendus blanditiis.
                   </p>

                   <h2 className="text-base my-12">Read more..</h2>


                   <div className="">
                <Image src={"/hands.png"} width={817} height={500} alt="Logo" />
               <div className="flex text-base text-[#9F9F9F] my-3 space-x-20">
                
                <span className="flex text-base"><IoManSharp/> Admin</span>
                <span className="text-base flex"> <BsCalendar2DateFill className="my-0"/> 14 Oct 2022 </span>
                <span className="text-base flex"> <FaTag className="my-1 mx-1"/> Home made </span>
                
                
           
            </div>
           
            </div>

            <div className="my-16"> 


<h1 className="text-3xl w-[506px] h-[45px]">Exploring new ways of decorating</h1>

<p className="text-sm text-[#9F9F9F]">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aperiam similique quas libero qui officia dolor eius quam?
     Exercitan <br />nostrum ut dolores blanditiis a saepe culpa sunt, officia aliquid voluptates?
     Lorem ipsum dolor sit amet consectetur adipisicing elithii<br /> Fuga dolores laboriosam, blanditiis 
     beatae accusantium vero omnis quae illo! Quaerat officiis eaque dolore unde eius fuga et aliquid<br /> quae cum minu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda eius aut voluptates vel
      ipsam, nisi totamul <br />ullam dolore molestias provident magnam. Lorem,
       ipsum dolor sit amet consectetur adipisicing elit.repellendus blanditiis.
       </p>

       <h2 className="text-base my-12">Read more..</h2>

</div>


                <Image src={"/coffee.png"} width={817} height={500} alt="Logo" />
               <div className="flex text-base text-[#9F9F9F] my-3 space-x-20">
                
                <span className="flex text-base"><IoManSharp/> Admin</span>
                <span className="text-base flex"> <BsCalendar2DateFill className="my-0"/> 14 Oct 2022 </span>
                <span className="text-base flex"> <BsCalendar2DateFill className="my-0 mx-1"/> Wood </span>
                
           
            
           
            </div>

           <div className="my-16"> 


            <h1 className="text-3xl w-[632px] h-[45px]">Handmade pieces that took time to make</h1>
            
            <p className="text-sm text-[#9F9F9F]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aperiam similique quas libero qui officia dolor eius quam?
                 Exercitn on <br />nostrum ut dolores blanditiis a saepe culpa sunt, officia aliquid voluptates?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. hih <br /> Fuga dolores laboriosam, blanditiis 
                 beatae accusantium vero omnis quae illo! Quaerat officiis eaque dolore unde eius fuga et aliquid rii<br /> quae cum minu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda eius aut voluptates vel
                  ipsam, nisi totam uslo <br />ullam dolore molestias provident magnam. Lorem,
                   ipsum dolor sit amet consectetur adipisicing elit.repellendus blanditiis.
                   </p>

                   <h2 className="text-base my-12">Read more..</h2>


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