import CustomersTable from "@/app/ui/customers/table";
import { Suspense } from "react";
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
    }>
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Customers
            </h1>
            <Search placeholder="Search customers..." />

            <Suspense key={query}>
                <CustomersTable query={query} />
            </Suspense>
        </div>    
    )
}