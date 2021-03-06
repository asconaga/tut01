import React from 'react'

const SearchItem = (props) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
            id='searchItem'
            className="filters"
            type='text'
            role='searchbox'
            placeholder='Search Items'
            onChange={(e) => props.setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem
