import { NextRequest, NextResponse } from "next/server";
import Room, { IRoom } from "@/backend/models/room";
import errorHandler from "@/backend/ultils/errorHandler";
import ErrorHandler from "@/backend/ultils/errorHandler";
import { catchAsyncErrors } from "@/backend/middlewares/catchAsyncErrors";
import APIFilters from "@/backend/ultils/apiFilters";

// Get all rooms => /api/rooms
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
  const resPerPage: number = 20;

  const { searchParams } = new URL(req.url);

  const queryStr: any = {};
  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  });

  const apiFilters = new APIFilters(Room, queryStr).search().filter();

  const totalRooms = await Room.countDocuments();
  let rooms: IRoom[] = await apiFilters.query;
  const filteredRoomsCount: number = rooms.length;

  apiFilters.pagination(resPerPage);
  rooms = await apiFilters.query.clone();

  return NextResponse.json({
    success: true,
    filteredRoomsCount,
    resPerPage,
    rooms,
  });
});

// Create new room => /api/rooms
export const newRoom = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const room = await Room.create(body);
  return NextResponse.json({
    success: true,
    room,
  });
});

// Get Room Details => /api/rooms/:id
export const getRoomDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);
    if (!room) throw new ErrorHandler(404, "Room not found");
    return NextResponse.json({
      success: true,
      room,
    });
  }
);
// Update Room Details => /api/rooms/:id
export const updateRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id);
    const body = await req.json();

    if (!room) throw new ErrorHandler(404, "Room not found");

    room = await Room.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    return NextResponse.json({
      success: true,
      room,
    });
  }
);
// Delete Room => /api/rooms/:id
export const deleteRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);

    if (!room) throw new ErrorHandler(404, "Room not found");

    // TODO: Delete images associated with the room
    await room.deleteOne();
    return NextResponse.json({
      success: true,
      message: "Room is deleted.",
    });
  }
);
