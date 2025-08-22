import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBooks, deleteBook } from '../services/bookService';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const booksData = await getAllBooks();
      setBooks(booksData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks().catch((err) => console.error('Error fetching books:', err));
  }, []);

  const handleEdit = (bookId) => {
    navigate(`/edit/${bookId}`);
  };

  const handleDelete = async (bookId) => {
    try {
      const success = await deleteBook(bookId);
      if (success) {
        alert('Delete successful!');
        await fetchBooks();
      } else {
        alert('Error deleting book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Error deleting book');
    }
  };

  return (
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Library</h1>
          <button
              onClick={() => navigate('/add')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add a new Book
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {book.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                        onClick={() => handleEdit(book.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                        onClick={() => handleDelete(book.id)}
                        className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default BookList;
