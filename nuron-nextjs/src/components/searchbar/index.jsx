import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import productData from "../../data/products-03.json";
import { withTheme } from "@mui/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const filter = createFilterOptions();

export default function SearchBar({ isOpen }) {
    const router = useRouter();
    const [value, setValue] = React.useState(null);
    let products = [];

    productData.map((product) => {
        return !product.hasSubCategories ? products.push(product) : "";
    });

    return isOpen ? (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                    setValue({
                        title: newValue,
                    });
                    router.push(`/product/${newValue}`);
                } else {
                    setValue(newValue);
                    router.push(`/product/${newValue.title}`);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                options.some((option) => inputValue === option.title);

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            placeholder="searchbar"
            label="searchBar"
            id="Searchbar"
            options={products}
            className="rn-search-mobile form-group search-form-wrapper"
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                    return option;
                }
                // Add "xxx" option created dynamically
                // if (option.inputValue) {
                //   return option.inputValue;
                // }
                // Regular option
                return option.title;
            }}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                        {option.title}
                    </li>
                );
            }}
            sx={(theme) => ({
                width: 300,
                height: 50,
                color: "white",
                ...theme.applyStyles("dark", {
                    boxShadow: "none", // remove the box shadow in dark mode
                }),
            })}
            renderInput={(params) => (
                <TextField
                    {...params}
                    className="auto-search rn-search-mobile"
                />
            )}
        />
    ) : (
        ""
    );
}

SearchBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
