import { modelData } from "@/Dummy/modelData";
import { useState } from "react"

type propType = {
  tabIndex: number,
  color: string
}

export default function Carousel({tabIndex, color}: propType) {

  const [imageIndex, setImageIndex] = useState(0);
  console.log(modelData.vehicles.models[tabIndex].variants[0].scooter_color_img[color]?.[imageIndex], imageIndex);
  

  const onPrevImage=()=>{
      if (imageIndex == 0) {
        setImageIndex(modelData.vehicles.models[tabIndex].variants[0]
          .scooter_color_img[color.toLowerCase()].length-1)
        return;
      }
      setImageIndex(imageIndex - 1);
  }

  const onNextImage=()=>{
      if (
        imageIndex ==
        modelData.vehicles.models[tabIndex].variants[0]
          ?.scooter_color_img[color.toLowerCase()]?.length -1
      ){
        setImageIndex(0);
        return;
      }
      setImageIndex(imageIndex + 1);
  }

  // Accessing the image URL
  const imageUrl = modelData.vehicles.models[tabIndex].variants[0]?.scooter_color_img[color.toLowerCase()]?.[imageIndex];

  return (
    <div className="carousel w-[74%]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={imageUrl} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-50">
          <button
            className="btn btn-circle cursor-pointer z-30"
            onClick={onPrevImage}
          >
            ❮
          </button>
          <button
            className="btn btn-circle cursor-pointer z-30"
            onClick={onNextImage}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );}

