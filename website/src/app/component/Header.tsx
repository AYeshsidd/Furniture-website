
import Image from "next/image";
import Link from "next/link";

import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
export default function Header(){
    return(
      <>

      <div className="flex flex-col justify-between md:flex-row items-center px-4 md:px-10 py-6">
        <div className="mb-4 md:mb-0 "> 
            {/* creating space for small only */}
       
        <Image src={"/logo.png"} width={185} height={41} alt="LOGO" className=" "/>
        </div>

        <div className="my-5 w-[430px] h-24 left[505px] mx-6 flex flex-wrap  justify-center space-x-6 md:space-x-10 text-sm md:text-base mb-4 md:mb-0">
          <Link href="http://localhost:3000">Home</Link>
          <Link href="./shop">Shop</Link>
          <Link href="./blog">Blog</Link>
          <Link href="./contact">Contact</Link> 
        </div>

<div className="flex space-x-9 ">  
   <Image src={"/vector.png"} width={23.33} height={18.67} alt="vector man" className=""/>
   <Image src={"/search.png"} width={22.17} height={22.17} alt="vector man" className=""/>

    <Link href="./singalProduct">
    <Image src={"/heart.png"} width={23.33} height={20.81} alt="vector man" className=""/>
    </Link>
 
  
  <Link href="./cart">
    <Image src={"/cart.png"} width={24.53} height={22.06} alt="vector man" className="" />
  </Link>

</div>


    </div>




      </>
    );
  }

