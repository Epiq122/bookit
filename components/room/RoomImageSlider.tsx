import React from "react";
import { IImage } from "@/backend/models/room";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

interface Props {
  images: IImage[];
}

const RoomImageSlider = ({ images }: Props) => {
  return (
    <Carousel>
      {images?.length > 0 ? (
        images.map((image) => (
          <Carousel.Item key={image.public_id}>
            <div style={{ width: "100%", height: "460px" }}>
              <Image
                src={image?.url}
                alt={image?.url}
                layout="fill"
                className="d-block m-auto"
              />
            </div>
          </Carousel.Item>
        ))
      ) : (
        <Carousel.Item>
          <div style={{ width: "100%", height: "460px" }}>
            <Image
              src={"/images/default_room_image.jpg"}
              alt={"/images/default_room_image.jpg"}
              layout="fill"
              className="d-block m-auto"
            />
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default RoomImageSlider;
