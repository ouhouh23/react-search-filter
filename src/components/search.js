import React, {useState} from 'react'
import {SearchList} from './search-list.js'

export const Search = () => {
	const [searchConditions, setSearchConditions] = useState('')

	const updateSearch = (event) => {
		setSearchConditions(event.target.value)
	}

	return (
		<div className="search">
			<h1 className="search__heading">
				You can filter list below using the search input
			</h1>

			<input type="search" 
				className="search__input" 
				placeholder="Search..." 
				onChange={updateSearch}
			/>

			<SearchList conditions={searchConditions} />
		</div>
		)
}