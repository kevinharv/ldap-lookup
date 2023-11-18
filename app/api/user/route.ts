// GET request under user route
import { ADClient } from "@/utils/connect";

export async function GET(request: Request) {
    const AD = new ADClient();
    
    const bindStatus = await AD.bind();

    const searchResults = await AD.searchUser("kharvey"); 

    const unbindStatus = await AD.unbind();
    return Response.json(searchResults);
}