import React, { Component } from 'react';
import data from '../data/data';

class ContactInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
		this.toggleContact = this.toggleContact.bind(this)
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
				<li key={item.id} onClick={() => this.toggleContact()}>
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


class ToggleList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data,
			isLoading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState(prevState => ({
				isLoading: false
			}))
		},2000)
	}

	render() {
 
		if(this.state.isLoading) {
			return(
				<div>Is Loading</div>
			)
		}
		const { data } = this.state
		return(
			<div>
				{data.map(item => (<ContactInfo item={item} key={item.id}/>))}
			</div>
		)
	}
}

export default ToggleList;