import axios from "axios";

const API_URL = "http://localhost:8080/books";

// Lấy tất cả sách
export const getAllBooks = async () => {
    try {
        const result = await axios.get(API_URL);
        return result.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};

// Lấy sách theo ID
export const getBookById = async (id) => {
    try {
        const result = await axios.get(`${API_URL}/${id}`);
        return result.data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
};

// Tạo sách mới
export const addBook = async (book) => {
    try {
        const result = await axios.post(API_URL, book);
        if (result.status === 201) {
            return result.data;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error adding book:', error);
        return false;
    }
};

// Cập nhật sách
export const updateBook = async (id, book) => {
    try {
        const result = await axios.put(`${API_URL}/${id}`, book);
        if (result.status === 200) {
            return result.data;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error updating book:', error);
        return false;
    }
};

// Xóa sách
export const deleteBook = async (id) => {
    try {
        const result = await axios.delete(`${API_URL}/${id}`);
        if (result.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        return false;
    }
};
