import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useLazyQuery } from "@apollo/client/react";
import { GET_SUGGESTIONS } from "../graphql/queries";

export default function SearchBar() {

    const [value, setValue] = useState("");
    const [previewValue, setPreviewValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const [getSuggestions, { data }] = useLazyQuery(GET_SUGGESTIONS);

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

        setValue(item.text);
        setPreviewValue("");

    }


    return (

        <div className="mb-6 w-full">

            <div className="relative">

                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={previewValue || value}
                    onChange={async (event) => {const text = event.target.value;
                setValue(text);
                setPreviewValue("");

                    if (text.length >= 4) {
                        try {
                            const response = await getSuggestions({
                                variables: {
                                    query: text
                                }
                            });
                            setSuggestions(
                                response.data?.suggestions ?? []
                            );

                        } catch (error) {
                            console.error("Erro ao buscar sugestões:", error);
                            setSuggestions([]);
                        }


                    } else {setSuggestions([]);}
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
                                suggestions.map((item) => (

                                    <div
                                        key={item.id}
                                        onMouseEnter={() => setPreviewValue(item.text)}
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
                                        {highlightMatch(item.text)}
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