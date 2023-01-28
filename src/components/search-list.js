import React from 'react'

export class SearchList extends React.Component {
	constructor(props) {
		super(props)
		this.items = ['apple', 'orange', 'grape', 'pineapple', 'coconut', 'nut', 'mango', 'lime', 'lemon']
	}

	filterItems() {
		this.filteredItems = this.items.filter(element => { 
			if (element.includes(this.props.conditions)) {
				return element
			}
			else if (this.props.conditions == '') {
				return element
			}
		})
	}

	render()  {
		this.filterItems()

		if (this.filteredItems.length > 0) {
			this.list = this.filteredItems.map((element, index) => <li key={index}>{element}</li>)
				return (
					<ul className="search__list">
						{this.list}
					</ul>
				)
		}
	}
}