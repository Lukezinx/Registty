export interface PackageDetails {
    name: string;
    descripton: string;
    readme: string;
    author: {
        email: string;
        name: string
    }
    maintainers: {
        email: string;
        name: string;
    }
    license: string;
}