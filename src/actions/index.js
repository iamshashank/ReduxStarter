export function selectBook(book){
	//actoin is plain js object 'type', 'payload'
	return {
		type:'BOOK_SELECTED',
		payload: book
	};
}
