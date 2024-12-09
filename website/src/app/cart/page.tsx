import Prefotter from "../component/Prefooter";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";


export default function Cart(){

return(

<>
 
  
  <div className="relative -top-4">
        <Image src={"/blur.png"} width={1440} height={316} alt="bg" />
        <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 flex flex-col items-center justify-center">
          <Image src={"/mainlogo.png"} width={77} height={77} alt="Logo" />
          <h3 className="font-bold text-4xl">Cart</h3>
          <div className="flex gap-2">
            <span className="font-medium text-base">Home | </span>
            <span className="font-light text-base">cart</span>
          </div>
        </div>
      </div>

      {/* Cart Table Header */}
      <div className="mx-6 sm:mx-12 md:mx-16 lg:mx-32 my-12 flex justify-between bg-[#F9F1E7] items-center p-4 text-base font-medium">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col md:flex-row mx-6 sm:mx-12 md:mx-16 my-16 space-y-6 md:space-x-16">
        <div className="flex items-center space-x-6 w-full md:w-auto">
          <Image src="/chairsofa.png" width={60} height={60} alt="Trophy" />
          <p className="text-[#9F9F9F] flex-1">Asgard Sofa</p>
          <p className="text-[#9F9F9F]">RS:250,000</p>
          <p className="text-[#9F9F9F]">RS:250,000</p>
          <p className="text-[#000000] font-extrabold">1</p>
          <p>
            <AiFillDelete className="text-[#B88E2F] w-6 h-6" />
          </p>
        </div>
      </div>

      {/* Cart Totals Section */}
      <div className="px-6 sm:px-12 lg:px-32 relative bg-[#F9F1E7] my-16 py-8 sm:py-16 text-center lg:text-left">
        <h1 className="text-3xl mb-4">Cart Totals</h1>
        <h2 className="text-base">Subtotal</h2>
        <span className="text-[#9F9F9F] mx-10 sm:mx-24 relative -top-4">Rs:2500.000</span>
        <br />
        <h2 className="text-xl">Total</h2>
        <span className="text-[#B88E2F] mx-10 sm:mx-24 relative -top-5">Rs:2500.000</span>
        <br />
        <br />
        {/* Checkout Button */}
        <Link href="./checkout"><button  className="text-xl hover:bg-[#B88E2F] border-2 border-black rounded-lg px-8 py-3 mx-auto  sm:mx-12 font-normal">
          Check Out
        </button></Link>
      </div>

 
 <Prefotter/>
                 
</>

);



}