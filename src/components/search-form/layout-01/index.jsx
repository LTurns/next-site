import { useState } from "react";

const SearchForm = () => {
    const [query, setQuery] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/coins/search?query=${query}`);

        const coin = await response.json();

        getSearchResults(coin);
    };
    return (
        <form
            className="search-form-wrapper"
            action="#"
            onSubmit={handleSubmit}
        >
            <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="search-icon">
                <button type="button">
                    <i className="feather-search" />
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
