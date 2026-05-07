import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom"
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
    const {searchResult} = useLoaderData() as SearchLoaderResult;

    const renderResults = searchResult.map((result) => {
        return <PackageListItem pack={result} key={result.name} />
    })

    return <div>
        <h1 className="text-2xl font-bold my-6">Search Result</h1>
        <div className="space-y-4 mt-4">
            {renderResults}
        </div>
    </div>
}