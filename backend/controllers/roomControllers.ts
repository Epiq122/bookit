import {NextRequest, NextResponse} from "next/server";
import Room from "@/backend/models/room";


export const allRooms = async (req: NextRequest) => {
    const rooms = await Room.find()
    const resPerPage: number = 8;

    return NextResponse.json({
        success: true,
        resPerPage,
        rooms
    })
}
export const newRoom = async (req: NextRequest) => {
    const body = await req.json()
    const room = await Room.create(body);
    return NextResponse.json({
        success: true,
        room,
    })


}

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
