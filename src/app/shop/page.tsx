import React from "react";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className="w-full h-auto bg-[#F0F2F3]">
      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
        <h2 className="font-bold text-[32px] sm:text-[50px] mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          {/* Email Input Section */}
          <div className="flex flex-col items-start mt-12 sm:mt-0">
           
            <span className="text-[#8F9499] text-[14px] sm:text-[16px] font-semibold mb-2 ml-3"></span> 
             
           
            <input type ="email" name= "email" placeholder=" Enter e-mail address" className=" w-[500px] h-[40px] border border-gray-400 rounded-[4px]"/>
          </div>
          {/* Submit Button Section */}
          <div className="flex flex-col items-center mt-4 sm:mt-0">
            <span className="text-[14px] sm:text-[16px] font-normal mb-2">
             <button type="submit" name="button" className="w-[140px] h-[37px] border border-gray-400 rounded-[4px] mt-4 sm:hover:scale-105 md:hover:scale-110 lg:hover:scale-125 transition-transform">Submit</button>
            </span>
           
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-[32px] sm:text-[50px] font-bold text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-24">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/featureimage2.png"
              alt="Instagram product 1"
              layout="fill"
              objectFit="cover"
            
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/featureimage3.png"
              alt="Instagram product 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/featureimage4.png"
              alt="Instagram product 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg ">
            <Image
              src="/images/featureimage5.png"
              alt="Instagram product 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/featureimage6.png"
              alt="Instagram product 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/images/featureimage7.png"
              alt="Instagram product 6"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;