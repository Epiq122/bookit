"use client";

import React from "react";
import Link from "next/link";
import room, { IRoom } from "@/backend/models/room";
import StarRatings from "react-star-ratings";
import RoomImageSlider from "@/components/room/RoomImageSlider";
import RoomFeatures from "@/components/room/RoomFeatures";
import BookingDatePicker from "@/components/room/BookingDatePicker";
import NewReview from "@/components/review/NewReview";
import ListReviews from "@/components/review/ListReviews";

interface Props {
  data: {
    room: IRoom;
  };
}

const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  return (
    <div className="container container-fluid">
      <h2 className="mt-5">{room.name}</h2>
      <p>{room.address}</p>

      <div className="ratings mt-auto mb-3">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="dodgerblue"
          starDimension="22px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
        <span className="no-of-reviews">{room?.numOfReviews} (Reviews)</span>
      </div>

      <RoomImageSlider images={room?.images} />

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>{room.description}</p>

          <RoomFeatures room={room} />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={room} />

          {/* TODO: ROOM MAP*/}
        </div>
      </div>
      <NewReview room={room} />
      <ListReviews />
    </div>
  );
};

export default RoomDetails;
