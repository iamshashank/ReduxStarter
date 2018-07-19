import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_activebook'

//here mapping occure so our reducer is accessible by entire app

const rootReducer = combineReducers({
	//these 'books' 'activeBook' become the key on app state
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
