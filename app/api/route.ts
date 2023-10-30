// GET request under user route

import { ADClient } from "@/utils/connect";

export async function GET(request: Request) {
    const ad = new ADClient();
    const dn  = await ad.bind();
    await ad.unbind();
    return Response.json({DN: dn});
}