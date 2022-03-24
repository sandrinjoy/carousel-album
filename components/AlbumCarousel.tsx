import React from "react";
import { photosType } from "../pages";
import Image from "next/image";
import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const AlbumCarousel: React.FC<{ photos: photosType[] }> = ({ photos }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="block w-full">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        centerMode={false}
        infinite={true}
        focusOnSelect={true}
        ssr
      >
        {photos?.length > 0 &&
          photos.map((x) => {
            return (
              <div
                key={x.id}
                className="flex flex-col items-center justify-center"
              >
                <Image src={x.thumbnailUrl} width={150} height={150} />
                <h3 className="text-sm font-medium text-gray-700">{x.title}</h3>
                <span>id: {x.id}</span>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
export default AlbumCarousel;
