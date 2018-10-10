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
			<ul>
				<li key={item.id} onClick={ () => this.toggleContact()}>
				{item.first} {item.last} 	
				
				{
					this.state.show &&
					<div>
					<div>Age: {item.age}</div>
					<div>State: {item.state}</div>
					<div>Email: {item.email}</div>
					</div>
				}
				</li>
			</ul>)
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
			<div>
			{data.map(item => (<ContactInfo item={item} key={item.id}/>))}
			</div>
		)
	}
}

export default ToggleList;