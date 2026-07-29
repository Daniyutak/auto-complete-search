import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-100 flex justify-center items-start p-6">

            <section className="w-full max-w-2xl mt-16">

                <h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
                    Teste sua busca com auto-complete:
                </h1>

                <SearchBar />

            </section>

        </main>
    );
}