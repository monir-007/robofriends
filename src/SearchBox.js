import React from 'react'

const SearchBox =({searchfield, onSearchHandle}) => {
    return(
        <div className="pa2">
            <input className="ba b--green pa3 bg-light-gray" type="search" placeholder="search robots" onChange={onSearchHandle} />
        </div>
        
    );
}

export default SearchBox;