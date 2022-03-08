import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? ( 
        <div>
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>
     ) : (
         <div>
             <p>Empty No Books To Read</p>
         </div>
     );
}
 
export default BookList;
