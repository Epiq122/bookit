import {createEdgeRouter} from "next-connect";

import {NextRequest} from "next/server";
import {allRooms} from "@/backend/controllers/roomControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {
    params: {
        id: string
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>()
dbConnect();

router.get(allRooms)


export async function GET(req: NextRequest, ctx: RequestContext) {
    return router.run(req, ctx)
}