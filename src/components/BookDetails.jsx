import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  const { title, author, id } = book;

  return (
    <li onClick={() => removeBook(id)}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  );
}

export default BookDetails;