import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './Home.css';
import Book from '../Products/Book';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-brook-66929.herokuapp.com/events')
        .then((response) => response.json())
        .then(data => setBooks(data))
    }, []);

    console.log(books)


    return (
        <div className="books">
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    );
};

export default Home;