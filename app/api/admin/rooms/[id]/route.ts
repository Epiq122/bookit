import {createEdgeRouter} from "next-connect";

import {NextRequest} from "next/server";
import {deleteRoom, newRoom, updateRoom} from "@/backend/controllers/roomControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {
    params: {
        id: string
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>()
dbConnect();


router.put(updateRoom)
router.post(newRoom)
router.delete(deleteRoom)


export async function PUT(req: NextRequest, ctx: RequestContext) {
    return router.run(req, ctx)
}

export async function POST(req: NextRequest, ctx: RequestContext) {
    return router.run(req, ctx)
}

export async function DELETE(req: NextRequest, ctx: RequestContext) {
    return router.run(req, ctx)
}



