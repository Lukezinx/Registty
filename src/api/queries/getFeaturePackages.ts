import type { PackageDetails } from "../types/packageDetails";


const FEATURE_PACKGES = [
    'react',
    'typescript',
    'esbuild',
    'vite'
];


export async function getFeaturePackages() {
    const promise = FEATURE_PACKGES.map(async (name) => {
        const res = await fetch(`https://registry.npmjs.org/${name}`);
        return res.json();
    });

    const data = await Promise.all(promise)

    return data as PackageDetails[];
}