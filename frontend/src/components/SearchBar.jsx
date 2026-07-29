import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {

    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleSearch() {

        const query = value.trim();

        if (!query) {
            return;
        }

        navigate(`/search?q=${encodeURIComponent(query)}`);

    }

    function handleKeyDown(event) {

        if (event.key === "Enter") {
            handleSearch();
        }

    }

    return (

        <div className="mb-6 w-full">

            <div className="relative">

                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-3
                        pr-14
                        text-base
                        shadow-sm
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-200
                    "
                />

                <button
                    type="button"
                    onClick={handleSearch}
                    aria-label="Pesquisar"
                    className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        rounded-lg
                        p-2
                        text-slate-500
                        transition
                        hover:bg-slate-100
                        hover:text-blue-600
                    "
                >
                    <FaSearch size={18} />
                </button>

            </div>

        </div>

    );

}