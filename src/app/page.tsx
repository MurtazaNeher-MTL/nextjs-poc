"use client";

import { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import Carousel from "@/components/carousel";
import { modelData } from "@/Dummy/modelData";
import { formatDate } from "@/helpers/formateDate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

export default function Home() {
  const [selectedTab, setSelectTab] = useState(0);
  const defaultImage= modelData.vehicles.models[selectedTab].variants[0].color_options[0]
  const [isOpen, setIsOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState(defaultImage);
  const [addOnsArray,setAddOnsArray]=useState<number[]>([])


  const toggleSlideOver = () => {
    setIsOpen(!isOpen);
  };



  const notify = (id:number) => {
    // addOnsArray.push(id)
    setAddOnsArray([...addOnsArray, id]);
    console.log(addOnsArray,"arr",addOnsArray.includes(id))
    
    toast(`Added to Cart`);}

  return (
    <>
      <div className="flex h-[960px]">
        <Carousel tabIndex={selectedTab} color={selectedColor} />
        <ToastContainer />

        {isOpen && (
          <div
            className="relative z-10"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
             <div>


  </div>
            {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div> */}
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-end">
                          {/* <h2 className="text-lg font-medium text-gray-900 " id="slide-over-title"></h2> */}
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              onClick={toggleSlideOver}
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="absolute -inset-0.5"></span>
                              <p className="text-xs text-gray-500 ">
                                DELIVERING TO
                              </p>
                              <p className="text-sm text-black ">Pincode </p>
                            </button>
                          </div>
                        </div>

                        <fieldset aria-label="Choose a color">
                          <legend className="text-sm font-medium text-gray-500 flex">
                            COLOR .&nbsp;{" "}
                            <span className="text-sm text-black">
                              {selectedColor}
                            </span>
                          </legend>

                          <div className="mt-4 flex items-center space-x-3">
                            {modelData.vehicles.models[
                              selectedTab
                            ].variants[0].color_options.map((item, index) => {
                              return (
                                <label
                                  key={index}
                                  aria-label={item}
                                  className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                                    selectedColor.toLowerCase() ===
                                    item.toLowerCase()
                                      ? "ring ring-offset-1"
                                      : "ring-2"
                                  } ring-${selectedColor.toLowerCase()}-500`}
                                >
                                  <input
                                    type="radio"
                                    name="color-choice"
                                    value={selectedColor}
                                    className="sr-only"
                                    checked={
                                      selectedColor.toLowerCase() ===
                                      item.toLowerCase()
                                    }
                                    onChange={() =>
                                      setSelectedColor(item.toLowerCase())
                                    }
                                  />
                                  <span
                                    aria-hidden="true"
                                    className={`h-8 w-8 rounded-full border border-black border-opacity-10 bg-${item.toLowerCase()}-500`}
                                  ></span>
                                </label>
                              );
                            })}
                            {/* <label
                              aria-label="White"
                              className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none  ${
                                selectedColor === "White"
                                  ? "ring ring-offset-1"
                                  : "ring-2"
                              } ring-gray-400`} 
                            >
                              <input
                                type="radio"
                                name="color-choice"
                                value="White"
                                className="sr-only"
                                checked={selectedColor === "White"}
                                onChange={handleColorChange}
                              />
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"
                              ></span>
                            </label>

                            <label
                              aria-label="Black"
                              className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                                selectedColor === "Black"
                                  ? "ring ring-offset-1"
                                  : "ring-2"
                              } ring-gray-900`}
                            >
                              <input
                                type="radio"
                                name="color-choice"
                                value="Black"
                                className="sr-only"
                                checked={selectedColor === "Black"}
                                onChange={handleColorChange}
                              />
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                              ></span>
                            </label> */}
                          </div>
                        </fieldset>

                        <h3 className="text-xs font-medium text-gray-900 mt-10">
                          CHOOSE MODEL AND VARIANT
                        </h3>

                        <section className="flex gap-0 justify-start w-full rounded mt-5 mx-auto p-2">
                          {modelData.vehicles.models.map((item, index) => {
                            return (
                              <div key={index}
                                className={`flex justify-center items-center px-3   bg-gray-100 border ${
                                  selectedTab == index
                                    ? "border-green-500 rounded"
                                    : "border-0"
                                } p-[18px]`}
                                onClick={() => {
                                  setSelectTab(index);
                                  setSelectedColor(defaultImage);
                                }}
                              >
                                <img
                                  loading="lazy"
                                  src={item.title_img}
                                  alt={item.title}
                                  className="w-[70px]"
                                />
                              </div>
                            );
                          })}
                        </section>

                        <section
                          className="flex gap-5 justify-between p-2 mb-2 text-sm leading-5 text-center text-green-600 rounded-none  max-w-[352px] "
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(232, 247, 238, 0.00) 0%, #E8F7EE 100%)",
                          }}
                        >
                          <div className="flex gap-1.5 pr-5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/194580468bdb9ab4f33f9367f0cfb2b47b1ba567a3b1f40cf033738eca621e92?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                              alt=""
                              className="shrink-0 self-start mt-1 w-4 aspect-square"
                            />
                            <p>
                              {
                                modelData.vehicles.models[selectedTab]
                                  .variants[0].warranty
                              }{" "}
                              Battery Warranty included!
                            </p>
                          </div>
                          <button aria-label="Close warranty banner">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7c43faac20fd97f62d1d78edfa2e70a811cc6f43e523f12ee6a727d59641e09?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                              alt=""
                              className="shrink-0 self-start aspect-square w-[18px]"
                            />
                          </button>
                        </section>

                        <article className="flex flex-col bg-white rounded border border-green-600 border-solid max-w-[352px]">
                          <header className="flex flex-col px-4 pt-2.5 w-full text-base leading-6 text-neutral-800">
                            <h1>
                              {modelData.vehicles.models[selectedTab].name}
                            </h1>
                            <div className="shrink-0 mt-2.5 h-px border-t border-solid border-slate-200" />
                          </header>
                          <section className="flex z-10 gap-5 justify-between px-4 pt-5 pb-4 -mt-2.5 text-black">
                            <div className="flex flex-col">
                              <div className="text-xs leading-4">
                                CERTIFIED RANGE
                              </div>
                              <div className="flex gap-1 py-1.5">
                                <div className="grow text-base">
                                  {
                                    modelData.vehicles.models[selectedTab]
                                      .variants[0].certified_range_km
                                  }{" "}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <div className="text-xs leading-4">TOP SPEED</div>
                              <div className="flex gap-1 py-1.5">
                                <div className="grow text-base">
                                  {
                                    modelData.vehicles.models[selectedTab]
                                      .variants[0].top_speed_kmh
                                  }
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <div className="text-xs leading-4">0-40 km/h</div>
                              <div className="flex gap-1 py-1.5">
                                <div className="grow text-base">
                                  {
                                    modelData.vehicles.models[selectedTab]
                                      .variants[0].acceleration_0_40_kmh_sec
                                  }
                                </div>
                              </div>
                            </div>
                          </section>

                          <footer className="flex flex-col justify-center items-start px-4 py-px w-full text-sm leading-5 text-center text-green-600 bg-emerald-50 rounded-none">
                            <div className="flex gap-2.5 py-2.5 pr-3 pl-px">
                              <div className="grow my-auto">
                                Estimated delivery by{" "}
                                {formatDate(
                                  modelData.vehicles.models[selectedTab]
                                    .variants[0].delivery_date
                                )}
                                !
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5c56ec41e28f52d5a50761db2be882c2d46487d2f18eccdb6c41fd86f9aac4?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                                className="shrink-0 aspect-square w-[18px]"
                                alt=""
                              />
                            </div>
                          </footer>
                        </article>

                        <div className="flex gap-5 justify-between items-start pb-5 w-full mt-10 ">
                          <div className="flex gap-2.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38ba78ab65236c761891f8b4859ee0821f29724f2e062dc067e74e5d52de85ef?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                              alt=""
                              className="shrink-0 self-start w-8 aspect-square"
                            />
                            <div className="flex flex-col justify-center px-5">
                              <div className="text-xs leading-4 uppercase text-black">
                                DELIVERING TO
                              </div>
                              <div className="text-sm font-medium leading-5  text-black">
                                Select location
                              </div>
                            </div>
                          </div>
                          <button aria-label="Open menu" className="shrink-0">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44e4c7bbdb22106bb27bf8c00de96b3d27ce3333577f3ff5edb018cd8896bba?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                              alt=""
                              className="w-6 aspect-[0.67]"
                            />
                          </button>
                        </div>
                        <div className="flex gap-5 justify-between items-start pb-5 w-full mt-3 ">
                          <div className="flex gap-2.5">
                            <img
                              loading="lazy"
                              src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/purchase/compare-models-icon.svg"
                              alt=""
                              className="shrink-0 self-start w-8 aspect-square"
                            />
                            <div className="flex flex-col justify-center px-5">
                              <div className="text-xs leading-4 uppercase text-black">
                                COMPARE MODELS
                              </div>
                              <div className="text-sm font-medium leading-5  text-black">
                                View full spec sheet
                              </div>
                            </div>
                          </div>
                          <button aria-label="Open menu" className="shrink-0">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44e4c7bbdb22106bb27bf8c00de96b3d27ce3333577f3ff5edb018cd8896bba?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                              alt=""
                              className="w-6 aspect-[0.67]"
                            />
                          </button>
                        </div>

                        {/* //setup slider here */}
                        <div className="flex flex-col items-center justify-center ">
                          <img
                            loading="lazy"
                            src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/testride+freedcard+image/Frame+427319514.svg"
                            alt={"altText"}
                            className="w-full aspect-[2.33]"
                          />
                        </div>

                        <div className="flex items-center mt-5 bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/f85975cda9e88915e447c037a3396b76bb751742a6dec3e065dcdc95a43ed277?apiKey=971b6410d97242e7b97afd5891e4e40f&')] h-[85px] w-full bg-cover bg-center">
                          <p className="text-green-700 pl-5">
                            Explore finance as low as 6.99%* with 0% processing
                            fee!
                          </p>
                        </div>

                        <div></div>

                        <div className="flex gap-5 justify-between items-start pb-5 w-full mt-5">
                          <div className="flex gap-2.5">
                            <img
                              loading="lazy"
                              src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/purchase/your-orders.svg"
                              alt=""
                              className="shrink-0 self-start w-8 aspect-square"
                            />
                            <div className="flex flex-col justify-center px-5">
                              <div className="text-xs leading-4 uppercase text-black">
                                COMPARE MODELS
                              </div>
                              <div className="text-sm font-medium leading-5  text-black">
                                View full spec sheet
                              </div>
                            </div>
                          </div>
                          <button aria-label="Open menu" className="shrink-0">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44e4c7bbdb22106bb27bf8c00de96b3d27ce3333577f3ff5edb018cd8896bba?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                              alt=""
                              className="w-6 aspect-[0.67]"
                            />
                          </button>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <p className="text-lg text-black mb-5">
                              Explore accessories
                            </p>
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              <li className="flex py-6">
                                <div className="h-29 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src="https://assets.olaelectric.com/olaelectric-videos/Accessories/MWeb/Store/Accessory/Home%20mweb%20scooter%20cover.png"
                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">Scooter Cover</a>
                                      </h3>
                                      {/* <p className="ml-4">$90.00</p> */}
                                    </div>
                                    <p className="mt-1 text-sm text-black pb-5">
                                      ₹999
                                    </p>
                                  </div>
                                  <div className="flex-col flex-1 items-end justify-start text-sm">
                                    <p className="text-gray-500 text-xs">
                                      Ships by Jul 19
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="submit"
                                        className="flex-none rounded-md bg-green-100 px-8 py-2.5 text-sm font-semibold   text-green-500"
                                        onClick={() => notify(1)}
                                      >
                                      {addOnsArray.includes(1)? 'Added':'Add'} 
                                      </button>{" "}
                                     
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="flex py-6">
                                <div className="h-29 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src="https://assets.olaelectric.com/olaelectric-videos/Accessories/MWeb/Store/Accessory/Home%20mweb%20buddy%20step.png"
                                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">Scooter Cover</a>
                                      </h3>
                                      {/* <p className="ml-4">$90.00</p> */}
                                    </div>
                                    <p className="mt-1 text-sm text-black pb-5">
                                      ₹999
                                    </p>
                                  </div>
                                  <div className="flex-col flex-1 items-end justify-start text-sm">
                                    <p className="text-gray-500 text-xs">
                                      Ships by Jul 19
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="submit"
                                        className="flex-none rounded-md bg-green-100 px-8 py-2.5 text-sm font-semibold   text-green-500"
                                        onClick={() => notify(2)}
                                      >
                                       {addOnsArray.includes(2)? 'Added':'Add'} 
                                      </button>{" "}
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li className="flex py-6">
                                <div className="h-29 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src="https://d3hekx7hmqyjmq.cloudfront.net/accessoryStore/0_2024-05-10_15:06:40.926.png"
                                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">Scooter Cover</a>
                                      </h3>
                                      {/* <p className="ml-4">$90.00</p> */}
                                    </div>
                                    <p className="mt-1 text-sm text-black pb-5">
                                      ₹999
                                    </p>
                                  </div>
                                  <div className="flex-col flex-1 items-end justify-start text-sm">
                                    <p className="text-gray-500 text-xs">
                                      Ships by Jul 19
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="submit"
                                        className="flex-none rounded-md bg-green-100 px-8 py-2.5 text-sm font-semibold   text-green-500"
                                        onClick={() => notify(3)}
                                      >
                                       {addOnsArray.includes(3)? 'Added':'Add'} 
                                      </button>{" "}
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* More products... */}
                            </ul>

                            <div className="flex items-center gap-5 bg-gray-200 h-20 mt-5 w-full pl-3">
                              <input
                                type="checkbox"
                                className="h-7 w-7 text-green-700 border-green-300 rounded bg-green-500"
                              />
                              <label className="text-gray-700">
                                I agree to the{" "}
                                <a href="#" className="text-gray-500 underline">
                                  terms & conditions
                                </a>{" "}
                                and{" "}
                                <a
                                  href="#"
                                  className="text-blue-gray underline"
                                >
                                  Privacy Policy
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 ">
                        <div className="flex justify-start items-center text-base font-medium text-white bg-green-600 h-9 pl-5 mb-5">
                          <p className="text-xs">
                            Exchange Value up to ₹40,000
                          </p>
                        </div>

                        <div className="flex gap-0 max-w-[368px]">
                          <div className="flex flex-col self-start px-5">
                            <div className="flex gap-1.5 pr-2 text-xl font-medium leading-8 text-black whitespace-nowrap">
                              <div>{`₹${modelData.vehicles.models[selectedTab].variants[0].price}`}</div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8167d261ea1aad8b52e4d6a3bf6701d5a3ecfb184e5fd39c41cb0f0f07ef3596?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                                alt=""
                                className="shrink-0 my-auto aspect-square w-[18px]"
                              />
                            </div>

                            <div className="text-sm leading-5 underline text-black text-opacity-60">
                              EMI starting from ₹3,099
                            </div>
                          </div>
                          <div className="flex flex-col pb-6 text-center bg-white">
                            <Link
                              // href={{
                                // pathname: `/checkout2/${modelData.vehicles.models[selectedTab].id}`,
                                // query: {
                                //   tabIndex: selectedTab,
                                //   color: selectedColor,
                                // },
                                href={{
                                  pathname: `/checkout2/${modelData.vehicles.models[selectedTab].id}`,
                                  query: {
                                      tabIndex: selectedTab,
                                      color: selectedColor,
                                    },
                                }}
                                passHref
                              // }}
                              className="justify-center items-center px-16 py-3 bg-black text-white text-base leading-6 whitespace-nowrap"
                            >
                              Continue
                            </Link>
                          </div>
                        </div>

                        {/* <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Checkout
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div> */}
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
