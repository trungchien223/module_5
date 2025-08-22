import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../services/bookService';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await getBookById(id);
        setTitle(book.title);
        setQuantity(book.quantity.toString());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book:', error);
        alert('Error fetching book');
        navigate('/');
      }
    };

    fetchBook().catch((err) => console.error("Unhandled fetchBook error:", err));
  }, [id, navigate]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !quantity.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const updatedBook = {
        title: title.trim(),
        quantity: parseInt(quantity)
      };
      
      const result = await updateBook(id, updatedBook);
      if (result) {
        alert(`Book "${result.title}" updated successfully!`);
        navigate('/');
      } else {
        alert('Error updating book');
      }
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Error updating book');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter book title"
              required
            />
          </div>
          
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter quantity"
              min="1"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
