/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image"; 
import { useEffect, useMemo, useState } from 'react' 
// icons
import { IoMdHeartEmpty } from "react-icons/io";
import { BsFillStarFill, BsInfoCircle, BsSafeFill, BsStarFill } from "react-icons/bs";
import { ship1Img, ship2Img, ship3Img } from "@/public/assets/images";

import { Item } from "@/types/type";

type Props = {
  searchParams : {
    id: number,
    title: string,
    image: string,
    description: string,
    price: number,
    oldPrice: number,
    brand: string,
    category: string,
    isNew: string,
},
}

const ProductDetail = ({searchParams}: Props) => {

 //const searchParams = useSearchParams()
 console.log(searchParams)
 //const params = searchParams
 
  
 //console.log(params);
  const [product, setProduct] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setProduct(searchParams) 
    setIsLoading(false)
  },[searchParams]) 
// console.log(product.title);

  return (
    <div className='w-full bg-white'>
      <div className='max-w-contenetContainer mx-auto flex items-center py-4'>
        <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>          
          <img 
            src={product.image} 
            alt="productImage"
            className="w-[80%] transform-origin-top-left cursor-move duration-500" />
        </div>
        <div className='w-1/3 h-full flex flex-col gap-2'> 
          <p className="p-2 text-[#004f9a] text-sm font-semibold border border-gray-400 
            rounded-md">500+ bought since yesterday</p>
          <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
            <div className=" flex justify-between items-center ">
              <div className=" flex gap-2">
                <button className=" px-2 py-[1px] text-[#004f9a] text-sm border-[1px] 
                  border-[#004f9a] rounded-sm">Best seller</button>
                <button className=" px-2 py-[1px] text-red-600 text-sm border-[1px] 
                  border-red-600 rounded-sm">Rollback</button>
              </div>
              <IoMdHeartEmpty className="text-2xl text-gray-600"/>
            </div>
            {/* Product Info */}
            <div className="flex flex-col gap-1">
              <p className="text-sm underline underline-offset-4">{product.brand}</p>
              <p className="text-xl font-semibold text-black">{product.title}</p>
              <p className="text-base text-zinc-500">{product.description}</p>
              <div className="flex gap-2 items-center text-xs mt-2">
                <div className=" flex gap-1">
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                </div>
                <p>25</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="font-semibold text-2xl text-[#2a8703]">
                  Now ${product.price}
                </p>
                <p className="text-sm text-zinc-500 line-through flex items-center gap-2">
                  ${product.oldPrice}{""}
                  <span>
                    <BsInfoCircle/>
                  </span>
                </p>
              </div>
            </div>
            {/* Online Info  */}
            <div>
              <p>
                <span className="font-semibold">$18/mo</span>{" "}
                <span className="font-bold">with Affirm</span>{" "}
                <span className=" underline underline-offset-2">Learn how</span>
              </p>
              <p className="text-xs text-zinc-500 flex items-center gap-1">
                Price when purchased online
                <span>
                  <BsInfoCircle/>
                </span>
              </p>
            </div>
            {/*  Add to cart */}
            <div className="border-b-[1px] border-b-zinc-300 pb-4">
              <button className="w-32 h-10 bg-blue text-white rounded-full 
              hover:bg-[#004f9a] duration-300">
                Add to cart
              </button>
            </div>
            {/*  Deliver Option  */}
            <div>
              <p className="text-base font-semibold"> 
                Row do you want your item?
              </p>
              <div className="w-full grid grid-cols-3 gap-4 text-xs">
                <div className=" w-full border border-zinc-400 rounded-md flex flex-col
                  items-center justify-center p-2">
                  <Image className="w-10" src={ship1Img} alt="shippingImage"/>
                  <p>Shipping</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
                <div className=" w-full border border-zinc-400 rounded-md flex flex-col
                  items-center justify-center p-2">
                  <Image className="w-10" src={ship2Img} alt="shippingImage"/>
                  <p>Pickup</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
                <div className=" w-full border border-zinc-400 rounded-md flex flex-col
                  items-center justify-center p-2">
                  <Image className="w-10" src={ship3Img} alt="shippingImage"/>
                  <p>Delivery</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
              </div>
              <p className="font-bold text-xs">
                Scaramento, 95829 {" "}
                <span className="font-normal underline underline-offset-2 ml-1">
                  Change
                </span>
              </p>
            </div>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default ProductDetail