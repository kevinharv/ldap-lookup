// GET request under user route
import { ADClient } from "@/utils/AD";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get("term");
    const AD = new ADClient();
    let searchResults = null;
    
    try {
        await AD.bind();
        searchResults = await AD.searchUser(`${searchTerm}`); 
    } catch (e) {
        console.error(e);
    }

    try {
        await AD.unbind();
    } catch (e) {
        console.error(e);
    }

    if (searchResults != null) {
        return Response.json(searchResults);
    } else {
        return Response.error(); 
    }
}