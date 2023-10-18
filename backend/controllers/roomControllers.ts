import {NextRequest, NextResponse} from "next/server";
import Room from "@/backend/models/room";


// Get all rooms => /api/rooms
export const allRooms = async (req: NextRequest) => {
    const rooms = await Room.find()
    const resPerPage: number = 8;

    return NextResponse.json({
        success: true,
        resPerPage,
        rooms
    })
}

// Create new room => /api/rooms
export const newRoom = async (req: NextRequest) => {
    const body = await req.json()
    const room = await Room.create(body);
    return NextResponse.json({
        success: true,
        room,
    })


}

// Get Room Details => /api/rooms/:id
export const getRoomDetails = async (req: NextRequest, {params}: { params: { id: string } }) => {
    const room = await Room.findById(params.id)

    if (!room) {
        return NextResponse.json({
                message: 'Room not found',

            },
            {status: 404}
        );
    }

    return NextResponse.json({
        success: true,
        room
    })
}
// Update Room Details => /api/rooms/:id
export const updateRoom = async (req: NextRequest, {params}: { params: { id: string } }) => {
    let room = await Room.findById(params.id)
    const body = await req.json()

    if (!room) {
        return NextResponse.json({
                message: 'Room not found',

            },
            {status: 404}
        );
    }
    room = await Room.findByIdAndUpdate(params.id, body, {
        new: true,

    })


    return NextResponse.json({
        success: true,
        room
    })
}

// Delete Room => /api/rooms/:id
export const deleteRoom = async (req: NextRequest, {params}: { params: { id: string } }) => {
    const room = await Room.findById(params.id)

    if (!room) {
        return NextResponse.json({
                message: 'Room not found',

            },
            {status: 404}
        );
    }

    // TODO: Delete images associated with the room
    await room.deleteOne()
    return NextResponse.json({
        success: true,
        message: 'Room is deleted.'
    })
}
