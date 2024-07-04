"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import Carousel from "@/components/carousel";
import { modelData } from "@/Dummy/modelData";


type AccessoryItemProps = {
    imageSrc: string;
    name: string;
    price: string;
  };
  
  const AccessoryItem: React.FC<AccessoryItemProps> = ({ imageSrc, name, price }) => (
    <article className="flex flex-col justify-between p-px rounded border border-solid border-zinc-900 border-opacity-10 max-w-[300px]">
      <img loading="lazy" src={imageSrc} alt={`${name} accessory`} className="self-center w-[108px]" />
      <div className="flex flex-col p-2">
        <h3 className="leading-[168%] text-zinc-900">{name}</h3>
        <p className="mt-1 text-xs leading-4 text-neutral-500">{price}</p>
        <button className="px-7 pt-1.5 pb-1 mt-1 leading-5 text-center text-green-600 whitespace-nowrap rounded bg-green-600 bg-opacity-10">
          +Add
        </button>
      </div>
    </article>
  );

type SectionProps = {
    icon: string;
    title: string;
    price: string;
    description?: string;
    children?: React.ReactNode;
  };
  
  const Section: React.FC<SectionProps> = ({ icon, title, price, description, children }) => (
    <section className="flex gap-4 pb-4 mt-4 border-b border-solid border-black border-opacity-10">
      <img loading="lazy" src={icon} alt="" className="shrink-0 self-start mt-2 w-8 aspect-square" />
      <div className="flex flex-col">
        <div className="flex gap-5 justify-between w-full text-lg text-black whitespace-nowrap">
          <h2 className="flex gap-2.5 justify-center py-0.5 my-auto leading-[121%]">
            <span className="grow">{title}</span>
            {title !== "Fulfilment charges" && (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd99b1d0b6064c143e240ebb86ca74fb02b18a0555d4c2ebe34a15c8f807245?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start aspect-[1.22] w-[22px]" />
            )}
          </h2>
          <div className="flex gap-5 justify-between text-right leading-[141%]">
            <span>{price}</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95c38d3bc89304d33ec05bd214afa0b41813968a3efb2a260595723c9c5e4954?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 my-auto w-2 aspect-[0.67]" />
          </div>
        </div>
        {description && <p className="mt-1 text-sm leading-5 text-black text-opacity-60">{description}</p>}
        {children}
      </div>
    </section>
  );

