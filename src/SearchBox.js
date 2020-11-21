import React from 'react'

const SearchBox =({searchfield, searchHandle}) => {
    return (
        <div className="pa2">
            <input 
                className="ba bw2 br2 b--light-silver pa2 bg-washed-yellow f4" 
                type="search" 
                placeholder="search robots" 
                onChange={searchHandle} 
            />
        </div>
        
    );
}

export default SearchBox;