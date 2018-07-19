import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends React.Component{

	constructor(props){
		super(props);
	}

	renderList(){
		return this.props.books.map((book)=>{
			return (
				<li onClick={()=>{this.props.selectBook(book)}}
					key={book.title} 
					className='list-group-item'>{book.title}</li>
				);
			});
	}

	render(){
		return (
			<ul className='list-group col-sm-4'>
			{this.renderList()}
			</ul>
			);
	};
}

//this function tales the entire app state 
//and what ever gets returned from here
//isa the props for the BookList
function mapStateToProps(state){
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch){
	//whenever selectBook is called , 
	//the result should be passed to all our
	//reducers
	return bindActionCreators({selectBook: selectBook},dispatch)
}

//connect takes a funcvtion and a component and
//convert it into a container(smart Component)
//it also makes the 'selectBook' available as props in container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
