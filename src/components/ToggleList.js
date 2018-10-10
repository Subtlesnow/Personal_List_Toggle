import React from 'react';
import data from '../data/data';

class ContactInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
	}
	toggleContact = () => {
		this.setState({
			show: !this.state.show
		})
	}

	render() {
		const {item} = this.props
		return (
			<li>
				<span key={item.id} onClick={ () => this.toggleContact()}>
				{item.first} {item.last}
				</span>
			</li>
		)
	}
}



class ToggleList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data
		}
	}
	render() {
		const { data } = this.state
		return(
			<ul>
			{data.map(item => (<ContactInfo item={item} key={item.id}/>))}
			</ul>
		)
	}
}

export default ToggleList;