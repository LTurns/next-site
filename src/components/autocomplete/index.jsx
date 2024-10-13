import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useRouter } from "next/router";


const Autocomplete = ({ data, isOpen }) => { 
    const results = [];
    const router = useRouter();

    data.forEach(product => {
      if (!product.hasSubCategories) {
        results.push({ id: product._id, name: product.title})
      }
    })

    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      // the item selected
      router.push(`/product/${item.name}`);
    }

  
    const formatResult = (results) => {
      return (
        <>
          {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {results.id}</span> */}
          <span style={{ display: 'block', textAlign: 'left', textWrap: 'wrap', color: 'black' }}>{results.name}</span>
        </>
      )
    }
  
    return isOpen ? (
          <div style={{ width: 200 }}>
            <ReactSearchAutocomplete
              items={results}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              autoFocus
              formatResult={formatResult}
              label="searchbar"
            />
        </div>
    ) : ""
  }

  export default Autocomplete;