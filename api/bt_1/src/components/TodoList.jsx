import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      alert('Lỗi khi tải danh sách todo!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      alert('Vui lòng nhập nội dung todo!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/todos', {
        title: newTodo.trim(),
        completed: false
      });

      if (response.status === 201) {
        setNewTodo('');
        await fetchTodos();
      }
    } catch (error) {
      console.error('Error adding todo:', error);
      alert('Lỗi khi thêm todo!');
    }
  };

  return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-2">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Nhập todo task..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                type="submit"
                disabled={!newTodo.trim()}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Thêm
            </button>
          </div>
        </form>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Danh sách todo:</h2>
          {todos.length === 0 ? (
              <p className="text-center text-gray-500">Chưa có todo nào</p>
          ) : (
              <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`p-3 border rounded-lg ${
                            todo.completed
                                ? 'bg-gray-100 border-gray-200 text-gray-500 line-through'
                                : 'bg-white border-gray-300'
                        }`}
                    >
                      {todo.title}
                    </li>
                ))}
              </ul>
          )}
        </div>
      </div>
  );
};

export default TodoList;
