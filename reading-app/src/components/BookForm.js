import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';


const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='add Title' value={title} onChange={(e) => {setTitle(e.target.value)}} required/>

            <input type='text' placeholder='add Author' value={author} onChange={(e) => {setAuthor(e.target.value)}} required/>

            <input type='submit' value='Submit' />
        </form>
     );
}
 
export default BookForm;