export default function SlideOver() {
    const [selectedTab, setSelectTab] = useState(0);
    const defaultImage= modelData.vehicles.models[selectedTab].variants[0].color_options[0]
    const [isOpen, setIsOpen] = useState(true);
    const [selectedColor, setSelectedColor] = useState(defaultImage);

  const accessories = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c46fc3965ecbd303c589f93b0d51a8f1f073bc4bba982a895dcc04f45f5599e8?apiKey=971b6410d97242e7b97afd5891e4e40f&", name: "Scooter Cover", price: "₹999" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/39879249330c7ad9649159c82d7da4322985d5e5280644a2a5314c9e25aa4f40?apiKey=971b6410d97242e7b97afd5891e4e40f&", name: "Buddy Step", price: "₹1,999" },
    { imageSrc: "https://d3hekx7hmqyjmq.cloudfront.net/accessoryStore/0_2024-05-10_15:06:40.926.png", name: "Fast Charger", price: "₹31,499" },
  ];

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const toggleSlideOver = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex h-[960px]">
      <Carousel tabIndex={selectedTab} color={selectedColor}/>
        {isOpen && (
          <div
            className="relative z-10"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div> */}
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      
                        <div className="flex items-start justify-start mb-5  ">
                          {/* <h2 className="text-lg font-medium text-gray-900 " id="slide-over-title"></h2> */}
                          <div className="ml-3 flex h-7 items-center ">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center px-2 w-10 h-10 bg-white rounded-3xl">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2e455e6fcec841c5511270fffb50ca3d3edf11f26cf429c036ed1a3f7b29029?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                                  alt={"alt"}
                                  className="w-full aspect-square"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col px-5 max-w-[352px]">
      <header className="flex gap-0 justify-between w-full text-neutral-800">
        <h1 className="text-2xl leading-9">Total payable</h1>
        <p className="text-xl leading-7">₹1,55,869</p>
      </header>
      <p className="w-full text-sm leading-5 text-black text-opacity-60">
        OET-044451816040724-VVF519
      </p>
      <div className="flex gap-4 pb-4 mt-8 border-b border-solid border-black border-opacity-10 bg-white">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/808cb076048be7260b91b9c86c9e73f3ac53fceb5f955e76cafddde5b676880e?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start w-8 aspect-square" />
        <div className="flex flex-col bg-white">
          <div className="flex gap-5 justify-between text-black ">
            <h2 className="flex gap-1 justify-center py-0.5 my-auto text-base leading-5">
              <span className="grow flex">Ola S1 Pro 2nd Gen  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4c3f62f1192f27047ec3346606ff7211ce97da48edb7fd5cdc57b096660f8d0?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start aspect-[1.22] w-[22px]" />
              </span>
            </h2>
            <div className="flex gap-0 justify-between text-lg leading-6 text-right whitespace-nowrap">
              <span>₹1,31,499</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70fa8a964cf74099663f6fcaaf491b625893402ef1655a26856e2b0488fbdecd?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 my-auto w-2 aspect-[0.67]" />
            </div>
          </div>
          <p className="mt-1 text-sm leading-5 text-black text-opacity-60">
            Amethyst • Includes accessories
          </p>
          <div className="flex flex-col px-3.5 pt-4 pb-3.5 mt-1 w-full bg-green-50 rounded-lg">
            <div className="flex gap-5 justify-between py-px">
              <div className="flex flex-col">
                <h3 className="text-base leading-5 text-zinc-700">Battery Warranty included</h3>
                <p className="text-xs leading-5 text-black text-opacity-60">For 8 years or 80,000 kms</p>
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5639ee558bdc3958d36820e376cd8c101caff6e75da98110ff418714e6741ab3?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start w-7 aspect-square" />
            </div>
            <button className="flex gap-px py-1.5 pr-3 text-base font-medium leading-6 text-green-600">
              <span className="flex-auto">Add kilometres</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fade20f5351a5440cc0ddeab7277f4d67194908d19ff3eb6a65a7315c6340f9b?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start w-2 aspect-[0.67]" />
            </button>
          </div>
        </div>
      </div>
      </div>
      <Section
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/da59ebeedaea0e8bc70f5b89642f2e906f42ea3552056ac4ea3318e16b5c4eab?apiKey=971b6410d97242e7b97afd5891e4e40f&"
        title="Registration and Road Tax"
        price="₹7,743"
        description="INDORE 452011"
      />

<section className="flex gap-4 pb-4 mt-4 border-b border-solid border-black border-opacity-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af84843bbac7cd0b4a86ee1021b7f7610ecedb9b37aee3f31558cd2685b7e9a8?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start w-8 aspect-square" />
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between w-full text-black whitespace-nowrap">
            <h2 className="my-auto text-base leading-5">Accessories</h2>
            <div className="flex gap-0 justify-between text-lg leading-6 text-right">
              <span>₹1,299</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e2996b0de7cbc9915300165036f796dec490018bcfc286aed09276704f2dbb?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 my-auto w-2 aspect-[0.67]" />
            </div>
          </div>
          <p className="mt-1 text-sm leading-5 text-black text-opacity-60">2 x Helmet</p>
          <div className="flex gap-2.5 pl-1.5 mt-2.5 text-xs font-medium bg-white rounded">
            {accessories.map((accessory, index) => (
              <AccessoryItem key={index} {...accessory} />
            ))}
          </div>
        </div>
      </section>

      <Section
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4c06c17c53e3acb218da5e89598b2e920562a02f74085a1fca222a3033d95df8?apiKey=971b6410d97242e7b97afd5891e4e40f&"
        title="Insurance"
        price="₹12,440"
        description="Collected by Ola Financial Services"
      />
      <Section
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a2788264f02dc8c576b01c8fe2e32e5142539f642d82a46c886e6fa388702947?apiKey=971b6410d97242e7b97afd5891e4e40f&"
        title="Fulfilment charges"
        price="₹2,888"
        description="Order fulfilment and documentation charges"
      />



<section className="flex gap-4 pb-4 mt-4 border-b border-solid border-black border-opacity-10">
      <img loading="lazy" src="https://assets.olaelectric.com/olaelectric-videos/price_summary_icons/Pick-up%20from%20centre.svg" alt="" className="shrink-0 self-start mt-2 w-8 aspect-square" />
      <div className="flex flex-col">
        <div className="flex gap-5 justify-between w-full text-lg text-black whitespace-nowrap">
          <h2 className="flex gap-0.5 justify-center py-0.5 my-auto leading-[121%]">
            <span className="grow">Pick-up from centre</span>
           
          
          </h2>
          <div className="flex gap-0 justify-between text-right leading-[141%]">
            <span className="text-green-300 text-md">Free</span>
            
          </div>
        </div>
        <div className="flex">

         <p className="mt-1 text-sm leading-5 text-black text-opacity-60">OLA Experience Centre, Baap Jee Nagar</p>
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd99b1d0b6064c143e240ebb86ca74fb02b18a0555d4c2ebe34a15c8f807245?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 self-start aspect-[1.22] w-[22px]" />
        </div>

        
      </div>
    </section>

    <section className="flex gap-4 pb-4 mt-4 border-b border-solid border-black border-opacity-10">
      <img loading="lazy" src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/olaCare/ola_care_icon.svg" alt="" className="shrink-0 self-start mt-2 w-8 aspect-square" />
      <div className="flex flex-col">
        <div className="flex gap-5 justify-between w-full text-lg text-black whitespace-nowrap">
          <h2 className="flex gap-0.5 justify-center py-0.5 my-auto leading-[121%]">
            <span className="grow">Add Ola Care</span>
           
          
          </h2>
         
        </div>
      

         <p className="mt-1 text-sm leading-5 text-black text-opacity-60">Get unlimited, free home service, 24x7 </p>
         <div className="flex gap-10">

         <p  className="mt-1 text-sm leading-5 text-black text-opacity-60">roadside and medical assistance for a year</p>
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95c38d3bc89304d33ec05bd214afa0b41813968a3efb2a260595723c9c5e4954?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 my-auto w-2 aspect-[0.67]" />
         </div>

   

        
      </div>
    </section>

    <section className="flex gap-4  pb-4 mt-4 border-b border-solid border-black border-opacity-10">
      <img loading="lazy" src="https://assets.olaelectric.com/olaelectric-videos/price_summary_icons/tag_coupon.svg" alt="" className="shrink-0 self-start mt-2 w-8 aspect-square" />
      {/* <div className="flex flex-col">
        <div className="flex gap-5 justify-between w-full text-lg text-black whitespace-nowrap">
          <h2 className="flex gap-0.5 justify-center py-0.5 my-auto leading-[121%]">
            <span className="grow">Add Ola Care</span>
           
          
          </h2>
         
        </div>
      

         <p className="mt-1 text-sm leading-5 text-black text-opacity-60">Get unlimited, free home service, 24x7 </p>
         <div className="flex gap-10">

         <p  className="mt-1 text-sm leading-5 text-black text-opacity-60">roadside and medical assistance for a year</p>
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95c38d3bc89304d33ec05bd214afa0b41813968a3efb2a260595723c9c5e4954?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 my-auto w-2 aspect-[0.67]" />
         </div>

   

        
      </div> */}

<div>
        <p className="text-gray-400 mb-3 text-md">COUPONS</p>
        <div className="flex justify-between    gap-9">
            <p className="text-green-400 text-lg">
            Apply coupon
            </p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95c38d3bc89304d33ec05bd214afa0b41813968a3efb2a260595723c9c5e4954?apiKey=971b6410d97242e7b97afd5891e4e40f&" alt="" className="shrink-0 my-auto w-2 aspect-[0.67]" />

        </div>
    </div>

    </section>

    <div className="flex items-center gap-5  h-20 mt-5 w-full pl-3 bg-gray-100">
                              <input
                                type="checkbox"
                                className="h-7 w-7 text-green-700 border-green-300 rounded bg-green-500"
                              />
                              <label className="text-gray-700">
                              I confirm that this is my first electric two-wheeler purchase and I agree to {" "}
                                <a href="#" className="text-gray-500 underline">
                                T&Cs
                                </a>
                              </label>
                            </div>
   
                            <div className="flex flex-col  text-center bg-gray-100 mt-5">
                          <button className="justify-center items-center px-16 py-3 bg-black text-white text-base leading-6 whitespace-nowrap">
                            Continue
                          </button>
                        </div>
                
                      </div>

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
