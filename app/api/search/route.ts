import { ADClient } from "@/utils/AD";


// SEARCH OBJECTS
// TAKES type (user, group, computer), term (string), and number of results
// Returns error if AD throws an error, results otherwise


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchType = searchParams.get("type");
    const searchTerm = searchParams.get("term");
    const numResults = searchParams.get("qtyResults");
    const AD = new ADClient();
    let searchResults = null;
    
    try {
        await AD.bind();
        if (searchType == "user") {
            searchResults = await AD.shortUserSearch(`${searchTerm}`, Number(numResults)); 
        } else if (searchType == "group") {
            searchResults = await AD.shortGroupSearch(`${searchTerm}`, Number(numResults)); 
        } else if (searchType == "computer") {
            searchResults = await AD.shortComputerSearch(`${searchTerm}`, Number(numResults)); 
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
        return Response.json({
            "type": searchType,
            "results": searchResults
        });
    } else {
        return Response.error(); 
    }
}