import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/bookService';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !quantity.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const newBook = {
        title: title.trim(),
        quantity: parseInt(quantity)
      };
      
      const result = await addBook(newBook);
      if (result) {
        alert(`Book "${result.title}" created successfully!`);
        navigate('/');
      } else {
        alert('Error creating book');
      }
    } catch (error) {
      console.error('Error creating book:', error);
      alert('Error creating book');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add a new Book</h1>
        
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
