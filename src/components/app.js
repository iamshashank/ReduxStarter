import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'

export default class App extends Component {
  render() {
    return (
      <div>
      	
      	<div>
      		<BookList className="col-md-4" />
      		<BookDetail className="col-md-8" />
      	</div>

      </div>
    );
  }
}
