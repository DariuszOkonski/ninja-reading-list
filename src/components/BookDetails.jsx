import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const { title, author, id } = book;

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: id })}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  );
}

export default BookDetails;