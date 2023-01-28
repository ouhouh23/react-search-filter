import React, {useState} from 'react'
import {SearchList} from './search-list.js'

export class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {searchValue: ''}
		this.updateSearch = this.updateSearch.bind(this)
	}

	updateSearch(event)  {
		this.setState({searchValue: event.target.value})
	}

	render() {
		return (
			<div className="search">
				<h1 className="search__heading">
					You can filter list below using the search input
				</h1>

				<input type="search" 
					className="search__input" 
					placeholder="Search..." 
					onChange={this.updateSearch}
				/>

				<SearchList conditions={this.state.searchValue} />
			</div>
			)
		}
}