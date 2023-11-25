import { ADClient } from "@/utils/AD";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchType = searchParams.get("type");
    const searchTerm = searchParams.get("term");
    const AD = new ADClient();
    let searchResults = null;
    
    try {
        await AD.bind();
        if (searchType == "user") {
            searchResults = await AD.listUsers(`${searchTerm}`); 
        } else if (searchType == "group") {
            searchResults = await AD.listGroups(`${searchTerm}`); 
        } else if (searchType == "computer") {
            searchResults = await AD.listComputers(`${searchTerm}`); 
        } else {
            throw new Error("Invalid search type");
        }
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