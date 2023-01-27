import React from 'react'

export const SearchList = (props) => {
	const items = ['apple', 'orange', 'grape', 'pineapple', 'coconut', 'nut', 'mango', 'lime', 'lemon']
	const filteredItems = items.filter(element => { 
		if (element.includes(props.conditions)) {
			return element
		}
		else if (props.conditions == '') {
			return element
		}
	})

	if (filteredItems.length > 0) {
		const list = filteredItems.map((element, index) => <li key={index}>{element}</li>)

		return (
			<ul className="search__list">
				{list}
			</ul>
			)
	}
}