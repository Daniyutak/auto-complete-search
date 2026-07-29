import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const suggestionsList = [
    "javascript",
    "java",
    "python",
    "react",
    "docker",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    "javascript1",
    "java1",
    "python1",
    "react1",
    "docker1",
    "java5",
    "python5",
    "react5",
    "docke2r1",
    "nisi ut aliquip ex ea commodo consequat"
];


export default function SearchBar() {

    const [value, setValue] = useState("");
    const [previewValue, setPreviewValue] = useState("");

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


    function highlightMatch(text) {

        const query = value.trim();

        return (
            <>
                <strong>
                    {text.substring(0, query.length)}
                </strong>

                {text.substring(query.length)}
            </>
        );

    }


    function handleSuggestionClick(item) {

        setValue(item);
        setPreviewValue("");

    }


    return (

        <div className="mb-6 w-full">

            <div className="relative">

                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={previewValue || value}
                    onChange={(event) => {
                        setValue(event.target.value);
                        setPreviewValue("");
                    }}
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


                {
                    value.length >= 4 && (

                        <div
                            className="
                                absolute
                                top-full
                                left-0
                                mt-2
                                w-full
                                max-w-full
                                max-h-80
                                overflow-y-auto
                                overflow-x-hidden
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                shadow-lg
                            "
                        >

                            {
                                suggestionsList.map((item) => (

                                    <div
                                        key={item}
                                        onMouseEnter={() => setPreviewValue(item)}
                                        onMouseLeave={() => setPreviewValue("")}
                                        onClick={() => handleSuggestionClick(item)}
                                        className="
                                            px-4
                                            py-3
                                            cursor-pointer
                                            hover:bg-slate-100
                                            overflow-hidden
                                            whitespace-nowrap
                                            text-ellipsis
                                            text-left
                                        "
                                    >
                                        {highlightMatch(item)}
                                    </div>

                                ))
                            }

                        </div>

                    )
                }


            </div>

        </div>

    );

}