import React, { createContext, useState, useContext } from "react";
 
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [synopsis, setSynopsis] = useState('');


};


