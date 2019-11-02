import React from 'react';
const SearchBooks = props => {
    
return props.books.length > 0 ? props.books.map(book => {
    <div>{book.title}</div>
}) : <div>Loading.........</div>
}
export default SearchBooks;
