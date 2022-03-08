import React, {  useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookTitle = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div>
            <h1>sphinX's Reading List</h1>
            <p>You currently have { books.length } {books.length === 1 ? 'book' : 'books' } to catch up on</p>
        </div>
     );
}
 
export default BookTitle;

