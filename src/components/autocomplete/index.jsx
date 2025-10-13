import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/router";

const Autocomplete = ({ data, isOpen }) => {
    const results = [];
    const router = useRouter();

    data.forEach((product) => {
        if (!product.hasSubCategories) {
            results.push({ id: product._id, name: product.title });
        }
    });


    const handleOnSelect = (item) => {
        // the item selected
        router.push(`/product/${item.name}`);
    };

    const formatResult = (results) => (
        <span
            className="autocomplete-result"
            style={{
                textAlign: "left",
                borderRadius: "6px",
                color: "white",
                margin: "2px 0",
            }}
        >
            {results.name}
        </span>
    );

    return isOpen ? (
        <div
            style={{
                width: 260,
            }}
        >
            <ReactSearchAutocomplete
                items={results}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
                label="searchbar"
                styling={{
                    borderRadius: "8px",
                    backgroundColor: "#23232a",
                    color: "white",
                    boxShadow: "0 2px 12px 0 rgba(255,183,0,0.08)",
                    hoverBackgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    zIndex: 100,
                    iconColor: "#ffd500ff",
                }}
            />
        </div>
    ) : (
        ""
    );
};

export default Autocomplete;
