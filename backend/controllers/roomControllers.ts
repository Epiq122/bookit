import {NextRequest, NextResponse} from "next/server";
import Room from "@/backend/models/room";
import {nextDev} from "next/dist/cli/next-dev";

export const allRooms = async (req: NextRequest) => {
    return NextResponse.json({
        data: "Welcome to my nightmare"
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
