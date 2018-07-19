import React from 'react';
import {connect} from 'react-redux';


class BookDetail extends React.Component{

	constructor(props){
		super(props)

	}
	render(){

		if(!this.props.book)
			return <div>No book Selected</div>;

		return (
			<div>
				<h2>{this.props.book.title}</h2>
				<p></p>
			</div>
			);
	}
}

function mapStateToProps(state){
	return {
		book:state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);