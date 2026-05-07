import type { PackageSummary } from "../../api/types/packageSummary";
import { searchPackges } from "../../api/queries/searchPackages";

export interface SearchLoaderResult {
    searchResult: PackageSummary[];
}

export async function searchLoader({request}: {request:Request}): Promise<SearchLoaderResult>  {
    const {searchParams} = new URL(request.url)
    const term = searchParams.get('term')

    if(!term) {
        throw new Error("SearchTerm term must be provided");
    }

    const result = await searchPackges(term);
    
    return {
        searchResult: result
    }
}