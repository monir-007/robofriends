import React from 'react'

const SearchBox =({searchfield, searchHandle}) => {
    return (
        <div className="pa2">
            <input 
                className="ba b--green pa3 bg-light-gray" 
                type="search" 
                placeholder="search robots" 
                onChange={searchHandle} 
            />
        </div>
        
    );
}

export default SearchBox;