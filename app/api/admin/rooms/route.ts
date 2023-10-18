import {createEdgeRouter} from "next-connect";

import {NextRequest} from "next/server";
import {newRoom} from "@/backend/controllers/roomControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {
    params: {
        id: string
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>()
dbConnect();


router.post(newRoom)


export async function POST(req: NextRequest, ctx: RequestContext) {
    return router.run(req, ctx)
}




