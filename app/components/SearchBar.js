import React from 'react'

const SearchBar = () => (
  <div className='has-icon-right' style={{ width: '100%' }}>
    <input
      placeholder='Search for address, block, txid...'
      className='form-input'
      type='text'
    />
    <i className='form-icon icon icon-search' />
  </div>
)

export default SearchBar
