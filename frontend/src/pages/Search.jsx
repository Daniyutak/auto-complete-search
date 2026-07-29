import { useSearchParams } from "react-router-dom";

export default function Search() {

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");

    return (

        <main className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="rounded-xl bg-white p-10 shadow">

                <h1 className="mb-4 text-3xl font-bold">

                    🚧 Work in Progress

                </h1>

                <p className="text-slate-600">

                    Pesquisa solicitada:

                </p>

                <p className="mt-2 font-semibold">

                    {query}

                </p>

            </div>

        </main>

    );

}