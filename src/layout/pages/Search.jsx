import React from 'react'
import "../../assets/css/search.css"
import SearchForm from '../components/search/SearchForm'
import Mainsec from '../components/search/Mainsec'

function Search() {
  return (
   <div className="search">
    <SearchForm/>
    <Mainsec/>
   </div>
  )
}

export default Search